import React, { useRef } from "react";

const ImageToggleOnMouseOver = (props) => {
  const imageRef = useRef(null);
  return (
    <img
      onMouseOver={() => {
        imageRef.current.src = props.secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src = props.primaryImg;
      }}
      src={props.primaryImg}
      ref={imageRef}
      alt=""
    />
  );
};

export default ImageToggleOnMouseOver;
