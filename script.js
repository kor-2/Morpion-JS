// https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn
// https://www.codebrainer.com/blog/tic-tac-toe-javascript-game
let parent = document.getElementById('board')
for (let i = 0; i < 9; i++) {
    let box = document.createElement("div")
    parent.appendChild(box)
    box.classList = 'case '+i
}

let tabWin = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]