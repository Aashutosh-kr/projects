console.log("Welcome to tic tac toe.");

let turnAudio = new Audio('tone/ting.mp3');
let gameovertone = new Audio('tone/gameover.mp3');

let turn = "X";
let gameover = false;

// Function to change turn
function changeTurn() {
    return turn === "X" ? "0" : "X";

}

// Function to check win
function checkWin() {

    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 1.2, 3.5, 0],
        [3, 4, 5, 1.2, 10.8, 0],
        [6, 7, 8, 1.2, 18, 0],
        [0, 3, 6, -6.4, 10.8, 90],
        [1, 4, 7, 1.2, 10.8, 90],
        [2, 5, 8, 8.7, 10.8, 90],
        [0, 4, 8, 1.2, 10.8, 45],
        [2, 4, 6, 1.2, 10.8, -45]
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector(".turninfo").innerHTML = boxtexts[e[0]].innerText + ' won';
            gameover = true;
            document.getElementById('imgbox').getElementsByTagName('img')[0].style.width = '10rem';
            document.getElementById('imgbox').getElementsByTagName('img')[0].style.height = '10rem';
            gameovertone.play();

            document.getElementById("line").style.transform = `translate(${e[3]}rem, ${e[4]}rem) rotate(${e[5]}deg)`;
            document.getElementById("line").style.width = "40vh";
            document.getElementById("line").style.borderWidth = "2px";
        }
    })
}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!gameover) {
                turnAudio.play();
                document.getElementsByClassName("turninfo")[0].innerText = "Turn For " + turn;

            }
        }
    })
})

// Reset
let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
    })
    turn = 'X';
    gameover = false;
    if (!gameover) {
        document.getElementsByClassName("turninfo")[0].innerText = "Turn For " + turn;
        document.getElementById('imgbox').getElementsByTagName('img')[0].style.width = '0';
        document.getElementById('imgbox').getElementsByTagName('img')[0].style.height = '0';
        document.getElementById("line").style.transform = `translate(10.8rem,10.8rem) rotate(0deg)`;
        document.getElementById("line").style.width = "0vh";
        document.getElementById("line").style.borderWidth = "0px";
    }

})