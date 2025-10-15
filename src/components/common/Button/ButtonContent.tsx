import { ReactNode } from "react";

interface ButtonContentProps {
  children: ReactNode;
}

const ButtonContent = ({ children }: ButtonContentProps) => {
  return <span>{children}</span>;
};

export { ButtonContent };
