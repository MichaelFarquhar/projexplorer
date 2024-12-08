/* 
Designed to currently work for a single directory containing all project folders in a single level.
*/

import { FileInfo, readDir, size, stat } from "@tauri-apps/plugin-fs";
import { Directory } from "./atoms/directoriesAtom";

const getFileCreationDate = (dirInfo: FileInfo): string => {
  if (dirInfo.birthtime !== null) return dirInfo.birthtime.toString();
  if (dirInfo.atime !== null) return dirInfo.atime.toString();
  return "";
};

export const scanDirectory = async (directoryString: string): Promise<Directory[]> => {
  let returnObject: Directory[] = [];

  // Get list of all files and directories within the given directory string
  const directoryList = await readDir(directoryString);

  // Loop through each sub directory and construct data
  for (const dir of directoryList) {
    if (!dir.isDirectory) continue;

    const dirName = dir.name;
    const dirPath = directoryString + "\\" + dirName;
    console.log(dirPath);

    let dirObj: Directory = {
      name: dirName,
      path: dirPath,
      size: 0,
      dateCreated: "",
      dateModified: "",
    };

    // Gets the size of a directory in bytes
    dirObj.size = await size(dirPath);

    // Retrieves dates
    const dirInfo = await stat(dirPath);
    dirObj = {
      ...dirObj,
      dateCreated: getFileCreationDate(dirInfo),
      dateModified: dirInfo.mtime?.toString() ?? "",
    };

    returnObject.push(dirObj);
  }

  return returnObject;
};
