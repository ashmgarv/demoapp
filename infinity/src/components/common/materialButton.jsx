import React from "react";
const MaterialButton = ({ handleClick, name }) => {
  return (
    <button
      className="btn btn-outline-primary my-2 my-sm-0 m-2"
      type="submit"
      onClick={handleClick()}
    >
      {name}
    </button>
  );
};

export default MaterialButton;
