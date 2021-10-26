import React from "react";
// Styles

const FormSimp = (props) => {
  return (
    <div className="field control">
      <input className="input" type="text" placeholder={props.placeholder} />
    </div>
  );
};

export default FormSimp;
