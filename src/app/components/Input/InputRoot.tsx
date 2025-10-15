import { ReactNode } from "react";

interface InputRootProps {
  children: ReactNode;
}

const InputRoot = ({ children }: InputRootProps) => {
  return <div className="flex w-full flex-col">{children}</div>;
};

export { InputRoot };
