import type { ComponentProps } from "react";

import {
  fieldDescribedBy,
  Field,
  type FieldProps,
} from "./Field";
import { TextInput } from "./TextInput";

export interface TextFieldProps
  extends Omit<ComponentProps<"input">, "id">,
    Pick<FieldProps, "id" | "label" | "required" | "optional" | "hint" | "error"> {
  containerClassName?: string;
}

export function TextField({
  id,
  label,
  required,
  optional,
  hint,
  error,
  containerClassName,
  ...props
}: TextFieldProps) {
  return (
    <Field
      id={id}
      label={label}
      required={required}
      optional={optional}
      hint={hint}
      error={error}
      className={containerClassName}
    >
      <TextInput
        id={id}
        invalid={Boolean(error)}
        aria-describedby={fieldDescribedBy(id, { hint, error })}
        {...props}
      />
    </Field>
  );
}
