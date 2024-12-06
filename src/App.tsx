import "./App.css";
import { MainToolbar } from "./layouts/toolbars/MainToolbar/MainToolbar";
import { PageRoute } from "./components/PageRoute";
import { Dashboard } from "./pages/dashboard/Dashboard";

// import "./i18n.js";
import { Settings } from "./pages/settings/Settings.js";

function App() {
  //TODO: If settings set to return to page you left off after closing app
  // Load here with useEffect based on route className
  // ...

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <PageRoute route="/" toolbar={<MainToolbar />} page={<Dashboard />} />
      <PageRoute
        route="/settings"
        toolbar={<MainToolbar />}
        page={<Settings />}
      />
    </div>
  );
}

export default App;
