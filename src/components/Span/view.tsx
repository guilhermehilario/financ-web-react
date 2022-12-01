interface SpanProps {
  children: React.ReactNode;
}

export function SpanView({ children }: SpanProps) {
  return <span className="text-2xl text-cyan-400">{children}</span>;
}
