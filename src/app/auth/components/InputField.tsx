import { Input } from "@/components/ui/input";
import type { PropsWithPlaceholder } from "@/types";

interface Props extends PropsWithPlaceholder {
  type: string;
}

function InputField({ placeholder, type }: Props) {
  return (
    <Input
      className="rounded-none h-10 text-(--main-gray) max-w-140 border-(--main-gray)"
      placeholder={placeholder}
      type={type}
    />
  );
}

export default InputField;
