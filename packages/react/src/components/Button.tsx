import { colors, radius, spacing } from "@beyounglabs/ui-tokens";

import styled from "styled-components";

export const Button = styled("button")({
  backgroundColor: colors.secondary,
  color: colors.primary,
  padding: `${spacing[4]} ${spacing[10]}`,
  borderRadius: radius.sm,
  appearance: "unset",
  outline: "unset",
  border: "unset",
});
