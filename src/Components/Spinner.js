import React from "react";
// import loading from "./Book.gif";
import { Puff } from "react-loader-spinner";

const Spinner = () => {
  // toggle = () => {
  //   if(this.props.mode === 'dark'){
  //     <img className ="my-3" src={loading} alt="" />
  //   }
  // }

  return (
    <div className="text-center my-3">
      {/* <img className="my-3" src={loading} alt="" /> */}
      <Puff
        type="Circles"
        color="#00BFFF"
        height={80}
        width={50}
        // timeout={3000} //3 secs
      />
    </div>
  );
};
export default Spinner;
