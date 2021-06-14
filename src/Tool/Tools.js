import React from "react";
import { Route, Switch, Redirect } from "react-router";
import MainToolsBar from "../Main/Navs/MainToolsBar";
import NavBar from "../Main/Navs/NavBar";
import ChildToolsBar from "../Main/Navs/ChildToolsBar";
import Categories from "../Functions/Categories";
import CategoryHome from "./CategoryHome";
import AllItems from "./AllItems";

export default function Tools() {
  const mainPath = "/tools/";
  return (
    <div className="container">
      <div className="navs">
        <NavBar />
        <MainToolsBar />
        <ChildToolsBar />
      </div>
      <div className="content">
        <Switch>
          {Object.keys(Categories).map((t) => (
            <Route path={mainPath + Categories[t].link}>
              <Switch>
                {Categories[t].children.map((c) => (
                  <Route
                    path={mainPath + Categories[t].link + "/" + c.link}
                  >
                    <Switch>
                      <Route
                        path={mainPath + Categories[t].link + "/" + c.link + "/"}
						component={() => <CategoryHome c={c.name} clink={c.link}/>}
						exact
                      />
                      <Route
                        path={
                          mainPath + Categories[t].link + "/" + c.link + "/all"
                        }
                      >
                        <AllItems category={c.name} />
                      </Route>
                    </Switch>
                  </Route>
                ))}
                <Redirect
                  to={
                    mainPath +
                    Categories[t].link +
                    "/" +
                    Categories[t].children[0].link
                  }
                />
              </Switch>
            </Route>
          ))}
          <Redirect to="/tools/app-data" />
        </Switch>
      </div>
    </div>
  );
}
