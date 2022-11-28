import React from "react";

import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { defaultTheme } from "./themes/default";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledThemeProvider theme={defaultTheme}>{children}</StyledThemeProvider>
  );
}
