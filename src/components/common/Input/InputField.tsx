import { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

type InputFieldProps = ComponentPropsWithRef<"input">;

const InputField = ({ ref, type = "text", ...props }: InputFieldProps) => {
  return (
    <input
      {...props}
      ref={ref}
      type={type}
      className={twMerge(
        "border-brand-gray-100 bg-brand-dark-900 text-brand-white focus:border-brand-white placeholder:text-brand-gray-100 focus:outline-brand-white/20 w-full rounded-lg border px-2.5 py-1.5 shadow-md focus:outline-2",
        props.className,
      )}
    />
  );
};

export { InputField };
