"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import TextInput from "./TextInput";

type Inputs = {
  email: string,
  password: string,
};

const loginSchema = z.object({
  email: z.string().email({ message: "El correo no es válido." }),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres."),
})

export default function LoginForm() {
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
        <TextInput placeholder="pedro@perez.com" label="Correo" name="email" type="email" register={register} errors={errors} />
        <TextInput placeholder="********" label="Contraseña" name="password" type="password" register={register} errors={errors} />
      </div>
      <button type="submit" className="mt-8 w-full px-3 py-3 rounded-xl bg-blue-500 text-white">Iniciar Sesión</button>
    </form>
  )
}
