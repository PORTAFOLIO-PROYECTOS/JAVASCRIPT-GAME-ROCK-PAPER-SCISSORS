"use strict";

const userScore_span = "user-score";
const computerScore_span = "computer-score";
const result_p = ".result > p";

const game = new Game(userScore_span, computerScore_span, result_p);

(() => {
    document.getElementById("r").addEventListener("click", () => {
        game.main("r");
    });

    document.getElementById("p").addEventListener("click", () => {
        game.main("p");
    });

    document.getElementById("s").addEventListener("click", () => {
        game.main("s");
    });
})();