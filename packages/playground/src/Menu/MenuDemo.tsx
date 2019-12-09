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

import React, { useContext } from 'react'
import {
  Box,
  Button,
  Menu,
  MenuDisclosure,
  MenuList,
  MenuItem,
  ModalContext,
  MenuGroup,
  Paragraph,
} from '@looker/components'
const FancyMenuItem = ({
  text,
  current,
}: {
  text: string
  current?: boolean
}) => {
  const { closeModal } = useContext(ModalContext)
  const handleClick = () => {
    alert(`You picked ${text}`)
    closeModal && closeModal()
  }
  return (
    <MenuItem icon="FavoriteOutline" onClick={handleClick} current={current}>
      {text}
    </MenuItem>
  )
}
export function MenuDemo() {
  const [isOpen, setOpen] = React.useState(true)
  return (
    <Box m="large">
      <Paragraph pb="medium">{isOpen ? 'Menu Open' : 'Menu Closed'}</Paragraph>
      <Menu isOpen={isOpen} setOpen={setOpen}>
        <MenuDisclosure tooltip="Select your favorite kind">
          <Button>Cheese</Button>
        </MenuDisclosure>
        <MenuList compact>
          <FancyMenuItem text="Gouda" />
          <FancyMenuItem text="Swiss" current />
          <MenuGroup compact={false}>
            <FancyMenuItem text="Gouda w/ Space" />
            <FancyMenuItem text="Swiss w/ Space" />
          </MenuGroup>
        </MenuList>
      </Menu>
    </Box>
  )
}
