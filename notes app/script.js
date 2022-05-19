showNotes();
// To save notes
const save = document.querySelector('#save-btn');

save.addEventListener('click', (e) => {
    let noteHeading = document.querySelector('#note_heading');
    let note = document.querySelector('#note');
    let localNotes = localStorage.getItem('notes');

    if (localNotes == null) {
        userNotes = [];
    } else {
        userNotes = JSON.parse(localNotes);
    }
    let notesObj = {
        heading: noteHeading.value,
        note: note.value
    }
    userNotes.push(notesObj);
    localStorage.setItem('notes', JSON.stringify(userNotes));
    noteHeading.value = "";
    note.value = "";
    showNotes();
});

// To show notes

function showNotes() {
    let localNotes = localStorage.getItem('notes');

    if (localNotes == null) {
        userNotes = [];
    } else {
        userNotes = JSON.parse(localNotes);
    }
    let noteTemp = "";
    userNotes.forEach((element, index) => {
        noteTemp += `<div class="note">
                <h3>${element.heading}</h3>
                <hr />
                <p>${element.note}</p>
                <button id="${index}" class="btn delete" onclick="delNote(this.id)">Delete Note</button>
                </div>`;
    });

    let preNotes = document.querySelector('.user-notes');

    if (userNotes.length == 0) {
        preNotes.innerHTML = `<p class="note">There aren't any Note to display use <em>note editor</em> to add note.</p>`;
    } else {
        preNotes.innerHTML = noteTemp;
    }
}


// To delete a note
delNote = (index) => {
    let localNotes = localStorage.getItem('notes');

    if (localNotes == null) {
        userNotes = [];
    } else {
        userNotes = JSON.parse(localNotes);
    }
    userNotes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(userNotes));

    showNotes();
};

// To delete all notes
let deleteAll = document.querySelector('.deleteAll');

deleteAll.addEventListener('click', () => {
    localStorage.clear();
    showNotes();
});

showNotes(); // To update notes

// To search notes
let searchNote = document.getElementById('search');

searchNote.addEventListener('input', () => {
    notes = document.querySelectorAll('.note');

    Array.from(notes).forEach((element) => {
        notesText1 = element.querySelectorAll('h3')[0].innerHTML.toLowerCase();
        notesText2 = element.querySelectorAll('p')[0].innerHTML.toLowerCase();

        searchQuery = searchNote.value.toLowerCase();

        if (notesText1.includes(searchQuery) || notesText2.includes(searchQuery)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
})

// function sayHello(greeting, Name) {
//     greeting = `Hi`;
//     Name = prompt('Enter Name');
//     if (Name === "" || Name === null || Name === " ") {
//         Name = 'User';
//     }
//     alert(`${greeting} ${Name} You can use this app to keep notes.`);
// }
// // calling a function
// sayHello();