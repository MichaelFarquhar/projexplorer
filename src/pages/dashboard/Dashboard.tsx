import { Link } from "wouter";
import { DirectorySelector } from "../../components/DirectorySelector";
import { Page } from "../Page";
import { useAtom } from "jotai/react";
import { directoriesAtom } from "../../atoms/directoriesAtom";
import { DashboardCard } from "./DashboardCard";

export const Dashboard = () => {
  const [directories] = useAtom(directoriesAtom);
  console.log(directories);

  return (
    <Page>
      <div className="w-full h-full grid place-items-center pt-12">
        <div className="w-full flex justify-center items-center flex-col space-y-5">
          {directories?.map((dir, index) => (
            <DashboardCard key={index} directory={dir} />
          ))}
        </div>
        <DirectorySelector />
        <Link to="/settings/">Settings</Link>
      </div>
    </Page>
  );
};
