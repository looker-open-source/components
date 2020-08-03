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

import {
  ComponentsProvider,
  MenuList,
  MenuGroup,
  MenuItem,
  IconButton,
  MenuDisclosure,
  Button,
  Menu,
  Heading,
  Confirm,
} from '@looker/components'
import 'core-js/stable'

const App = () => (
  <ComponentsProvider>
    <Heading>Missing Dialog Content</Heading>
    <Confirm
      title="Confirm Something"
      message="Is this what you want to do?"
      onConfirm={(close) => {
        alert('You did something')
        close()
      }}
    >
      {(open) => <Button onClick={open}>Do Something</Button>}
    </Confirm>

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
          <MenuItem icon="IdeFileDashboard">Dashboard</MenuItem>
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
          <MenuItem>Dashboard</MenuItem>
          <MenuItem>Document</MenuItem>
          <MenuItem>Generic LookML file</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  </ComponentsProvider>
)

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('container'))
})
