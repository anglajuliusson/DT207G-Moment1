"use strict";

// Elements
let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");

// Eventlyssnare
openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

function toggleMenu (){
    let navMenuEl = document.getElementById("nav-menu");
    
    let style = window.getComputedStyle(navMenuEl);

// Visa eller dölj knapp beroende på menyn är synlig eller ej
    if(style.display === "none") {
        navMenuEl.style.display = "block";
    } else {
        navMenuEl.style.display ="none";
    }
}