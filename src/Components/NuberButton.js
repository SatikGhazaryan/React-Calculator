import { MyContext } from "../Context";
import { useContext } from "react";

const NumberButton = (props) => {
  const changeContext = useContext(MyContext);
  return (
    <input
      value={props.value}
      type="button"
      key={props.k}
      onClick={function () {
        changeContext.setVal((e) => [...changeContext.val, props.value]);
      }}
    />
  );
};

export default NumberButton;
