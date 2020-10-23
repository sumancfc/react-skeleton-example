import React from "react";
import SkeletonAnimation from "./SkeletonAnimation";
import SkeletonElement from "./SkeletonElement";

const SkeletonArticle = ({ theme }) => {
  const themeClass = theme || "light";

  return (
    <div className={`skeleton__wrapper ${themeClass}`}>
      <div className='skeleton__article'>
        <SkeletonElement type='title' />
        <SkeletonElement type='text' />
        <SkeletonElement type='text' />
        <SkeletonElement type='text' />
      </div>
      <SkeletonAnimation />
    </div>
  );
};

export default SkeletonArticle;
