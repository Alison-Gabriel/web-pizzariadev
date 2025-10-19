"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { createCategory } from "@/actions/create-category";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import {
  NewCategorySchema,
  newCategorySchema,
} from "@/types/schemas/category.schema";

export const NewCategoryForm = () => {
  const { push } = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<NewCategorySchema>({
    resolver: zodResolver(newCategorySchema),
    defaultValues: { name: "" },
  });

  const newCategory = async (data: NewCategorySchema) => {
    try {
      const { error, data: createdCategory } = await createCategory(data);

      if (error && !createdCategory) {
        throw new Error(error.message);
      }

      toast.success("Categoria criada com sucesso!");
      push("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(newCategory)}>
      <Input.Root>
        <Input.Field
          {...register("name")}
          placeholder="Digite o nome da categoria"
        />
        {errors.name?.message && (
          <Input.Error>{errors.name.message}</Input.Error>
        )}
      </Input.Root>

      <Button.Root type="submit" color="secondary">
        {!!isSubmitting && (
          <Button.Icon className="size-4 animate-spin" icon={Loader2} />
        )}
        <Button.Content>Cadastrar</Button.Content>
      </Button.Root>
    </form>
  );
};
