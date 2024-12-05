import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { MainToolbar } from "./layouts/toolbars/MainToolbar/MainToolbar";
import { DirectorySelector } from "./components/DirectorySelector";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="bg-gray-100 dark:bg-gray-900">
      <MainToolbar />
      <div className="w-full h-full grid place-items-center pt-12">
        <DirectorySelector />
      </div>
    </main>
  );
}

export default App;
