import { Group, Toolbar } from "react-aria-components";
import { TopToolbarIconButton } from "./TopToolbarIconButton";
import { TopToolbarBreadcrumbs } from "./TopToolbarBreadcrumbs";
import { useTranslation } from "react-i18next";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

export const TopToolbar = () => {
  const { t } = useTranslation();

  return (
    <Toolbar
      aria-label={t("Top toolbar")}
      className="w-full flex justify-between items-center py-3 px-6 mb-12 drop-shadow-md bg-slate-200 dark:bg-slate-800"
    >
      <Group aria-label={t("Breadcrumbs")}>
        <TopToolbarBreadcrumbs />
      </Group>
      <Group
        aria-label="Action buttons"
        className="flex items-center space-x-2"
      >
        <TopToolbarIconButton label={t("Refresh Sync")}>
          <ArrowPathIcon className="size-6" />
        </TopToolbarIconButton>
        <TopToolbarIconButton label={t("Settings")}>
          <Cog6ToothIcon className="size-6" />
        </TopToolbarIconButton>
      </Group>
    </Toolbar>
  );
};
