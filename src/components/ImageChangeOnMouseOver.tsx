import React from "react";
import ImageToggleOnMouseOver from "./ImageToggleOnMouseOver";
const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <h1>Images</h1>
      <ImageToggleOnMouseOver
        primaryImg="./assets/Speaker-10803-bw.jpg"
        secondaryImg="./assets/Speaker-10803.jpg"
      />
      <ImageToggleOnMouseOver
        primaryImg="./assets/logo512.png"
        secondaryImg="./assets/logo192.png"
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;
