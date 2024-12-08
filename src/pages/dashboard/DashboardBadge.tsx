import { SVGProps } from "react";
import { Tag } from "react-aria-components";

interface Props {
  text: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
}

export const DashboardBadge = ({ text, icon: Icon }: Props) => {
  return (
    <Tag
      className="flex items-center bg-surface-dark text-sm text-gray-300 font-semibold uppercase py-1 px-2 rounded-md"
      isDisabled
    >
      <Icon className="size-4 mr-1.5" />
      <span className="hover:cursor-default" aria-label="Hey">
        {text}
      </span>
    </Tag>
  );
};
