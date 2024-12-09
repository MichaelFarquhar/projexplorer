import { useState } from "react";
import { SwitchInput } from "../../../components/inputs/SwitchInput";
import { SettingsPage } from "../SettingsPage";

export const SettingsPageGeneral = () => {
  const [switchInput, setSwitchInput] = useState(false);

  return (
    <SettingsPage title="page.title.general">
      <SwitchInput
        defaultValue={switchInput}
        value={switchInput}
        name="theme"
        label="config.label.darkmode"
        onChange={(e: boolean) => setSwitchInput(e)}
      />
    </SettingsPage>
  );
};
