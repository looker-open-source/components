/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React, { MouseEvent } from 'react'
import ReactDOM from 'react-dom'
import {
  Button,
  GlobalStyle,
  Divider,
  Box,
  InputText,
  Paragraph,
  Select,
  useControlledSelect,
} from '@looker/components'
import { theme } from '@looker/design-tokens'
import { ThemeProvider } from 'styled-components'

const App: React.FC = () => {
  const { inputProps, ...selectProps } = useControlledSelect('Apples')
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const fruit = e.currentTarget.getAttribute('data-fruit') || ''
    selectProps.onSelect({ value: fruit })
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Box m="xlarge">
          <Paragraph mb="medium">{selectProps.value}</Paragraph>
          <Select
            openOnFocus={true}
            width={240}
            inputProps={{
              ...inputProps,
              autocomplete: false,
              placeholder: 'Placeholder text',
            }}
            listProps={{ persistSelection: true }}
            options={[
              { data: { id: 1 }, value: 'Apples' },
              { data: { id: 2 }, value: 'Bananas' },
              { data: { id: 3 }, value: 'Oranges' },
              { data: { id: 4 }, value: 'Pineapples' },
              { data: { id: 5 }, value: 'Kiwis' },
            ]}
            {...selectProps}
          />
          <Button
            mt="medium"
            mr="small"
            data-fruit="Kiwis"
            onClick={handleClick}
          >
            Pick Kiwis
          </Button>
          <Button mt="medium" data-fruit="Oranges" onClick={handleClick}>
            Pick Oranges
          </Button>
          <Divider my="xlarge" />
          <InputText width={240} />
        </Box>
      </ThemeProvider>
    </>
  )
}

/**
 * This is the binding site for the playground. If you want to edit the
 * primary application, do your work in App.tsx instead.
 */
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('container'))
})
