import {
  ArrowUpRightIcon,
  ClockIcon,
  FolderOpenIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";
import { Directory } from "../../atoms/directoriesAtom";
import { useTranslation } from "react-i18next";
import prettyBytes from "pretty-bytes";
import { Button, TagGroup, TagList } from "react-aria-components";
import { DateTime } from "luxon";
import { DashboardBadge } from "./DashboardBadge";

interface Props {
  directory: Directory;
}

export const DashboardCard = ({ directory }: Props) => {
  const [_, i18n] = useTranslation();
  console.log(directory.dateModified);
  const dt = DateTime.fromJSDate(new Date(directory.dateModified));
  dt.setLocale(i18n.language);
  console.log(dt.day);

  return (
    <div className="w-2/3 p-3.5 rounded-lg bg-card dark:bg-card-dark flex flex-col shadow-xl">
      {/* Top Bar */}
      <div className="flex items-center justify-between space-x-2">
        {/* Icon & Directory Name */}
        <div className="flex items-center space-x-3">
          <div className="p-1.5 bg-slate-500 rounded-full grid place-items-center">
            <FolderOpenIcon className="size-5 stroke-black" />
          </div>
          <div className="text-xl text-black dark:text-white font-medium">
            {directory.name}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <Button className={"p-2 border"}>Open In Code</Button>
          <Button className={"p-2 border"}>
            <ArrowUpRightIcon className="size-6" />
          </Button>
        </div>
      </div>

      {/* Info Bar */}
      <TagGroup selectionMode="none">
        <TagList className="flex items-center space-x-3 mt-3">
          <DashboardBadge
            text={dt.toLocaleString(DateTime.DATETIME_SHORT)}
            icon={ClockIcon}
          />
          <DashboardBadge
            text={prettyBytes(directory.size, { locale: i18n.language })}
            icon={ServerIcon}
          />
        </TagList>
      </TagGroup>
    </div>
  );
};
