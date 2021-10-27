import React from "react";
// Styles

const FormSimp = (props) => {
  return (
    <div className="field control">
      <input
        className="input is-small"
        type="text"
        required
        placeholder={props.placeholder}
        type={props.type}
      />
    </div>
  );
};

export default FormSimp;
