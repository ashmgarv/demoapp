import React from "react";
const InputField = ({
  type,
  value,
  name,
  label,
  placeholder,
  error,
  onChange,
}) => {
  return (
    <div className="form-group col-12">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        className="form-control"
        id={name}
        placeholder={placeholder}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default InputField;
