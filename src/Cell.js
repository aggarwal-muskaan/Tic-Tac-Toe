const Cell = ({ data, fill, addSymbol }) => {
  // console.log(fill);
  return (
    <td>
      <button
        onClick={() => {
          if (!fill) addSymbol();
        }}
        // disable={fill}
      >
        {data || " "}
      </button>
    </td>
  );
};
export default Cell;
