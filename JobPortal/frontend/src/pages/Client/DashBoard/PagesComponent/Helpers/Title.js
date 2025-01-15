import React from "react";

const Title = (props) => {
  return (
    <div>
      <h2 className="my-2 text-2xl font-semibold text-gray-700 ">
        {props.title}
      </h2>
    </div>
  );
};

export default Title;
