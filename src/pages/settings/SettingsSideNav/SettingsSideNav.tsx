import {
  CogIcon,
  PaintBrushIcon,
  QuestionMarkCircleIcon,
  ServerStackIcon,
} from "@heroicons/react/16/solid";
import { SettingsSideNavItem } from "./SettingsSideNavItem";
import { forwardRef } from "react";

// Define props type (can be empty for now)
interface SettingsSideNavProps {}

// Define component
export const SettingsSideNav = forwardRef<HTMLDivElement, SettingsSideNavProps>(
  (_, ref) => {
    return (
      <aside
        className="w-fit h-full py-5 px-5 fixed left-0 bg-gray-800 flex flex-col space-y-2"
        ref={ref}
      >
        <SettingsSideNavItem
          label="General"
          icon={<CogIcon className="size-5" />}
          route="/"
        />
        <SettingsSideNavItem
          label="Appearance"
          icon={<PaintBrushIcon className="size-5" />}
          route="/appearance"
        />
        <SettingsSideNavItem
          label="System"
          icon={<ServerStackIcon className="size-5" />}
          route="/system"
        />
        <SettingsSideNavItem
          label="About"
          icon={<QuestionMarkCircleIcon className="size-5" />}
          route="/about"
        />
      </aside>
    );
  }
);

// Set display name for easier debugging
SettingsSideNav.displayName = "SettingsSideNav";
