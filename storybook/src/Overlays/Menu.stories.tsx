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

import React, { useRef, useState } from 'react'
import {
  Box,
  Button,
  Menu,
  MenuDisclosure,
  MenuList,
  MenuItem,
  Dialog,
  MenuGroup,
  Card,
  Space,
  Paragraph,
  IconButton,
  MenuContext,
} from '@looker/components'

export const All = () => (
  <>
    <Space mb="large">
      <Basic />
      <Controlled />
    </Space>
    <IconSpace />
    <Hover />
  </>
)

export default {
  component: All,
  title: 'Overlays/Menu',
}

const menuItems = (
  <>
    <MenuItem>Gouda</MenuItem>
    <MenuItem current> Swiss</MenuItem>
    <MenuItem>Cheddar</MenuItem>
    <MenuGroup>
      <MenuItem>Gouda</MenuItem>
      <MenuItem> Swiss</MenuItem>
      <MenuItem>Cheddar</MenuItem>
    </MenuGroup>
  </>
)

export const Basic = () => (
  <Menu>
    <MenuDisclosure tooltip="Select your favorite kind">
      <Button>Basic Menu</Button>
    </MenuDisclosure>
    <MenuList>{menuItems}</MenuList>
  </Menu>
)

export const Controlled = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <Menu isOpen={isOpen} setOpen={setOpen}>
      <MenuDisclosure tooltip="Select your favorite kind">
        <Button>Controlled Menu</Button>
      </MenuDisclosure>
      <MenuList>{menuItems}</MenuList>
    </Menu>
  )
}

export const IconSpace = () => (
  <div>
    <Menu>
      <MenuDisclosure>
        <Button>Icon Space Preseved</Button>
      </MenuDisclosure>
      <MenuList>
        <MenuItem icon="User">Hello</MenuItem>
        <MenuItem>World</MenuItem>
      </MenuList>
    </Menu>

    <MenuList compact>
      <MenuGroup label="Cheeses">
        <MenuItem icon="LogoRings">Looker</MenuItem>
        <MenuItem>Pizza!</MenuItem>
        <MenuItem icon="Validate">Validate</MenuItem>
      </MenuGroup>
    </MenuList>
  </div>
)

export const Hover = () => {
  const hoverRef = useRef<HTMLDivElement>(null)
  const [modalIsOpen, setOpen] = useState(false)
  function openModal() {
    setOpen(true)
  }
  function closeModal() {
    setOpen(false)
  }
  return (
    <Card ref={hoverRef} p="large" raised height="auto">
      <Space between>
        <Paragraph>
          Hovering in this card will show the button that triggers the menu.
        </Paragraph>

        <div>
          <Menu hoverDisclosureRef={hoverRef}>
            <MenuContext.Consumer>
              {({ showDisclosure, isOpen }) =>
                (showDisclosure || isOpen) && (
                  <IconButton
                    icon="AddAlerts"
                    label="Add Alert"
                    onClick={openModal}
                  />
                )
              }
            </MenuContext.Consumer>
            <MenuDisclosure>
              <IconButton
                icon="DotsVert"
                label="More Options"
                aria-haspopup="true"
              />
            </MenuDisclosure>
            <MenuList compact>{menuItems}</MenuList>
          </Menu>
        </div>
      </Space>

      <Dialog isOpen={modalIsOpen} onClose={closeModal}>
        <Box p="large">Alert icon should be hidden now.</Box>
      </Dialog>
    </Card>
  )
}
