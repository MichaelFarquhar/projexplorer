import { MainToolbarBreadcrumbs } from "./MainToolbarBreadcrumbs";
import { useTranslation } from "react-i18next";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { Toolbar } from "../Toolbar";
import { Group } from "react-aria-components";
import { ToolbarIconButton } from "../ToolbarIconButton";
import { Link } from "wouter";

export const MainToolbar = () => {
  const { t } = useTranslation();

  return (
    <Toolbar>
      <Group aria-label={t("aria.breadcrumbs")}>
        <MainToolbarBreadcrumbs />
      </Group>
      <Group aria-label={t("aria.actions")} className="flex items-center space-x-2">
        <ToolbarIconButton
          label={t("tooltip.refresh")}
          icon={() => <ArrowPathIcon className="size-6" />}
        />
        <Link to="/settings">
          <ToolbarIconButton
            label={t("tooltip.settings")}
            icon={() => <Cog6ToothIcon className="size-6" />}
          />
        </Link>
      </Group>
    </Toolbar>
  );
};
