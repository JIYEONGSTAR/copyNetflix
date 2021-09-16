import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "../Pages/Auth";
import Browse from "../Pages/Browse";
import NotFound from "../Components/NotFound";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/browse" component={Browse} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

//폴더->index.js 에어비앤비에서 권장하는 방법
