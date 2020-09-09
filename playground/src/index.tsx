/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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
import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import {
  ComponentsProvider,
  MenuItem,
  Icon,
  MenuList,
  Text,
} from '@looker/components'
import 'core-js/stable'

const App = () => (
  <ComponentsProvider>
    <MenuWrapper>
      <MenuList>
        <MenuItem
          icon="ChartPie"
          detail={
            <>
              <Text fontSize="small" mr="xsmall" variant="secondary">
                Online
              </Text>
              <Icon
                name="Chat"
                verticalAlign="middle"
                color="positive"
                size={16}
              />
            </>
          }
        >
          Chat
        </MenuItem>
        <MenuItem
          icon="ChartPie"
          detail={
            <>
              <Text fontSize="small" mr="xsmall" variant="secondary">
                Offline
              </Text>
              <Icon name="Chat" verticalAlign="middle" size={16} />
            </>
          }
        >
          Chat
        </MenuItem>
      </MenuList>
    </MenuWrapper>
  </ComponentsProvider>
)

const MenuWrapper = styled.div`
  margin: 20px auto;
  max-width: 500px;
`

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('container'))
})
