import React from "react";
import SkeletonElement from "./SkeletonElement";

const SkeletonArticle = () => {
  return (
    <div className='skeleton__wrapper'>
      <div className='skeleton__article'>
        <SkeletonElement type='title' />
        <SkeletonElement type='text' />
        <SkeletonElement type='text' />
        <SkeletonElement type='text' />
      </div>
    </div>
  );
};

export default SkeletonArticle;
