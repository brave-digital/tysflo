require("@babel/polyfill");
import React from "react";
import { render } from "react-dom";
import AppComponent from "./Components/AppComponent";
import "../src/scss/main.scss";
import { BrowserRouter } from "react-router-dom";
const supportsHistory = 'pushState' in window.history;

render(
  <BrowserRouter forceRefresh={!supportsHistory}>
      <AppComponent />
  </BrowserRouter>,

  document.getElementById("app")
);
