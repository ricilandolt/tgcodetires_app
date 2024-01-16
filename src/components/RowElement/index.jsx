import React from "react";
import "./index.css";

function RowElement(props) {
  return (
    <>
      <div className="row">
        {[...Array(98).keys()].map((el) => (
          <div key={el} className="parentelement">
            <div className="element"></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default RowElement;
