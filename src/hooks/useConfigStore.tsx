import { useState } from "react";
import { load } from "@tauri-apps/plugin-store";

export type ConfigStore = {
  theme: "dark" | "light" | "auto";
  directorySelected: string;
  launchOnStarup: boolean;
  enableNotifications: boolean;
};

export const useConfigStore = () => {
  const [loading, setLoading] = useState(false);

  const getConfig = async (configOption: keyof ConfigStore) => {
    setLoading(true);
    let val = null;

    const store = await load("store.json", { autoSave: false });

    if (configOption) {
      val = await store.get<{ configOption: keyof ConfigStore }>("config");
    } else {
      val = await store.get("config");
    }

    setLoading(false);
  };

  const setConfig = async (configOption: keyof ConfigStore) => {
    setLoading(true);

    const store = await load("store.json");
    await store.set("config", configOption);

    setLoading(false);
  };

  return { loading, getConfig, setConfig };
};
