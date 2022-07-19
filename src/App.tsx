import type { Component } from "solid-js";

import SolidLogo from "./logo.svg";
import ViteLogo from './assets/vite.svg';
import TsLogo from './assets/ts.svg';

import "./App.css";
import { Test } from '../src/components';

const App: Component = () => {
  return (
    <div class="App">
      <div>
        <a href="#">
          <img src={ViteLogo} class="logo" alt="logo" />
        </a>
        <a href="#">
          <img src={SolidLogo} class="logo solid" alt="logo" />
        </a>
        <a href="#">
          <img src={TsLogo} class="logo ts" alt="logo" />
        </a>
      </div>
      <h1>
        <span class="vite">Vite + </span>
        <span class="solid">Solid + </span>
        <span class="ts">Ts</span>
      </h1>
      <div class="card">
        <div class="title">练习黑板</div>
        <div class="card-wrapper">
            <Test />
        </div>
      </div>
    </div>
  );
};

export default App;
