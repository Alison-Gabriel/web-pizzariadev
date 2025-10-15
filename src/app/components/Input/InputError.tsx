interface InputErrorProps {
  message: string;
}

const InputError = ({ message }: InputErrorProps) => {
  return (
    <p className="text-brand-red-900 mt-1.5 text-sm font-medium">{message}</p>
  );
};

export { InputError };
