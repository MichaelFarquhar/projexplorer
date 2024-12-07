import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "wouter";

interface Props {
  label: string;
  icon: React.ReactNode;
  route: string;
}

export const SettingsSideNavItem = ({ label, icon, route }: Props) => {
  const { t } = useTranslation();
  const [location] = useLocation();
  const isActive =
    location === `/settings${route}` || location === `/settings${route}/`;

  console.log(location, route, isActive);

  return (
    <Link
      className={`px-4 py-2 flex items-center space-x-3.5 transition${
        isActive ? "bg-gray-300 dark:bg-gray-700" : ""
      } dark:hover:bg-gray-700 hover:bg-gray-300 rounded-md text-slate-900 dark:text-slate-100`}
      to={`/settings${route}`}
    >
      {icon}
      <span className="text-lg hidden sm:inline">{t(label)}</span>
    </Link>
  );
};
