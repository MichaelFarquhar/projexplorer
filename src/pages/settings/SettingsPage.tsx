import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export const SettingsPage = ({ title, children }: Props) => {
  return (
    <section className="py-6 px-12 flex flex-col overflow-y-auto">
      <h1 className="text-3xl font-semibold text-black dark:text-white mb-8">
        {title}
      </h1>
      {children}
    </section>
  );
};
