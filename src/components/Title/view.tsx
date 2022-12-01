interface TitleProps {
  children: React.ReactNode;
}

export function TitleView({ children }: TitleProps) {
  return <h1 className="font-bold text-5xl text-cyan-600">{children}</h1>;
}
