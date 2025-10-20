import { ComponentProps } from "react";

type TextareaProps = ComponentProps<"textarea">;

export const Textarea = ({ name, ...props }: TextareaProps) => {
  return (
    <textarea
      {...props}
      name={name}
      placeholder="Digite a descricao do produto"
      className="border-brand-gray-100 bg-brand-dark-900 text-brand-white focus:border-brand-white focus:outline-brand-gray-100/20 w-full resize-none rounded-lg border px-2.5 py-1.5 shadow-md focus:outline-2"
      rows={5}
    ></textarea>
  );
};
