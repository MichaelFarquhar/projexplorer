import "./App.css";
import { MainToolbar } from "./layouts/toolbars/MainToolbar/MainToolbar";
import { PageRoute } from "./components/PageRoute";
import { Dashboard } from "./pages/dashboard/Dashboard";

// import "./i18n.js";
import { Settings } from "./pages/settings/Settings.js";
import { SettingsToolbar } from "./layouts/toolbars/SettingsToolbar/SettingsToolbar.js";
import { useEffect } from "react";
import { scanDirectory } from "./scanDirectory.js";

function App() {
  useEffect(() => {
    const getDir = async () => {
      const entries = await scanDirectory("C:\\Users\\farks\\OneDrive\\Documents");
      console.log(entries);
    };

    getDir();
  });
  //TODO: If settings set to return to page you left off after closing app
  // Load here with useEffect based on route className
  // ...

  return (
    <div className="bg-base dark:bg-base-dark">
      <PageRoute route="/" toolbar={<MainToolbar />} page={<Dashboard />} />
      <PageRoute route="/settings/*" toolbar={<SettingsToolbar />} page={<Settings />} />
    </div>
  );
}

export default App;
