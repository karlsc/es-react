const FormInput = ({
  setValue,
  showHighlight
}) => (
  <input
    type="number"
    className={`form-input${showHighlight ? ' form-input--highlighted' : ''}`}
    onChange={({ target: { value }}) => setValue(Number(value))}
  />
);

export default FormInput;
