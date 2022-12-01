import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  label: string;
  children: ReactNode;
}

function TextInputRoot({ label, children }: TextInputRootProps) {
  return (
    <div className="flex flex-col m-2">
      <label className="text-md mb-1 text-cyan-400">{label}</label>
      <div className="flex flex-row w-96 bg-gray-800 p-4 text-gray-400 rounded-md focus-within:ring-2 ring-cyan-300">
        {children}
      </div>
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gary-400 mr-2">{children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput({ ...rest }: TextInputInputProps) {
  return (
    <input
      className=" bg-transparent flex-1 placeholder:text-gray-400 outline-none"
      {...rest}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
