import React, { SVGProps } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "wouter";

interface Props {
  label: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  route: string;
}

export const SettingsSideNavItem = ({ label, icon: Icon, route }: Props) => {
  const { t } = useTranslation();
  const [location] = useLocation();
  const isActive =
    location === `/settings${route}` || location === `/settings${route}/`;

  return (
    <Link
      className={`px-4 py-2 flex items-center space-x-3.5 transition ease-out duration-200${
        isActive ? "bg-card dark:bg-card-dark" : ""
      } hover:bg-card dark:hover:bg-card-dark rounded-md text-slate-900 dark:text-slate-100`}
      to={`/settings${route}`}
    >
      <Icon className="size-5" />
      <span className="text-lg hidden sm:inline">{t(label)}</span>
    </Link>
  );
};
