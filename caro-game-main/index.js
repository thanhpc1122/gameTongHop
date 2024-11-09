var boardSize = 21;
        var currentPlayer = 'X';
        var cells = [];

        var board = document.querySelector('.board');

        // Tạo bảng
        for (var i = 0; i < boardSize; i++) {
            var row = document.createElement('div');
            row.classList.add('row');
            board.appendChild(row);

            for (var j = 0; j < boardSize; j++) {
                var cell = document.createElement('div');
                cell.classList.add('cell');
                cell.addEventListener('click', makeMove.bind(null, i, j));
                row.appendChild(cell);
                cells.push(cell);
            }
        }

        function makeMove(row, col) {
            var cellIndex = row * boardSize + col;

            if (cells[cellIndex].textContent === '') {
                cells[cellIndex].textContent = currentPlayer;
                cells[cellIndex].classList.add(currentPlayer.toLowerCase());

                if (checkWinner(row, col)) {
                    alert(currentPlayer + ' wins!');
                    resetBoard();
                    return;
                }

                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }

        function checkWinner(row, col) {
            var cellIndex = row * boardSize + col;
            var currentCell = cells[cellIndex];

            // Kiểm tra hàng ngang
            var horizontalCount = 1;
            var i = col - 1;
            while (i >= 0 && cells[row * boardSize + i].textContent === currentPlayer) {
                horizontalCount++;
                i--;
            }
            i = col + 1;
            while (i < boardSize && cells[row * boardSize + i].textContent === currentPlayer) {
                horizontalCount++;
                i++;
            }

            // Kiểm tra hàng dọc
            var verticalCount = 1;
            var j = row - 1;
            while (j >= 0 && cells[j * boardSize + col].textContent === currentPlayer) {
                verticalCount++;
                j--;
            }
            j = row + 1;
            while (j < boardSize && cells[j * boardSize + col].textContent === currentPlayer) {
                verticalCount++;
                j++;
            }

            // Kiểm tra đường chéo chính
            var diagonalCount1 = 1;
            var k = 1;
            while (row - k >= 0 && col - k >= 0 && cells[(row - k) * boardSize + (col - k)].textContent === currentPlayer) {
                diagonalCount1++;
                k++;
            }
            k = 1;
            while (row + k < boardSize && col + k < boardSize && cells[(row + k) * boardSize + (col + k)].textContent === currentPlayer) {
                diagonalCount1++;
                k++;
            }

            // Kiểm tra đường chéo phụ
            var diagonalCount2 = 1;
            k = 1;
            while (row - k >= 0 && col + k < boardSize && cells[(row - k) * boardSize + (col + k)].textContent === currentPlayer) {
                diagonalCount2++;
                k++;
            }
            k = 1;
            while (row + k < boardSize && col - k >= 0 && cells[(row + k) * boardSize + (col - k)].textContent === currentPlayer) {
                diagonalCount2++;
                k++;
            }

            return (
                horizontalCount >= 5 ||
                verticalCount >= 5 ||
                diagonalCount1 >= 5 ||
                diagonalCount2 >= 5
            );
        }

        function resetBoard() {
            currentPlayer = 'X';
            cells.forEach(function (cell) {
                cell.textContent = '';
                cell.className = 'cell';
            });
        }