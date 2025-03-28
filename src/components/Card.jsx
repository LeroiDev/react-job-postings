import React from "react";

const Card = ({ children, bg = "bg-gray-300" }) => {
  return <div className={`${bg} p-6 rounded-lg shadown-md`}>{children}</div>;
};

export default Card;
