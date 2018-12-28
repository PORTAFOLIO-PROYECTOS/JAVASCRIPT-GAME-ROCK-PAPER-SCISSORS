"use strict";

class Utils {
    getElement(value) {
        return document.getElementById(value);
    }

    getQuerySelector(value) {
        return document.querySelector(value);
    }

    getComputerChoice() {
        const choices = ["r", "p", "s"];
        const randonNumber = Math.floor(Math.random() * 3);
        return choices[randonNumber];
    }

    convertToWord(letter) {
        if (letter === "r") return "Rock";
        if (letter === "p") return "Paper";
        return "Scissors"
    }

    addClassEffect(choice, _class) {
        const etiq = this.getElement(choice);
        etiq.classList.add(_class);
        setTimeout(() => {
            etiq.classList.remove(_class);
        }, 300);
    }
}