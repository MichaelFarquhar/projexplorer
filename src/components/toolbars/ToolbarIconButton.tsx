import { Button, Tooltip, TooltipTrigger } from "react-aria-components";
import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";

interface Props {
  label?: string;
  icon: () => React.ReactNode;
  linkTo?: string;
  onPress?: () => void;
}

export const ToolbarIconButton = ({ label, icon, linkTo, onPress }: Props) => {
  const { t } = useTranslation();
  const [_, navigate] = useLocation();

  return (
    <TooltipTrigger delay={0} closeDelay={0}>
      <Button
        className="p-2.5 text-white bg-transparent border-none shadow-none transition hover:bg-slate-300 dark:hover:bg-slate-700 rounded-md cursor-pointer"
        onPressStart={() => (linkTo ? navigate(linkTo) : onPress ?? undefined)}
      >
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
