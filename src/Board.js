import { useState } from "react";
import Cell from "./Cell";

const Board = ({ n }) => {
  const createTable = () => {
    let arr = [];
    for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j < n; j++) {
        row.push({ data: "", fill: false });
      }
      arr.push(row);
    }
    return arr;
  };

  const [arr, setArr] = useState(createTable());
  // console.log(arr);
  const [click, setClick] = useState({
    turn: false,
    count: 1
  });

  const [winner, setWinner] = useState("");

  const handleClick = (i, j) => {
    let newArr = arr;
    newArr[i][j] = { data: click.turn ? "0" : "X", fill: true };
    setClick({ count: click.count + 1, turn: !click.turn });
    setArr(newArr);

    if (click.count >= 2 * n - 1) {
      const isWin = checkWin(i, j);
      isWin && setWinner(arr[i][j].data);
    }
  };

  const checkWin = (row, col) => {
    const Moves = new Set();

    if (row === col) {
      for (let i = 0; i < n; i++) Moves.add(arr[i][i].data);
      if (Moves.size === 1) return true;
      Moves.clear();
    }

    if (row + col === n - 1) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (i + j === n - 1) Moves.add(arr[i][j].data);
        }
      }
      if (Moves.size === 1) return true;

      Moves.clear();
    }

    for (let j = 0; j < n; j++) {
      Moves.add(arr[row][j].data);
    }
    if (Moves.size === 1) return true;

    Moves.clear();

    for (let i = 0; i < n; i++) {
      Moves.add(arr[i][col].data);
    }
    if (Moves.size === 1) return true;

    return false;
  };

  const printBoard = () => {
    let board = [];
    for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j < n; j++) {
        row.push(
          <Cell
            {...arr[i][j]}
            key={`${i}-${j}`}
            addSymbol={() => handleClick(i, j)}
            hasWon={winner}
          />
        );
      }
      board.push(<tr key={i}>{row}</tr>);
    }
    return board;
  };

  return (
    <div>
      <p>Player: {click.turn ? "0" : "X"}</p>
      <table>
        <tbody>{printBoard()}</tbody>
      </table>

      {winner && <p>Winner: {winner}</p>}
    </div>
  );
};

export default Board;
