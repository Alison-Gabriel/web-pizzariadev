"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { UploadCloud } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { CategoryResponse } from "@/types/api";
import {
  imageAllowedTypes,
  NewProductSchema,
  newProductSchema,
} from "@/types/schemas/product";

import { CategoriesSelector } from "./CategoriesSelect";
import { ImageUploader } from "./ImageUploader";
import { Textarea } from "./Textarea";

interface NewProductFormProps {
  categories?: CategoryResponse[];
}

export const NewProductForm = ({ categories }: NewProductFormProps) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newProductSchema),
    defaultValues: {
      name: "",
      category: "",
      price: "",
      description: "",
    },
    mode: "onChange",
  });

  const { onChange: onImageSelect, ...registerImage } = register("image");

  const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedImage = e.target.files?.[0];
    if (uploadedImage && imageAllowedTypes.includes(uploadedImage.type)) {
      return setImagePreviewUrl(URL.createObjectURL(uploadedImage));
    }
    setImagePreviewUrl("");
  };

  const handleCreateProduct = async (data: NewProductSchema) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleCreateProduct)}
      className="flex flex-col gap-3"
    >
      <Input.Root>
        <ImageUploader.Label>
          <ImageUploader.Icon icon={UploadCloud} className="size-7" />

          <ImageUploader.Field
            {...registerImage}
            onChange={(e) => {
              onImageSelect(e);
              handleUploadImage(e);
            }}
          />

          {!!imagePreviewUrl && <ImageUploader.Preview src={imagePreviewUrl} />}
        </ImageUploader.Label>

        {!!errors.image?.message && (
          <Input.Error>{errors.image.message}</Input.Error>
        )}
      </Input.Root>

      <Input.Root>
        <CategoriesSelector {...register("category")} name="category">
          <option value="" disabled>
            Selecione uma categoria
          </option>

          {!!categories?.length &&
            categories.map((category) => (
              <option key={category.id} id={category.id}>
                {category.name}
              </option>
            ))}
        </CategoriesSelector>

        {errors.category?.message && (
          <Input.Error>{errors.category.message}</Input.Error>
        )}
      </Input.Root>

      <Input.Root>
        <Input.Field
          {...register("name")}
          name="name"
          placeholder="Digite o nome do produto"
        />

        {errors.name?.message && (
          <Input.Error>{errors.name.message}</Input.Error>
        )}
      </Input.Root>

      <Input.Root>
        <Input.Field
          {...register("price")}
          name="price"
          placeholder="Digite o preco do produto"
        />

        {errors.price?.message && (
          <Input.Error>{errors.price.message}</Input.Error>
        )}
      </Input.Root>

      <Input.Root>
        <Textarea {...register("description")} name="description" />

        {errors.description?.message && (
          <Input.Error>{errors.description.message}</Input.Error>
        )}
      </Input.Root>

      <Button.Root color="secondary">
        <Button.Content>Cadastrar</Button.Content>
      </Button.Root>
    </form>
  );
};
