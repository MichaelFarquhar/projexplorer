import { Link } from "wouter";
import { DirectorySelector } from "../../components/DirectorySelector";
import { Page } from "../Page";

export const Dashboard = () => {
  return (
    <Page>
      <div className="w-full h-full grid place-items-center pt-12">
        <DirectorySelector />
        <Link to="/settings">Settings</Link>
      </div>
    </Page>
  );
};
