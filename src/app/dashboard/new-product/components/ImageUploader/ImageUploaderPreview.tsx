import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

type ImageUploaderPreviewProps = Omit<ImageProps, "alt">;

export const ImageUploaderPreview = ({
  src,
  ...props
}: ImageUploaderPreviewProps) => {
  return (
    <Image
      {...props}
      alt="Produto"
      quality={100}
      src={src}
      priority
      fill
      className={twMerge(
        "object-cover transition-all group-hover:scale-105 group-hover:opacity-60",
        props.className,
      )}
    />
  );
};
