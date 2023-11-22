import React from 'react';
import config from '../env-config';

import logoImg from '../assets/logo.png';

const imgContainer = document.getElementById('imgContainer');
const img = logoImg;

if (imgContainer) {
  imgContainer.innerHTML = `<img src="${img}" />`;
}

function HelloComponent() {
  return (
    <>
      <div className="my-5" id="imgContainer"></div>
      <h1 className="text-2xl font-semibold ">
        Seed Project with Vite, React, TypeScript, Eslint, Prettier and Tailwind.
      </h1>
      <p>Api server is {config.API_BASE}</p>
      <p>Feature A is {config.IS_FEATURE_A_ENABLED ? 'enabled' : 'disabled'}</p>
    </>
  );
}

export default HelloComponent;
