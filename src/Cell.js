const Cell = ({ data, fill, addSymbol, hasWon }) => {
  return (
    <td>
      <button
        onClick={() => {
          if (!fill && !hasWon) addSymbol();
        }}
        style={{ height: "20px", width: "20px" }}
      >
        {data || " "}
      </button>
    </td>
  );
};
export default Cell;
