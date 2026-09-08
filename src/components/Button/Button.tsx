import { Button as AntButton } from "antd";
import type { ButtonProps as AntButtonProps } from "antd";

export type ButtonVariant = "primary" | "secondary" | "danger";

export interface ButtonProps extends Omit<
  AntButtonProps,
  "danger" | "type" | "variant"
> {
  variant?: ButtonVariant;
}

export function Button({ variant = "primary", ...props }: ButtonProps) {
  return (
    <AntButton
      danger={variant === "danger"}
      type={variant === "primary" ? "primary" : "default"}
      {...props}
    />
  );
}
