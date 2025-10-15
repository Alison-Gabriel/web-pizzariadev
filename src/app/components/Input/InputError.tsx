import { ReactNode } from "react";

interface InputErrorProps {
  children: ReactNode;
}

const InputError = ({ children }: InputErrorProps) => {
  return (
    <p className="text-brand-red-900 mt-1.5 text-sm font-medium">{children}</p>
  );
};

export { InputError };
