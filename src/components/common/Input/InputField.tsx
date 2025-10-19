import { ComponentPropsWithRef } from "react";

type InputFieldProps = ComponentPropsWithRef<"input">;

const InputField = ({ ref, type = "text", ...props }: InputFieldProps) => {
  return (
    <input
      ref={ref}
      type={type}
      className="border-brand-gray-100 bg-brand-dark-900 text-brand-white focus:border-brand-white w-full rounded-lg border px-2.5 py-1.5 shadow-md outline-none"
      {...props}
    />
  );
};

export { InputField };
