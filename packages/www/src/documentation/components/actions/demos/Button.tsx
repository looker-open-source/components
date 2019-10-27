import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Box, Button, ButtonOutline } from 'looker-lens'

const RoundBtnStyled = styled(Button)`
  border-radius: 2rem;
`

export const RoundBtn = () => (
  <RoundBtnStyled>Hello Round Button</RoundBtnStyled>
)

const mildTheme = (theme: any) => {
  const primary = Object.assign({}, theme.colors.semanticColors.primary, {
    main: '#2db264',
    dark: '#198044',
    darker: '#12593c',
  })
  const danger = Object.assign({}, theme.colors.semanticColors.danger, {
    main: '#ffd200',
    dark: '#e5ae17',
    darker: '#a67e11',
    lighter: '#fff1bf',
    borderColor: '#ffd200',
  })

  const newTheme = Object.assign({}, theme)
  newTheme.colors = Object.assign({}, newTheme.colors)
  newTheme.colors.semanticColors = {}
  newTheme.colors.semanticColors.primary = primary
  newTheme.colors.semanticColors.danger = danger
  return newTheme
}

export const ThemingButton = () => (
  <ThemeProvider theme={mildTheme}>
    <Box>
      <Button>Mild Button</Button>
      <Box ml="small" display="inline-block">
        <ButtonOutline color="danger">Mild Danger Outline Button</ButtonOutline>
      </Box>
    </Box>
  </ThemeProvider>
)
