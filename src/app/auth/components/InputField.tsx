import type { ChangeEventHandler } from "react";
import { Input } from "@/components/ui/input";
import type { PropsWithPlaceholder } from "@/types";

interface Props extends PropsWithPlaceholder {
  type: string;
  onChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
  value: string;
  minLength?: number;
}

function InputField({
  placeholder,
  type,
  onChange,
  value,
  minLength = 6,
}: Props) {
  return (
    <Input
      className="rounded-none h-10 text-(--main-gray) max-w-140"
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      value={value}
      minLength={minLength}
    />
  );
}

export default InputField;
