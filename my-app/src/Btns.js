import React from "react";

function Btns(props) {
  return (
    <div>
      <button className={props.class}  > {props.title} </button>
    </div>
  );
}

export default Btns;