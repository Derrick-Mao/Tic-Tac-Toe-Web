let currentPlayer = 'x';
let moves = 0;
let xScore = 0;
let oScore = 0;
let board = [];
    for (let i = 0; i < 3; ++i) {
        board[i] = [];

        for (let j = 0; j < 3; ++j) {
            board[i][j] = '_';
        }
    }

let displayXscore = document.getElementById('displayXscore');
let displayOscore = document.getElementById('displayOscore');
let displayCurrPlayer = document.getElementById('displayCurrPlayer');

// event listeners
document.getElementById('one').addEventListener('click', function(){playGame(1)});
document.getElementById('two').addEventListener('click', function(){playGame(2)});
document.getElementById('three').addEventListener('click', function(){playGame(3)});
document.getElementById('four').addEventListener('click', function(){playGame(4)});
document.getElementById('five').addEventListener('click', function(){playGame(5)});
document.getElementById('six').addEventListener('click', function(){playGame(6)});
document.getElementById('seven').addEventListener('click', function(){playGame(7)});
document.getElementById('eight').addEventListener('click', function(){playGame(8)});
document.getElementById('nine').addEventListener('click', function(){playGame(9)});

document.getElementById('new_game').addEventListener('click', newGame);
document.getElementById('reset').addEventListener('click', resetScores);

// clicking on a block
function playGame(num) {
    if (num == 1) {
        board[0][0] = currentPlayer;
        let xoSpan = document.querySelector('#one .xo');
        if (!xoSpan.innerHTML && !gameOver()) {
            xoSpan.innerHTML = currentPlayer;
            ++moves;
            currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
            displayCurrPlayer.innerHTML = currentPlayer;

            aiRandOpp();
        }
    }

    else if (num == "2") {
        board[0][1] = currentPlayer;
        let xoSpan = document.querySelector('#two .xo');
        if (!xoSpan.innerHTML && !gameOver()) {
            xoSpan.innerHTML = currentPlayer;
            ++moves;
            currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
            displayCurrPlayer.innerHTML = currentPlayer;

            aiRandOpp();
        }
    }

    else if (num == "3") {
        board[0][2] = currentPlayer;
        let xoSpan = document.querySelector('#three .xo');
        if (!xoSpan.innerHTML && !gameOver()) {
            xoSpan.innerHTML = currentPlayer;
            ++moves;
            currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
            displayCurrPlayer.innerHTML = currentPlayer;

            aiRandOpp();
        }
    }

    else if (num == "4") {
        board[1][0] = currentPlayer;
        let xoSpan = document.querySelector('#four .xo');
        if (!xoSpan.innerHTML && !gameOver()) {
            xoSpan.innerHTML = currentPlayer;
            ++moves;
            currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
            displayCurrPlayer.innerHTML = currentPlayer;

            aiRandOpp();
        }
    }

    else if (num == "5") {
        board[1][1] = currentPlayer;
        let xoSpan = document.querySelector('#five .xo');
        if (!xoSpan.innerHTML && !gameOver()) {
            xoSpan.innerHTML = currentPlayer;
            ++moves;
            currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
            displayCurrPlayer.innerHTML = currentPlayer;

            aiRandOpp();
        }
    }

    else if (num == "6") {
        board[1][2] = currentPlayer;
        let xoSpan = document.querySelector('#six .xo');
        if (!xoSpan.innerHTML && !gameOver()) {
            xoSpan.innerHTML = currentPlayer;
            ++moves;
            currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
            displayCurrPlayer.innerHTML = currentPlayer;

            aiRandOpp();
        }
    }

    else if (num == "7") {
        board[2][0] = currentPlayer;
        let xoSpan = document.querySelector('#seven .xo');
        if (!xoSpan.innerHTML && !gameOver()) {
            xoSpan.innerHTML = currentPlayer;
            ++moves;
            currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
            displayCurrPlayer.innerHTML = currentPlayer;

            aiRandOpp();
        }
    }

    else if (num == "8") {
        board[2][1] = currentPlayer;
        let xoSpan = document.querySelector('#eight .xo');
        if (!xoSpan.innerHTML && !gameOver()) {
            xoSpan.innerHTML = currentPlayer;
            ++moves;
            currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
            displayCurrPlayer.innerHTML = currentPlayer;

            aiRandOpp();
        }
    }

    else if (num == "9") {
        board[2][2] = currentPlayer;
        let xoSpan = document.querySelector('#nine .xo');
        if (!xoSpan.innerHTML && !gameOver()) {
            xoSpan.innerHTML = currentPlayer;
            ++moves;
            currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
            displayCurrPlayer.innerHTML = currentPlayer;

            aiRandOpp();
        }
    }
}

