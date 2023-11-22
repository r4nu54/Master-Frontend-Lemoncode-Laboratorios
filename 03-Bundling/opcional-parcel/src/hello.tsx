import React from "react";

import logoImg from "./assets/logo.png";

const img = logoImg;
const imgContainer = document.getElementById("imgContainer");

if (imgContainer) {
  imgContainer.innerHTML = `
    <img src="${img}" />
  `;
}

export const HelloComponent: React.FC = () => {
  return (
    <>
      <div id="imgContainer"></div>
      <h2>Hello from React</h2>
    </>
  );
};
