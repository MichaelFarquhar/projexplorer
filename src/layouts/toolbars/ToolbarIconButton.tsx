import { Button, Tooltip, TooltipTrigger } from "react-aria-components";
import { useTranslation } from "react-i18next";

interface Props {
  label?: string;
  icon: () => React.ReactNode;
  onPress?: () => void;
}

export const ToolbarIconButton = ({ label, icon }: Props) => {
  const { t } = useTranslation();

  return (
    <TooltipTrigger delay={0} closeDelay={0}>
      <Button className="p-2.5 text-white bg-transparent border-none shadow-none transition hover:bg-slate-300 dark:hover:bg-slate-700 rounded-md cursor-pointer">
        {icon()}
      </Button>
      {label && (
        <Tooltip
          placement="bottom"
          className="mt-1 px-2.5 py-1.5 text-xs font-medium text-white bg-slate-300 rounded-lg shadow-sm tooltip dark:bg-slate-700"
        >
          {t(label)}
        </Tooltip>
      )}
    </TooltipTrigger>
  );
};
