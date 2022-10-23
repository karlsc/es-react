import '../style/FormButton.scss';

const FormButton = ({
  label,
  onClick
}) => (
  <button
    type="button"
    className="form-button"
    onClick={onClick}
  >
    {label}
  </button>
);

export default FormButton;
