import { Toolbar as AriaToolbar } from "react-aria-components";
import { useTranslation } from "react-i18next";

interface Props {
  children: React.ReactNode;
}

export const Toolbar = ({ children }: Props) => {
  const { t } = useTranslation();

  return (
    <AriaToolbar
      aria-label={t("Top toolbar")}
      className="w-full flex justify-between items-center py-3 px-6 drop-shadow-md bg-gray-250 dark:bg-gray-950"
    >
      {children}
    </AriaToolbar>
  );
};
