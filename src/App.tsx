import "./styles/global.css";
import "./i18n.js";

import { useEffect } from "react";
import { MainToolbar } from "./components/toolbars/MainToolbar/MainToolbar.js";
import { PageRoute } from "./components/PageRoute";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Settings } from "./pages/settings/Settings.js";
import { SettingsToolbar } from "./components/toolbars/SettingsToolbar/SettingsToolbar.js";
import { scanDirectory } from "./scanDirectory.js";
import { useAtom } from "jotai/react";
import { directoriesAtom } from "./atoms/directoriesAtom.js";

function App() {
  const [_, setDirectories] = useAtom(directoriesAtom);

  useEffect(() => {
    const getDir = async () => {
      const directories = await scanDirectory("C:\\Users\\farks\\OneDrive\\Documents");
      setDirectories(directories);
    };

    getDir();
  }, []);
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
