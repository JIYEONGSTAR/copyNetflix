import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Auth from "../Pages/Auth";
import Browse from "../Pages/Browse";
import NotFound from "../Components/NotFound";
import useCurrentUser from "Hooks/useCurrentUser";
const Router = () => {
  const { currentUser } = useCurrentUser();
  // const history = useHistory();
  const pushWhenNotSignedIn = (Component) =>
    currentUser ? Component : <Redirect to="/" />;
  // if (!currentUser) return <Redirect to="/" />; //falsy
  // return <Component />;
  console.log(currentUser);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Auth} />
        {/* <Route path="/browse" component={Browse} /> */}
        <Route path="/browse" render={() => pushWhenNotSignedIn(<Browse />)} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

//폴더->index.js 에어비앤비에서 권장하는 방법
