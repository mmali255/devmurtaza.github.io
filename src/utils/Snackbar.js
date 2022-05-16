// import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./Snackbar.css";

const Snackbar = (props) => {
  //   const [showSnackbar, setShowSnackbar] = useState(false);

  //   useImperativeHandle(ref, () => ({
  //     show() {
  //       setShowSnackbar(true);
  //       setTimeout(() => {
  //         setShowSnackbar(false);
  //       }, 3000);
  //     },
  //   }));
  return (
    <div
      className="snackbar"
      style={{
        backgroundColor: "#00F593",
        color: "black",
      }}
    >
      <div className="symbol">
        <h1>&#x2713;</h1>
      </div>
      <div className="message">{props.message}</div>
    </div>
  );
};

export default Snackbar;
