import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  return (
    <div className="flex mt-36 justify-center items-center">
      <HashLoader color="#7743DB" />
    </div>
  );
};

export default Loading;
