import { useState } from "react";
import Cell from "./Cell";

const Board = () => {
  const createTable = () => {
    let arr = [];
    for (let i = 0; i < 3; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push({ data: "P", fill: false });
      }
      arr.push(row);
    }
    return arr;
  };

  const [arr, setArr] = useState(createTable());
  // console.log(arr);
  const [click, setClick] = useState({
    turn: false,
    count: 0
  });

  const handleClick = (i, j) => {
    let newArr = arr;
    newArr[i][j] = { data: click.turn ? "0" : "X", fill: true };
    setClick({ count: click.count + 1, turn: !click.turn });

    setArr(newArr);

    if (click.count >= 5) checkWin();
  };

  const checkWin = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if(i==j)
      }
    }
  };

  const printBoard = () => {
    let board = [];
    for (let i = 0; i < 3; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(
          <Cell
            {...arr[i][j]}
            key={`${i}-${j}`}
            addSymbol={() => handleClick(i, j)}
          />
        );
        // console.log(`${i}-${j}`);
      }
      board.push(<tr>{row}</tr>);
    }
    return board;
  };

  return (
    <div>
      <p>Player: {click.turn ? "0" : "X"}</p>
      <table>
        <tbody>{printBoard()}</tbody>
      </table>
    </div>
  );
};

export default Board;
