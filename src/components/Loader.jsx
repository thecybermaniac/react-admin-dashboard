import React from "react";

const Loader = () => {
  return (
    <div className="flex w-full justify-center items-center min-h-screen">
      <div className="flex gap-5">
        <div className="spinner"></div>
        <div className="spinner"></div>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Loader;
