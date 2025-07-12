import './Input.css'

const Input = ({type, setInput, placeHolder, value}) => {
  return (
    <input type={type}
      onChange={evento => setInput(evento.target.value)}
      placeholder={placeHolder}
      value={value}
    />

  );
}



export default Input;