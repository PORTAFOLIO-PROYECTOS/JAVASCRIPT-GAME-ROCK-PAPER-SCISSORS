"use strict";

const utils = new Utils();

//#region Variables
let userScore = 0;
let computerScore = 0;
const userScore_span = utils.getElement("user-score");
const computerScore_span = utils.getElement("computer-score");
const scoreBoard_div = utils.getQuerySelector(".score-board");
const result_p = utils.getQuerySelector(".result > p");
const rock_div = utils.getElement("r");
const paper_div = utils.getElement("p");
const scissors_div = utils.getElement("s");
//#endregion

function game(userChoice) {
    const computerChoices = utils.getComputerChoice();

    switch (userChoice + computerChoices) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoices);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoices);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${utils.convertToWord(userChoice)} beats ${utils.convertToWord(computerChoice)}. You win! :)`;
}

function lose() {
    computerScore++;
}

function draw() {

}

function init() {
    rock_div.addEventListener("click", () => {
        game("r");
    });

    paper_div.addEventListener("click", () => {
        game("p");
    });

    scissors_div.addEventListener("click", () => {
        game("s");
    });
}

init();