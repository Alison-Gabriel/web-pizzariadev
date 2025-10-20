import { ComponentPropsWithRef } from "react";

type ImageUploaderFieldProps = ComponentPropsWithRef<"input">;

export const ImageUploaderField = ({
  ref,
  ...props
}: ImageUploaderFieldProps) => {
  return (
    <input
      {...props}
      ref={ref}
      type="file"
      className="z-50 hidden size-full"
      accept="image/png, image/jpeg"
    />
  );
};
