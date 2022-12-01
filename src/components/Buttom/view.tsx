import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: string;
}

export function ButtonView({ color, children, ...rest }: ButtonProps) {
  return (
    <button
      className="bg-cyan-800 w-44 p-4 m-2 font-medium rounded text-white hover:bg-cyan-600"
      {...rest}
    >
      {children}
    </button>
  );
}
