import { Link } from "wouter";
import { DirectorySelector } from "../../components/DirectorySelector";
import { Page } from "../Page";
import { useAtom } from "jotai/react";
import { directoriesAtom } from "../../atoms/directoriesAtom";

export const Dashboard = () => {
  const [directories] = useAtom(directoriesAtom);
  console.log(directories);

  return (
    <Page>
      <div className="w-full h-full grid place-items-center pt-12">
        <DirectorySelector />
        <Link to="/settings">Settings</Link>
      </div>
    </Page>
  );
};
