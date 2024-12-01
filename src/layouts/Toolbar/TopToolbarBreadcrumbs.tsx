import { Breadcrumb, Breadcrumbs, Link } from "react-aria-components";

interface Props {}

export const TopToolbarBreadcrumbs = ({}: Props) => {
  return (
    <Breadcrumbs className="flex items-end px-3 py-2.5 rounded-md space-x-4 bg-slate-300 dark:bg-slate-700">
      <Breadcrumb className="flex items-center space-x-4">
        <Link isDisabled>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
            />
          </svg>
        </Link>
      </Breadcrumb>
      <Breadcrumb>
        <Link isDisabled>...</Link>
      </Breadcrumb>
    </Breadcrumbs>
  );
};
