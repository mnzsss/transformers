import { colors, radius, spacing } from "@beyounglabs/ui-tokens";
import { variant } from "styled-system";

import styled from "styled-components";
import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<typeof Button>;

export const Button = styled("button")(
  {
    boxSizing: "border-box",
    backgroundColor: colors.secondary,
    color: colors.primary,
    padding: `${spacing[4]} ${spacing[10]}`,
    borderRadius: radius.sm,
    appearance: "unset",
    outline: "unset",
    border: "unset",
  },
  variant({
    prop: "variant",
    variants: {
      primary: {
        color: colors.secondary,
        bg: colors.primary,
      },
      secondary: {
        color: colors.primary,
        bg: colors.secondary,
      },
    },
  })
);

const Teste = () => {
  return <Button />;
};
