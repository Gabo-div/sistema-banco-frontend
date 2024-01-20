"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import TextInput from "./TextInput";

type Inputs = {
  name: string,
  email: string,
  birthDate: string,
  password: string,
  confirmPassword: string
};

const loginSchema = z.object({
  name: z.string().trim().min(3, "El nombre debe tener al menos 4 caracteres."),
  email: z.string().trim().email({ message: "El correo no es válido." }),
  birthDate: z.coerce.date({
    errorMap: () => ({ message: "La fecha debe ser una fecha valida." }),
  }).transform(date => date.toISOString()),
  password: z.string().trim().min(8, "La contraseña debe tener al menos 8 caracteres."),
  confirmPassword: z.string().trim(),
}).superRefine(async (data, ctx) => {
  if (data.password !== data.confirmPassword) {
    ctx.addIssue({
      path: ["confirmPassword"],
      code: "custom",
      message: "Las contraseñas no coinciden."
    })
  }

  // TODO: VALIDATE IF EMAIL ALREADY EXISTS
})

export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>(
    {
      resolver: zodResolver(loginSchema)
    }
  );

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-4">
        <TextInput placeholder="Pedro Perez" label="Nombre" name="name" register={register} errors={errors} />
        <TextInput placeholder="pedro@perez.com" label="Correo" name="email" type="email" register={register} errors={errors} />
        <TextInput label="Fecha de nacimiento" name="birthDate" type="date" register={register} errors={errors} />
        <TextInput placeholder="********" label="Contraseña" name="password" type="password" register={register} errors={errors} />
        <TextInput placeholder="********" label="Confirmar Contraseña" name="confirmPassword" type="password" register={register} errors={errors} />
      </div>
      <button type="submit" className="mt-8 w-full px-3 py-3 rounded-xl bg-blue-500 text-white">Registrar</button>
    </form>
  )
}
