import { LucideProps } from "lucide-react";
import { ElementType } from "react";
import { twMerge } from "tailwind-merge";

interface ImageUploaderIconProps extends LucideProps {
  icon: ElementType;
}

export const ImageUploaderIcon = ({
  icon: Icon,
  ...props
}: ImageUploaderIconProps) => {
  return <Icon {...props} className={twMerge("z-50", props.className)} />;
};
