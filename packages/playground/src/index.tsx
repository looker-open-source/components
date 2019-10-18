import React, { ChangeEvent } from 'react'
import ReactDOM from 'react-dom'
import {
  Banner,
  Button,
  GlobalStyle,
  Paragraph,
  InputSearch,
  Divider,
  Menu,
  MenuDisclosure,
  MenuList,
  MenuItem,
  Checkbox,
} from '@looker/components'
import { theme } from '@looker/design-tokens'
import { ThemeProvider } from 'styled-components'

const App: React.FC = () => {
  const [keywords, setKeywords] = React.useState('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeywords(e.currentTarget.value)
  }
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Paragraph fontSize="xxlarge">Hello world</Paragraph>
        <Button>Boot my app!</Button>
        <Banner intent="info">Boot my app!</Banner>
        <InputSearch placeholder="Type your search" />
        <Divider my="medium" />

        <InputSearch placeholder="Type your search" value="test search" />
        <Divider my="medium" />

        <InputSearch
          width="50%"
          placeholder="Type your search"
          value="test search 0"
          summary={'some text'}
        />
        <Divider my="medium" />

        <InputSearch
          placeholder="Type your search"
          value="test search 1"
          hideControls
        />
        <InputSearch
          placeholder="Type your search"
          summary={
            keywords.length > 0
              ? `You typed ${keywords.length} characters`
              : undefined
          }
          value={keywords}
          onChange={onChange}
          hideControls={false}
        />
        <Menu>
          <MenuDisclosure tooltip="Select your favorite kind">
            <Button>Cheese</Button>
          </MenuDisclosure>
          <MenuList>
            <MenuItem icon="FavoriteOutline">Gouda</MenuItem>
            <MenuItem icon="FavoriteOutline">Swiss</MenuItem>
          </MenuList>
        </Menu>
        <Checkbox />
      </>
    </ThemeProvider>
  )
}
/**
 * This is the binding site for the playground. If you want to edit the
 * primary application, do your work in App.tsx instead.
 */
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('container'))
})
