const FormInput = ({
  setValue,
  showHighlight
}) => (
  <input
    type="number"
    className={`form-input${showHighlight ? ' form-input--highlighted' : ''}`}
    onChange={(event) => {
      setValue(Number(event.target.value));
    }}
  />
);

export default FormInput;
