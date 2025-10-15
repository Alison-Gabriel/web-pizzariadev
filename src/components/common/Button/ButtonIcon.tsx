import { LucideProps } from "lucide-react";
import { ElementType } from "react";

interface ButtonIconProps extends LucideProps {
  icon: ElementType;
}

const ButtonIcon = ({ icon: Icon, ...props }: ButtonIconProps) => {
  return <Icon {...props} />;
};

export { ButtonIcon };
