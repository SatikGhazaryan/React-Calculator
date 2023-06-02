const Input = (props) => {
  const text = props.value.reduce((elem, e) => (e = elem + e), "");

  return <input value={text} type="text" />;
};
export default Input;
