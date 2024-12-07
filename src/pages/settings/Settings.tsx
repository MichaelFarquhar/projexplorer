import { Route, Router, Switch } from "wouter";
import { Page } from "../Page";
import { SettingsSideNav } from "./SettingsSideNav/SettingsSideNav";
import { SettingsPageGeneral } from "./pages/SettingsPageGeneral";
import { SettingsPageAppearance } from "./pages/SettingsPageAppearance";
import { useEffect, useRef, useState } from "react";

export const Settings = () => {
  const [sideNavWidth, setSideNavWidth] = useState(0);
  const sideNavRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (sideNavRef.current) {
        setSideNavWidth(sideNavRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <Page>
      <div className="w-full h-full flex">
        <SettingsSideNav ref={sideNavRef} />
        <div
          className="flex-1 overflow-y-auto"
          style={{
            marginLeft: `${sideNavWidth}px`,
          }}
        >
          <Router base="/settings">
            <Switch>
              <Route path={"/"} component={SettingsPageGeneral} />
              <Route path={"/appearance"} component={SettingsPageAppearance} />
            </Switch>
          </Router>
        </div>
      </div>
    </Page>
  );
};
