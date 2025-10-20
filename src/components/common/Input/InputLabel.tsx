import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface InputLabelProps extends ComponentProps<"label"> {
  children: ReactNode;
}

const InputLabel = ({ htmlFor, children, ...props }: InputLabelProps) => {
  return (
    <label
      {...props}
      htmlFor={htmlFor}
      className={twMerge(
        "text-brand-white mb-1 text-sm font-semibold",
        props.className,
      )}
    >
      {children}
    </label>
  );
};

export { InputLabel };
