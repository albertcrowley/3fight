
module.exports = {};


class Board {
    /**
     * Create a new robot at X, Y
     *
     * @param {int} width of the board
     * @param {int} height of the board
     * @param {function} callback to call when the board is initialized
     */
    constructor(width, height, ready_callback) {
        this.x = width;
        this.y = height;
        this.callback = ready_callback;
        this.data = new Array(this.x);
        for (let i = 0; i < this.x; i++) {
            this.data[i] = new Array(this.y);
            for (let j = 0; j < this.y; j++) {
                this.data[i][j] = 0;
            }
        }
        let {ScoreBoard} = require('./scoreboard.js');
        this.scoreboard = new ScoreBoard(1, 0, 0);

        if (process.versions['electron']) {
            this.electron = true;

            // this.robot_img = new Image();
            // this.robot_img.src = "./resources/robot.svg";
            // this.robot_img.onload = () => {this.ready(); };
            //
            // this.trash_img = new Image();
            // this.trash_img.src = "./resources/recycle-bin.svg";
            // this.trash_img.onload = () => {this.ready(); };
            //
            // this.player_img = new Image();
            // this.player_img.src = "./resources/player-walking.svg";
            // this.player_img.onload = () => {this.ready();};

        } else {
            this.electron = false;
        }
        setTimeout(() => {
            this.ready();
        }, 500);
    }

    /**
     * Returns true when the board is ready to work
     *
     * @returns {boolean}
     */
    ready() {
        // if (( this.robot_img.height > 0 ) && ( this.player_img.height > 0 ) && ( this.trash_img.height > 0 ) ) {
        this.callback();
        // }
    }


    /**
     * Run all the setup for a new level.
     * @param {int} level
     */
    setupLevel(level) {
    }


    /**
     * Run one tick of the game
     *
     * @param {keypress} key
     */
    tick(key) {
        this.draw();
    }

    /**
     * Moves the player
     * @param {keypress} key
     */

    draw(canvas) {
        const square_width = 50;
        const square_height = 50;
        const canvas_width = 500;
        const canvas_height = 500;

        if (!canvas) {
            canvas = window.document.getElementById("canvas");
        }
        let ctx = canvas.getContext("2d");

        // clear
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.rect(0, 0, 500, 500);
        ctx.fill();
        ctx.stroke();

        // board
        ctx.fillStyle = "#000000";
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        for (let x = 0; x < canvas_width; x += square_width) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas_height);
        }
        for (let y = 0; y < canvas_height; y += square_width) {
            ctx.moveTo(0, y);
            ctx.lineTo(canvas_height, y);
        }
        ctx.stroke();

    }
}

module.exports.Board = Board;
