import React from "react";
// import loading from "./Book.gif";
import Loader from "react-loader-spinner";

const Spinner = () => {
  // toggle = () => {
  //   if(this.props.mode === 'dark'){
  //     <img className ="my-3" src={loading} alt="" />
  //   }
  // }

  return (
    <div className="text-center my-3">
      {/* <img className="my-3" src={loading} alt="" /> */}
      <Loader
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
