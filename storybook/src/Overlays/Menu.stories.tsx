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
  Divider,
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
    <MenuGroup>
      <MenuItem>Gouda</MenuItem>
      <MenuItem current> Swiss</MenuItem>
      <MenuItem>Cheddar</MenuItem>
    </MenuGroup>
    <MenuGroup label="Create">
      <MenuItem>Gouda</MenuItem>
      <MenuItem> Swiss</MenuItem>
      <MenuItem>Cheddar</MenuItem>
    </MenuGroup>

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
        <Button>Icon Space Preserved</Button>
      </MenuDisclosure>
      <MenuList>
        <MenuItem icon="User">Hello</MenuItem>
        <MenuItem>World</MenuItem>
      </MenuList>
    </Menu>

    <Divider />

    <MenuList compact>
      <MenuGroup label="MenuGroup with 3 Items">
        <MenuItem icon="LogoRings">Looker</MenuItem>
        <MenuItem icon="Validate">Validate</MenuItem>
        <MenuItem>Pizza!</MenuItem>
      </MenuGroup>
    </MenuList>

    <Divider />

    <MenuList compact>
      <MenuItem icon="LogoRings">Looker</MenuItem>
      <MenuItem icon="Validate">Validate</MenuItem>
      <MenuGroup label="MenuGroup with 1 Item">
        <MenuItem>Pizza!</MenuItem>
      </MenuGroup>
    </MenuList>

    <Divider />
    <MenuList compact>
      <MenuGroup label="Icon and Artwork">
        <MenuItem icon="ChartPie">Icon</MenuItem>
        <MenuItem
          iconArtwork={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                fill="#7FFFD4"
              />
            </svg>
          }
        >
          Artwork
        </MenuItem>
      </MenuGroup>
    </MenuList>
  </div>
)

export const Hover = () => {
  const hoverRef = useRef<HTMLDivElement>(null)
  const [dialogIsOpen, setOpen] = useState(false)
  const open = () => setOpen(true)
  const close = () => setOpen(false)

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
                    onClick={open}
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

      <Dialog isOpen={dialogIsOpen} onClose={close}>
        <Box p="large">Alert icon should be hidden now.</Box>
      </Dialog>
    </Card>
  )
}

export const RealisticMenus = () => {
  return (
    <Space gap="xxlarge">
      <Menu>
        <MenuDisclosure>
          <IconButton label="Dashboard actions" size="medium" icon="DotsVert">
            Icon Space Preserved
          </IconButton>
        </MenuDisclosure>
        <MenuList>
          <MenuGroup>
            <MenuItem icon="Refresh" detail="⌘⇧↵">
              Clear cache & refresh
            </MenuItem>
          </MenuGroup>

          <MenuGroup label="Options">
            <MenuItem icon="EditOutline" detail="⌘⇧E">
              Edit dashboard
            </MenuItem>
            <MenuItem>Get LookMl</MenuItem>
            <MenuItem icon="Undo" detail="A longer detail">
              Revert to original dashboard
            </MenuItem>
          </MenuGroup>

          <MenuGroup>
            <MenuItem icon="Download" detail="⌥⇧D">
              Edit dashboard
            </MenuItem>
          </MenuGroup>

          <MenuGroup>
            <MenuItem icon="TrashOutline">Move to Trash</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>

      <Menu>
        <MenuDisclosure>
          <IconButton label="Dashboard actions" size="medium" icon="DotsVert">
            Icon Space Preserved
          </IconButton>
        </MenuDisclosure>
        <MenuList compact>
          <MenuGroup>
            <MenuItem icon="Refresh" detail="⌘⇧↵">
              Clear cache & refresh
            </MenuItem>
          </MenuGroup>

          <MenuGroup label="Options">
            <MenuItem icon="EditOutline" detail="⌘⇧E">
              Edit dashboard
            </MenuItem>
            <MenuItem>Get LookMl</MenuItem>
            <MenuItem icon="Undo">Revert to original dashboard</MenuItem>
          </MenuGroup>

          <MenuGroup>
            <MenuItem icon="Download" detail="⌥⇧D">
              Edit dashboard
            </MenuItem>
          </MenuGroup>

          <MenuGroup>
            <MenuItem icon="TrashOutline">Move to Trash</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>

      <Menu>
        <MenuDisclosure>
          <IconButton label="IDE actions" size="medium" icon="DotsVert" />
        </MenuDisclosure>
        <MenuList compact>
          <MenuGroup>
            <MenuItem icon="EditOutline">Rename</MenuItem>
            <MenuItem icon="TrashOutline">Delete</MenuItem>
          </MenuGroup>
          <MenuGroup label="Create">
            <MenuItem icon="FolderNew">Folder</MenuItem>
            <MenuItem icon="ExploreOutline">Model</MenuItem>
            <MenuItem icon="IdeFileView">New Item</MenuItem>
            <MenuItem icon="IdeFileView">View</MenuItem>
            <MenuItem icon="IdeFileDashboard">Dasbhaord</MenuItem>
            <MenuItem icon="IdeFileDocument">Document</MenuItem>
            <MenuItem icon="IdeFileGeneric">Generic LookML file</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>

      <Menu>
        <MenuDisclosure>
          <IconButton label="Menu No Icons" size="medium" icon="DotsVert" />
        </MenuDisclosure>
        <MenuList compact>
          <MenuGroup>
            <MenuItem>Rename</MenuItem>
            <MenuItem>Delete</MenuItem>
          </MenuGroup>
          <MenuGroup label="Create">
            <MenuItem>Folder</MenuItem>
            <MenuItem>Model</MenuItem>
            <MenuItem>New Item</MenuItem>
            <MenuItem>View</MenuItem>
            <MenuItem>Dasbhaord</MenuItem>
            <MenuItem>Document</MenuItem>
            <MenuItem>Generic LookML file</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Space>
  )
}
