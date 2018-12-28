"use strict"

const utils = new Utils();

class Game {
    constructor(userScore_span, computerScore_span, result_p) {
        this.scoreWin = 0;
        this.scoreLose = 0;
        this.userScore_span = utils.getElement(userScore_span);
        this.computerScore_span = utils.getElement(computerScore_span);
        this.result_p = utils.getQuerySelector(result_p);
    }

    main(userChoice) {

        const computerChoices = utils.getComputerChoice();

        switch (userChoice + computerChoices) {
            case "rs":
            case "pr":
            case "sp":
                this.win(userChoice, computerChoices);
                break;
            case "rp":
            case "ps":
            case "sr":
                this.lose(userChoice, computerChoices);
                break;
            case "rr":
            case "pp":
            case "ss":
                this.draw(userChoice, computerChoices);
                break;
        }
    }

    win(userChoice, computerChoice) {
        this.scoreWin++;
        const text = `${utils.convertToWord(userChoice)} wins ${utils.convertToWord(computerChoice)}<br>You win! :)`;
        this.paint(userChoice, "green-glow", text);
    }

    lose(userChoice, computerChoice) {
        this.scoreLose++;
        const text = `${utils.convertToWord(userChoice)} loses to ${utils.convertToWord(computerChoice)}<br>You lost! :(`;
        this.paint(userChoice, "red-glow", text);
    }

    draw(userChoice, computerChoice) {
        const text = `${utils.convertToWord(userChoice)} equals ${utils.convertToWord(computerChoice)}<br>It´s a draw!`;
        this.paint(userChoice, "gray-glow", text);
    }

    paint(userChoice, _class, text) {
        this.userScore_span.innerHTML = this.scoreWin;
        this.computerScore_span.innerHTML = this.scoreLose;
        this.result_p.innerHTML = text;
        utils.addClassEffect(userChoice, _class);
    }
}