// check game result
function gameOver() {
    if (moves < 9) {
        // check row match
        for (let i = 0; i < 3; ++i) {
            if (board[i][0] !== '_' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
                if (board[i][0] == 'o') {
                    ++oScore;
                    displayOscore.innerHTML = oScore;
                    alert("player O wins!");
                    newGame();
                    return true;
                }

                else {
                    ++xScore;
                    displayXscore.innerHTML = xScore;
                    alert("player X wins!");
                    newGame();
                    return true;
                }
            }
        }

        // check col match
        for (let j = 0; j < 3; ++j) {
            if (board[0][j] !== '_' && board[0][j] === board[1][j] && board[0][j] === board[2][j]) {
                if (board[0][j] == 'o') {
                    ++oScore;
                    displayOscore.innerHTML = oScore;
                    alert("player O wins!");
                    newGame();
                    return true;
                }

                else {
                    ++xScore;
                    displayXscore.innerHTML = xScore;
                    alert("player X wins!");
                    newGame();
                    return true;
                }
            }
        }
        
        // check diagonal match
        if (board[0][0] !== '_' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
            if (board[0][0] == 'o') {
                ++oScore;
                displayOscore.innerHTML = oScore;
                alert("player O wins!");
                newGame();
                return true;
            }

            else {
                ++xScore;
                displayXscore.innerHTML = xScore;
                alert("player X wins!");
                newGame();
                return true;
            }
        }

        // check diagonal match
        if (board[0][2] !== '_' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
            if (board[0][2] == 'o') {
                ++oScore;
                displayOscore.innerHTML = oScore;
                alert("player O wins!");
                newGame();
                return true;
            }

            else {
                ++xScore;
                displayXscore.innerHTML = xScore;
                alert("player X wins!");
                newGame();
                return true;
            }
        }
    }
    
    else {
        alert("It's a tie!");
        newGame();
        return true;
    }
        
    return false;
}


// new game button
function newGame() {
    let blocks = document.querySelectorAll('.xo');
    blocks.forEach(function(block) {
        block.innerHTML = "";
    });

    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            board[i][j] = '_';
        }
    }

    currentPlayer = 'x';
    moves = 0;
}

// reset button
function resetScores() {
    xScore = 0;
    oScore = 0;
    displayXscore.innerHTML = xScore;
    displayOscore.innerHTML = oScore;

    newGame();
}

// ai opponent
function aiRandOpp() {
    if (moves < 9) {
        let ctr = 0;
        const emptyBlocks = [];
        const blocksOrder = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                ++ctr;
                if (board[i][j] === '_') {
                    emptyBlocks.push([i, j]);
                    blocksOrder.push(ctr);
                }
            }
        }

        const randNum = Math.floor(Math.random() * emptyBlocks.length);
        const [row, col] = emptyBlocks[randNum];
        board[row][col] = currentPlayer;

        let idString;
        switch (blocksOrder[randNum]) {
            case 1: idString = "one"; break;
            case 2: idString = "two"; break;
            case 3: idString = "three"; break;
            case 4: idString = "four"; break;
            case 5: idString = "five"; break;
            case 6: idString = "six"; break;
            case 7: idString = "seven"; break;
            case 8: idString = "eight"; break;
            case 9: idString = "nine"; break;
            default: idString = "zero";
        }

        let xoSpan = document.querySelector(`#${idString} .xo`);
        if (!xoSpan.innerHTML && !gameOver()) {
            xoSpan.innerHTML = currentPlayer;
            ++moves;
            currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
            document.getElementById('displayCurrPlayer').innerHTML = currentPlayer;
        }}
    
}