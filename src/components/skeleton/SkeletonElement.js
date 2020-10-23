import React from "react";
import "./Skeleton.css";

const SkeletonElement = ({ type }) => (
  <div className={`skeleton ${type}`}> </div>
);

export default SkeletonElement;
