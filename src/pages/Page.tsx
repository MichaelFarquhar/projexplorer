export type PageComponent = React.ComponentType<Props>;

interface Props {
  children: React.ReactNode;
}

export const Page: PageComponent = ({ children }: Props) => {
  return <main>{children}</main>;
};
