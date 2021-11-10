import React, { VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../Home";
import { Page404 } from "./Page404";
import { Works } from "./Works";
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
        <Route path="/skills">
          <HeaderLayout>
            <Skills />
          </HeaderLayout>
        </Route>
        <Route path="/works">
          <HeaderLayout>
            <Works />
          </HeaderLayout>
        </Route>
        <Route path="/contact">
          <HeaderLayout>
            <Contact />
          </HeaderLayout>
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </>
  );
};