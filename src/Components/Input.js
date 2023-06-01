const Input = (props) => {
  const text = props.value.reduce((elem, e) => (e = elem + e), "");
  console.log(text);
  return <input value={text} type="text" />;
};
export default Input;
