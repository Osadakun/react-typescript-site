import React, { VFC } from "react";
import { Route, Switch } from "react-router-dom";
import Home  from "../Home";
import Informations from "./Informations"
import { Page404 } from "./Page404";
// import { Works } from "./Works";
import { HeaderLayout } from "./HeaderLayout";

export const Router: VFC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HeaderLayout>
            <Home />
          </HeaderLayout>
        </Route>
        <Route path="/informations">
          <HeaderLayout>
            <Informations />
          </HeaderLayout>
        </Route>
        {/* <Route path="/works">
          <HeaderLayout>
            <Works />
          </HeaderLayout>
        </Route> */}
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </>
  );
};