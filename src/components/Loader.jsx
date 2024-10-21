import React from "react";

const Loader = ({ loaded }) => {
  const loader = (
    <div className="loader-container w-100">
      <div className="h-100 d-flex align-items-center justify-content-center">
        <span className="loader"></span>
      </div>
    </div>
  );

  if (!loaded) {
    return loader;
  }
};

export default Loader;
