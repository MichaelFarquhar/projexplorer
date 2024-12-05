import { FolderIcon } from "@heroicons/react/16/solid";
import { Button, FileTrigger } from "react-aria-components";

export const DirectorySelector = () => {
  const onDirectorySelected = (directory: FileList | null) => {
    console.log(directory);
  };

  return (
    <div className="rounded-lg shadow-sm p-4 flex flex-col space-y-3 justify-center bg-white dark:bg-slate-800">
      <div className="text-slate-900 text-2xl">Select directory</div>
      <FileTrigger acceptDirectory onSelect={onDirectorySelected}>
        <Button className="flex space-x-2 w-fit light:bg-slate-800 dark:bg-slate-200">
          <FolderIcon className="size-5" />
          Upload
        </Button>
      </FileTrigger>
    </div>
  );
};
