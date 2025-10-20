import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface InputRootProps extends ComponentProps<"div"> {
  children: ReactNode;
}

const InputRoot = ({ children, ...props }: InputRootProps) => {
  return (
    <div
      {...props}
      className={twMerge("flex w-full flex-col", props.className)}
    >
      {children}
    </div>
  );
};

export { InputRoot };
