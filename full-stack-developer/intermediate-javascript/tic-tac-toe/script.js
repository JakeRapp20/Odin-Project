
// gameboard is a negative X and Y axis
let gameboard = {
    0: ["00", "10", "20" ],
    1: ["01", "11", "21" ],
    2: ["02", "12", "22" ],
}

let player1Active = true;
let player2Active = false;

// creates players with name and marker; 
function player(name, marker) {
    return { name, marker };
}

const game = (function () {
    // creates button listeners, and takes innerhtml value of tictactoe grid and runs game.select(x,y) for the coordinates
    const intializeGame = () => {
            let gameBoxUniqueName = 0
        for (let i = 0; i < 9; i++) {
            document.querySelector(`.game-box-button${gameBoxUniqueName}`).addEventListener("click",(e) => {
                fullString = e.target.children[0].innerHTML;
                let x = parseInt(fullString.charAt(0), 10);
                let y = parseInt(fullString.charAt(1), 10);
                game.select(x,y)
            })
            gameBoxUniqueName += 1;
        }
    }
    // displays gameboard to webpage and queries the tagged html divs 0 -> 8, Hides default gameboard values and removes gamebox-hidden from element once it's selected.
    const display = (gameboard) => {
        gameBoxUniqueName = 0 - 1 ;
        for (let x = 0; x < 3; x++){
            for (let y = 0; y < 3; y++) {
                gameBoxUniqueName = gameBoxUniqueName + 1
                let gameBox = document.querySelector(`.game-box${gameBoxUniqueName}`)
                gameBox.textContent = gameboard[x][y]
                if (gameboard[x][y] === "X" || gameboard[x][y] === "O") {
                    gameBox.classList.remove("gamebox-hidden")
                }
            }
        }
    }
    // Manipulates gameboard object based on player input, takes player input to access player.marker value to define X or O. 
    const select = (x, y) => {
        if (gameboard[y][x] !== "X" && gameboard[y][x] !== "O") {
            if (player1Active === true) {
                document.querySelector("#player1-bar").classList.add("player-active");
                document.querySelector("#player2-bar").classList.remove("player-active");
                gameboard[y][x] = player1.marker;
                player2Active = true;
                player1Active = false;
            } else {
                gameboard[y][x] = player2.marker;                
                document.querySelector("#player2-bar").classList.add("player-active");
                document.querySelector("#player1-bar").classList.remove("player-active");
                player1Active = true;
                player2Active = false;
            }
        } else return "Already Selected"
        checkGameStatus(gameboard)
        return game.display(gameboard)
    }
    // checks and sees if an array is all the same, based on the first item in the index
    const checkGameArray = (array) => {
        let first = array[0]
        return array.every((marker) => {
            return marker === first
        });
    }
    const checkGameStatus = (gameboard) => {
        // Finds all horizontal and vertical lines and compares them to checkGameArray
        for (let i = 0; i < 3; i++) {
            let horizatonalLine = []
            let verticalLine = []
            for (let j = 0; j < 3; j++){
                horizatonalLine.push(gameboard[i][j])
                verticalLine.push(gameboard[j][i])
            }
            if (game.checkGameArray(horizatonalLine) || game.checkGameArray(verticalLine)) {
                return console.log("Winner")
            }
        }
        // checks diagnal win by pushing values using rowOffset counter to increment in a diagnal
        for (let y = 0; y < 1; y++) {
            let diagnalLine = []    
            let rowOffest = 0
            for (let x = 0; x < 3; x++) {
                diagnalLine.push(gameboard[rowOffest][x])
                rowOffest += 1;
            }
            if (game.checkGameArray(diagnalLine))
                return console.log("Winner")
        }
        // performs a reverse diagnal push
        for (let y = 0; y < 1; y++) {
            let reverseDiagnalLine = []    
            let rowOffest = 2
            for (let x = 0; x < 3; x++) {
                reverseDiagnalLine.push(gameboard[rowOffest][x])
                rowOffest -= 1;
            }
            if (game.checkGameArray(reverseDiagnalLine))
                return console.log("Winner")
        }
    }
    return { display, select, checkGameStatus, checkGameArray, intializeGame}
})();

const player1 = new player("Jake", "X");
const player2 = new player("John", "O");

game.intializeGame();
game.display(gameboard)



