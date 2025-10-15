import { ComponentPropsWithRef } from "react";

type InputFieldProps = ComponentPropsWithRef<"input">;

const InputField = ({ ref, ...props }: InputFieldProps) => {
  return (
    <input
      ref={ref}
      className="border-brand-gray-100 bg-brand-dark-900 text-brand-white focus:border-brand-white w-full rounded-lg border px-2.5 py-1.5 shadow-lg outline-none"
      {...props}
    />
  );
};

export { InputField };
