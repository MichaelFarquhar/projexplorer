import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
  title: string;
  children: React.ReactNode;
}

export const SettingsPage = ({ title, children }: Props) => {
  const { t } = useTranslation();

  return (
    <section className="py-6 px-12 flex flex-col overflow-y-auto">
      <h1 className="text-3xl font-semibold text-black dark:text-white mb-8">
        {t(title)}
      </h1>
      {children}
    </section>
  );
};
