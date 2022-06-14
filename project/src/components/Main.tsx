interface Props {
  width: string;
  children: React.ReactNode;
}

export const Main = ({ children, width }: Props) => {
  return <main className={`main ${width}`}>{children}</main>;
};
