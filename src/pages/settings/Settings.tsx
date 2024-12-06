import { Link } from "wouter";
import { Page } from "../Page";

export const Settings = () => {
  return (
    <Page>
      <div className="w-full h-full grid place-items-center pt-12">
        <Link to="/">To Dashboard</Link>
      </div>
    </Page>
  );
};
