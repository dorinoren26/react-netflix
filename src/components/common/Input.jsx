import className from "classnames";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group input">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        {...rest}
        className={className("form-control", { "is-invalid": error })}
        name={name}
        id={name}
      />
      <div className="invalid-feedback">{error}.</div>
    </div>
  );
};

export default Input;
