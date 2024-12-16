import { useTranslation } from "react-i18next";
import { ArrowPathIcon, RectangleGroupIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { Toolbar } from "../Toolbar";
import { ToolbarIconButton } from "../ToolbarIconButton";

export const MainToolbar = () => {
  const { t } = useTranslation();

  return (
    <Toolbar
      title="Dashboard"
      primaryAction={<RectangleGroupIcon className="size-6" />}
      secondaryActions={
        <div className="flex items-center space-x-2">
          <ToolbarIconButton
            label={t("tooltip.refresh")}
            icon={() => <ArrowPathIcon className="size-6" />}
          />
          <ToolbarIconButton
            label={t("tooltip.settings")}
            icon={() => <Cog6ToothIcon className="size-6" />}
            linkTo="/settings/"
          />
        </div>
      }
    />
  );
};
