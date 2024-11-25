import { ThemeContext } from "@/context/theme";
import React from "react";

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context;
}
