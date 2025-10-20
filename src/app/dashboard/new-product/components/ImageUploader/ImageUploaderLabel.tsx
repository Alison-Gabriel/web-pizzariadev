import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ImageUploaderLabelProps extends ComponentProps<"label"> {
  children: ReactNode;
}

export const ImageUploaderLabel = ({
  children,
  ...props
}: ImageUploaderLabelProps) => {
  return (
    <label
      {...props}
      className={twMerge(
        "bg-brand-dark-900 border-brand-gray-100 text-brand-white group relative flex h-60 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg border p-2 shadow-md",
        props.className,
      )}
    >
      {children}
    </label>
  );
};
