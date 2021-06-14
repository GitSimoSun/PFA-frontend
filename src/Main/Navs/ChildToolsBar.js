import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import Categories from "../../Functions/Categories";

export default function ChildToolsBar() {
  let history = useHistory();
  let location = history.location.pathname;
  return (
    <nav className="child-toolsbar">
      <ul className="child-toolsbar-links">
        {location.includes("/tools/app-data")
          ? Categories["Application And Data"]["children"].map((t) => (
              <li>
                <NavLink
                  to={`/tools/app-data/${t.link}`}
                  activeClassName="active-link"
                >
                  {t.name}
                </NavLink>
              </li>
            ))
          : location.includes("/tools/utilities")
          ? Categories["Utilities"]["children"].map((t) => (
              <li>
                <NavLink
                  to={`/tools/utilities/${t.link}`}
                  activeClassName="active-link"
                >
                  {t.name}
                </NavLink>
              </li>
            ))
          : location.includes("/tools/devops")
          ? Categories["DevOps"]["children"].map((t) => (
              <li>
                <NavLink
                  to={`/tools/devops/${t.link}`}
                  activeClassName="active-link"
                >
                  {t.name}
                </NavLink>
              </li>
            ))
          : Categories["Business Tools"]["children"].map((t) => (
              <li>
                <NavLink
                  to={`/tools/business-tools/${t.link}`}
                  activeClassName="active-link"
                >
                  {t.name}
                </NavLink>
              </li>
            ))}
      </ul>
    </nav>
  );
}
