import { error } from "console";
import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { twJoin } from "tailwind-merge";

type Props = {
  label: string;
  name: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>
};

export default function TextInput({ label, name, type, placeholder, register, errors }: Props) {
  return (
    <label>
      <span className="ml-1 mb-2 block">{label}</span>
      <input type={type} className={twJoin("w-full px-3 py-3 rounded-xl bg-gray-100 ring-1", errors[name] ? "ring-red-500 focus:outline-red-500" : "ring-transparent")} placeholder={placeholder} {...register(name)}
      />
      <p className="text-red-500 mt-1 text-sm ml-1">
        {errors[name]?.message as string || " "}
      </p>
    </label>


  )
}
