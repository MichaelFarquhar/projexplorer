import { Route } from "wouter";
import { ToolbarComponent } from "./toolbars/Toolbar";
import { PageComponent } from "../pages/Page";

interface Props {
  route?: string;
  toolbar: React.ReactElement<ToolbarComponent>;
  page: React.ReactElement<PageComponent>;
}

export const PageRoute = ({ route, toolbar, page }: Props) => {
  return (
    <Route path={route}>
      <main>
        {toolbar}
        {page}
      </main>
    </Route>
  );
};
