function CampoTexto(props) {
  console.log(props.label);

  return (
    <div>
      <label>{props.label}</label>
      <input placeholder={`Digite seu ${props.label}`} />
    </div>
  );
}
export default CampoTexto;
