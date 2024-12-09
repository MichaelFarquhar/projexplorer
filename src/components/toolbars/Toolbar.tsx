import { Toolbar as AriaToolbar } from "react-aria-components";
import { useTranslation } from "react-i18next";

export type ToolbarComponent = React.ComponentType<Props>;

interface Props {
  children: React.ReactNode;
}

export const Toolbar: ToolbarComponent = ({ children }: Props) => {
  const { t } = useTranslation();

  return (
    <AriaToolbar
      aria-label={t("aria.toolbar")}
      className="w-full flex flex-nowrap justify-between items-center sticky top-0 z-50 py-3 px-6 drop-shadow-md bg-surface dark:bg-surface-dark text-black dark:text-white"
    >
      {children}
    </AriaToolbar>
  );
};
