import { RecoilRoot } from "recoil";
import Router from "./Router";
import "Styles/global.scss";
import React from "react";
function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}

export default App;
