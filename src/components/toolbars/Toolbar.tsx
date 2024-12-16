import { Toolbar as AriaToolbar, Group } from "react-aria-components";
import { useTranslation } from "react-i18next";

export type ToolbarComponent = React.ComponentType<Props>;

interface Props {
  title: string;
  primaryAction: JSX.Element;
  secondaryActions: JSX.Element;
}

export const Toolbar: ToolbarComponent = ({
  title,
  primaryAction,
  secondaryActions,
}: Props) => {
  const { t } = useTranslation();

  return (
    <AriaToolbar
      aria-label={t("aria.toolbar")}
      className="w-full flex flex-nowrap justify-between items-center sticky top-0 z-50 py-3 px-6 drop-shadow-md bg-surface dark:bg-surface-dark text-black dark:text-white"
    >
      <Group className="flex items-center space-x-4">
        {primaryAction}
        <h1 className="text-xl font-medium">{t(title)}</h1>
      </Group>
      <Group>{secondaryActions}</Group>
    </AriaToolbar>
  );
};
