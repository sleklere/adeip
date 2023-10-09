const Input = ({
  type,
  name,
  labelText,
  placeholder,
  errMsg,
  isInvalid,
  classes,
  ...props
}) => (
  <label>
    {labelText}
    <input
      className={classes}
      type={type}
      name={name}
      placeholder={placeholder}
      {...props}
    />
    {isInvalid && <p className="p-invalid">{errMsg}</p>}
  </label>
);
export default Input;
