import React from "react";
// Styles

const FormSimp = (props) => {
  return (
    <div className="field control">
      <input
        className="input is-small"
        required
        placeholder={props.placeholder}
        id={props.id}
        type={props.type}
      />
    </div>
  );
};

export default FormSimp;
