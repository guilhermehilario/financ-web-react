interface ErrorProps {
  message: string;
}

export function ErrorView({ message }: ErrorProps) {
  return <h3 className="m-4 text-md text-red-600">{message}</h3>;
}
