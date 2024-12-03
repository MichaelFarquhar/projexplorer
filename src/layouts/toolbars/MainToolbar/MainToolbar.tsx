import { MainToolbarBreadcrumbs } from "./MainToolbarBreadcrumbs";
import { useTranslation } from "react-i18next";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { Toolbar } from "../Toolbar";
import { Group } from "react-aria-components";
import { ToolbarIconButton } from "../ToolbarIconButton";

export const MainToolbar = () => {
  const { t } = useTranslation();

  return (
    <Toolbar>
      <Group aria-label={t("Breadcrumbs")}>
        <MainToolbarBreadcrumbs />
      </Group>
      <Group
        aria-label="Action buttons"
        className="flex items-center space-x-2"
      >
        <ToolbarIconButton
          label={t("Refresh Sync")}
          icon={() => <ArrowPathIcon className="size-6" />}
        />
        <ToolbarIconButton
          label={t("Settings")}
          icon={() => <Cog6ToothIcon className="size-6" />}
        />
      </Group>
    </Toolbar>
  );
};
