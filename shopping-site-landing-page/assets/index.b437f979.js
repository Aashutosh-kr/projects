const g=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function f(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=f(e);fetch(e.href,t)}};g();const d=document.querySelector("nav"),u=document.querySelector("#ham"),a=document.querySelector("#close");document.querySelector("#festival");const c=document.querySelector("#festival>ul"),m=document.querySelector("#festival-btn");document.querySelector("#shop");const l=document.querySelector("#shop>ul"),L=document.querySelector("#shop-btn");document.querySelector("#decor");const r=document.querySelector("#decor>ul"),y=document.querySelector("#decor-btn");u.addEventListener("click",n=>{d.classList.remove("-translate-x-full"),u.removeEventListener("click",globalThis)});a.addEventListener("click",n=>{d.classList.add("-translate-x-full"),a.removeEventListener("click",globalThis)});m.addEventListener("click",function(){c.classList.toggle("opacity-0"),c.classList.toggle("lg:-z-30"),c.classList.toggle("absolute")});L.addEventListener("click",function(){l.classList.toggle("opacity-0"),l.classList.toggle("lg:-z-30"),l.classList.toggle("absolute")});y.addEventListener("click",function(){r.classList.toggle("opacity-0"),r.classList.toggle("lg:-z-30"),r.classList.toggle("absolute")});
