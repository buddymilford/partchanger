function positionMover() {
    var grid = [
        [90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
        [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
        [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
        [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
        [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
        [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
        [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
        [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
        [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    ];
    
    var moveCountGrid = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
    
    var row = 9;
    var column = 0;
    var position = grid[row][column];
    var numberOfMoves = 0;
    var mostNumberOfMovesPerCell = moveCountGrid[0][0];
    var leastNumberOfMovesPerCell = moveCountGrid[0][0];
    var randomNumber;
    
    while (position != 99) {
        randomNumber = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
        switch(randomNumber) {
            case 1: // up
                if (row != 0) {
                    row = row - 1;
                    position = grid[row][column];
                    moveCountGrid[row][column] = moveCountGrid[row][column] + 1;
                    numberOfMoves = numberOfMoves + 1;
                }
                break;
            case 2: // down
                if (row != 9) {
                    row = row + 1;
                    position = grid[row][column];
                    moveCountGrid[row][column] = moveCountGrid[row][column] + 1;
                    numberOfMoves = numberOfMoves + 1;
                }
                break;
            case 3: // left
                if (column != 0) {
                    column = column - 1;
                    position = grid[row][column];
                    moveCountGrid[row][column] = moveCountGrid[row][column] + 1;
                    numberOfMoves = numberOfMoves + 1;
                }
                break;
            case 4: // right
                if (column != 9) {
                    column = column + 1;
                    position = grid[row][column];
                    moveCountGrid[row][column] = moveCountGrid[row][column] + 1;
                    numberOfMoves = numberOfMoves + 1;
                }
                break;
        }
    }
    
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (moveCountGrid[j][i] < leastNumberOfMovesPerCell) {
                leastNumberOfMovesPerCell = moveCountGrid[j][i];
            }
            else if (moveCountGrid[j][i] > mostNumberOfMovesPerCell) {
                mostNumberOfMovesPerCell = moveCountGrid[j][i];
            }
        }
    }

    alert("TOTAL NUMBER OF MOVES: " + numberOfMoves + "\n"
         + "MOST NUMBER OF MOVES PER CELL: " + mostNumberOfMovesPerCell + "\n"
         + "LEAST NUMBER OF MOVES PER CELL: " + leastNumberOfMovesPerCell);
}