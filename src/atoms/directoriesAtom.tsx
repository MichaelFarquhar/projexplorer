import { atom } from "jotai/vanilla";

export interface Directory {
  name: string;
  path: string;
  size: number;
  dateCreated: string;
  dateModified: string;
}

export const directoriesAtom = atom<Directory[]>([]);
