let board = "";

for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}
console.log(board);