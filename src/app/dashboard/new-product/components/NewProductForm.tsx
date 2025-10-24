"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, UploadCloud } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { createProduct } from "@/actions/create-product";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { MAX_IMAGES_SIZE_IN_BYTES } from "@/constants/max-images-size";
import { CategoryResponse } from "@/types/api";
import {
  imageAllowedTypes,
  ProductSchema,
  productSchema,
} from "@/types/schemas/product";

import { CategoriesSelector } from "./CategoriesSelector";
import { CategoryOption } from "./CategoryOption";
import { ImageUploader } from "./ImageUploader";
import { Textarea } from "./Textarea";

interface NewProductFormProps {
  categories?: CategoryResponse[];
}

export const NewProductForm = ({ categories }: NewProductFormProps) => {
  const [imagePreview, setImagePreview] = useState("");

  const {
    handleSubmit,
    register,
    setError,
    control,
    reset: resetFormFields,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(productSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      price: "",
      description: "",
    },
  });

  const handleProductCreate = async (data: ProductSchema) => {
    try {
      const { error } = await createProduct(data);

      if (error) {
        throw new Error(error.message);
      }

      resetFormFields();
      toast.success("Produto criado com sucesso!");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleProductCreate)}
      className="flex flex-col gap-3"
    >
      <Controller
        name="image"
        control={control}
        render={({ field, fieldState }) => (
          <Input.Root>
            <ImageUploader.Label>
              <ImageUploader.Icon icon={UploadCloud} className="size-7" />

              <ImageUploader.Field
                onChange={(e) => {
                  const image = e.target.files?.[0];

                  if (!image) return field.onChange(null);

                  if (image.size > MAX_IMAGES_SIZE_IN_BYTES) {
                    toast.error("A imagem nao pode pesar mais que 1MB.");
                    return setError("image", {
                      message: "Selecione uma imagem de ate 1MB.",
                    });
                  }

                  if (!imageAllowedTypes.includes(image.type)) {
                    toast.error("Envie uma imagem PNG ou JPEG");
                    return setError("image", {
                      message: "Selecione uma imagem PNG ou JPEG.",
                    });
                  }

                  field.onChange(image);
                  setImagePreview(URL.createObjectURL(image));
                }}
              />

              {imagePreview && <ImageUploader.Preview src={imagePreview} />}
            </ImageUploader.Label>

            {!!fieldState.error && (
              <Input.Error>{fieldState.error.message}</Input.Error>
            )}
          </Input.Root>
        )}
      />

      <Input.Root>
        <CategoriesSelector {...register("category")}>
          {categories?.map((category) => (
            <CategoryOption key={category.id} category={category} />
          ))}
        </CategoriesSelector>

        {errors.category?.message && (
          <Input.Error>{errors.category.message}</Input.Error>
        )}
      </Input.Root>

      <Input.Root>
        <Input.Field {...register("name")} placeholder="Nome do produto" />

        {errors.name?.message && (
          <Input.Error>{errors.name.message}</Input.Error>
        )}
      </Input.Root>

      <Input.Root>
        <Input.Field {...register("price")} placeholder="Preco do produto" />

        {errors.price?.message && (
          <Input.Error>{errors.price.message}</Input.Error>
        )}
      </Input.Root>

      <Input.Root>
        <Textarea
          {...register("description")}
          placeholder="Descricao do produto"
        />

        {errors.description?.message && (
          <Input.Error>{errors.description.message}</Input.Error>
        )}
      </Input.Root>

      <Button.Root color="secondary">
        {isSubmitting && (
          <Button.Icon className="size-4 animate-spin" icon={Loader2} />
        )}
        <Button.Content>Cadastrar</Button.Content>
      </Button.Root>
    </form>
  );
};
