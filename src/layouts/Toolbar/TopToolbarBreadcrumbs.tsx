import { FolderIcon } from "@heroicons/react/24/outline";
import { Breadcrumb, Breadcrumbs, Link } from "react-aria-components";

interface Props {}

export const TopToolbarBreadcrumbs = ({}: Props) => {
  return (
    <Breadcrumbs className="flex items-end px-3 py-2.5 rounded-md space-x-4 bg-slate-300 dark:bg-slate-700">
      <Breadcrumb className="flex items-center space-x-4">
        <Link isDisabled>
          <FolderIcon className="size-6" />
        </Link>
      </Breadcrumb>
      <Breadcrumb>
        <Link isDisabled>...</Link>
      </Breadcrumb>
    </Breadcrumbs>
  );
};
