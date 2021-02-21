import React from "react"
import { ThemeProvider as StyledProvider } from "styled-components"
import theme from "./theme"

interface Props {
  children: React.ReactChild
}

const ThemeProvider = ({ children }: Props) => {
  return <StyledProvider theme={theme}>{children}</StyledProvider>
}

export default ThemeProvider
