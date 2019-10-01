import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Box, Button, IconButton, Tooltip } from '@looker/components'

const RoundBtnStyled = styled(Button)`
  border-radius: 2rem;
`

export const RoundBtn = () => (
  <RoundBtnStyled>Hello Round Button</RoundBtnStyled>
)

const punkRockColor = {
  main: 'DeepPink',
  light: 'HotPink',
  lighter: 'LightPink',
  dark: 'PaleVioletRed',
  darker: 'MediumVioletRed',
  borderColor: 'MediumVioletRed',
  text: 'White',
}

export const PunkRockButton = () => (
  <Button color={punkRockColor}>I am a Punk Rock Button</Button>
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
        <Button color="danger" variant="outline">
          Mild Danger Outline Button
        </Button>
      </Box>
    </Box>
  </ThemeProvider>
)

// IconButton

const FancyIconButton = styled(IconButton)`
  transition: transform 0.5s;
  &:hover {
    transform: rotate(45deg);
  }
`
export const FancyIconBtn = () => {
  return (
    <div>
      <IconButton label="Add File" icon="Plus" size="xxsmall" mr="small" />
      <IconButton label="Settings" icon="Gear" mr="small" />
      <IconButton
        label="Add to Favorites"
        icon="Favorite"
        size="small"
        mr="small"
      />
      <IconButton
        label="Delete Look"
        icon="Trash"
        size="medium"
        color="danger"
        mr="small"
      />

      <Tooltip content="Add a new file">
        {eventHandlers => (
          <FancyIconButton
            label="Close"
            icon="Close"
            size="large"
            outline
            mr="small"
            {...eventHandlers}
          />
        )}
      </Tooltip>
    </div>
  )
}
