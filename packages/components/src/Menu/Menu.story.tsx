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

import React, {
  forwardRef,
  MouseEvent,
  Ref,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Button, IconButton } from '../Button'
import { Card } from '../Card'
import { Dialog, DialogLayout } from '../Dialog'
import { Divider } from '../Divider'
import { FieldToggleSwitch } from '../Form'
import { Icon } from '../Icon'
import { Flex, Space, SpaceVertical } from '../Layout'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '../Tabs'
import { Heading, Text, Paragraph } from '../Text'
import { Tooltip } from '../Tooltip'
import { useToggle } from '../utils'
import { Menu } from './Menu'
import { MenuGroup } from './MenuGroup'
import { MenuItem } from './MenuItem'
import { MenuList } from './MenuList'

export default {
  component: Menu,
  title: 'Menu',
}

const menuItems = (
  <>
    <MenuGroup>
      <MenuItem
        detail="detail"
        description="this is the description"
        icon="LogoRings"
        tooltip="Some tooltip"
      >
        Looker
      </MenuItem>
      <MenuItem description="this is the description" icon="Validate">
        Validate
      </MenuItem>
      <MenuItem detail="detail" icon="ChartPie">
        Pizza
      </MenuItem>
    </MenuGroup>
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
  <Menu content={menuItems}>
    <Button>Basic Menu</Button>
  </Menu>
)

Basic.parameters = {
  storyshots: { disable: true },
}

export const Controlled = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <Menu content={menuItems} isOpen={isOpen} setOpen={setOpen}>
      <Button>Controlled Menu</Button>
    </Menu>
  )
}

Controlled.parameters = {
  storyshots: { disable: true },
}

export const IconSpace = () => (
  <div>
    <Menu
      content={
        <>
          <MenuItem icon="User">Hello</MenuItem>
          <MenuItem>World</MenuItem>
        </>
      }
    >
      <Button>Icon Space Preserved</Button>
    </Menu>

    <Divider />

    <MenuList compact>
      <MenuGroup label="MenuGroup with 3 Items">
        <MenuItem description="this is a description" icon="LogoRings">
          Looker
        </MenuItem>
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
      <MenuGroup label="Icon, Artwork, and Detail">
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
        <MenuItem
          icon="Account"
          detail={
            <>
              <Text fontSize="small" mr="xsmall" color="secondary">
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
          icon="Account"
          detail={
            <>
              <Text fontSize="small" mr="xsmall" color="secondary">
                Offline
              </Text>
              <Icon name="Chat" verticalAlign="middle" size={16} />
            </>
          }
        >
          Chat
        </MenuItem>
      </MenuGroup>
    </MenuList>
  </div>
)

IconSpace.parameters = {
  storyshots: { disable: true },
}

const MenuIcons = forwardRef(
  ({ open, ...props }: { open: () => void }, ref: Ref<HTMLButtonElement>) => {
    return (
      <>
        <IconButton icon="AddAlerts" label="Add Alert" onClick={open} />
        <IconButton icon="DotsVert" label="More Options" ref={ref} {...props} />
      </>
    )
  }
)

MenuIcons.displayName = 'MenuIcons'

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
          <Menu content={menuItems} hoverDisclosureRef={hoverRef} compact>
            <MenuIcons open={open} />
          </Menu>
        </div>
      </Space>

      <Dialog isOpen={dialogIsOpen} onClose={close}>
        <DialogLayout>Alert icon should be hidden now.</DialogLayout>
      </Dialog>
    </Card>
  )
}

Hover.parameters = {
  storyshots: { disable: true },
}

export const RealisticMenus = () => {
  return (
    <Space gap="xxlarge">
      <Menu
        content={
          <>
            <MenuGroup>
              <MenuItem
                description="some description"
                icon="Refresh"
                detail="⌘⇧↵"
              >
                Clear cache & refresh
              </MenuItem>
            </MenuGroup>

            <MenuGroup label="Options">
              <MenuItem icon="EditOutline" detail="⌘⇧E">
                Edit dashboard
              </MenuItem>
              <MenuItem description="some description">Get LookMl</MenuItem>
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
          </>
        }
      >
        <IconButton label="Dashboard actions" size="medium" icon="DotsVert">
          Icon Space Preserved
        </IconButton>
      </Menu>

      <Menu
        compact
        content={
          <>
            <MenuGroup>
              <MenuItem icon="Refresh" detail="⌘⇧↵">
                Clear cache &amp; refresh
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
              <MenuItem
                description="some description"
                icon="Download"
                detail="⌥⇧D"
              >
                Edit dashboard
              </MenuItem>
            </MenuGroup>

            <MenuGroup>
              <MenuItem icon="TrashOutline">Move to Trash</MenuItem>
            </MenuGroup>
          </>
        }
      >
        <IconButton label="Dashboard actions" size="medium" icon="DotsVert">
          Icon Space Preserved
        </IconButton>
      </Menu>

      <Menu
        compact
        content={
          <>
            <MenuGroup>
              <MenuItem icon="EditOutline">Rename</MenuItem>
              <MenuItem description="some description" icon="TrashOutline">
                Delete
              </MenuItem>
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
          </>
        }
      >
        <IconButton label="IDE actions" size="medium" icon="DotsVert" />
      </Menu>

      <Menu
        compact
        content={
          <>
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
          </>
        }
      >
        <IconButton label="Menu No Icons" size="medium" icon="DotsVert" />
      </Menu>
    </Space>
  )
}

RealisticMenus.parameters = {
  storyshots: { disable: true },
}

const getRandomInteger = (limit: number) => Math.floor(Math.random() * limit)

const array95 = Array.from(Array(95), (_, i) => String(i + 1))
const array3000 = Array.from(Array(3000), (_, i) => {
  const rand = getRandomInteger(15)
  const description = rand % 3 === 0 ? 'Description' : undefined
  return { description, label: String(i + 1) }
})

const preamble = `We the People of the United States, in Order to form a more perfect Union,
establish Justice, insure domestic Tranquility, provide for the common
defense, promote the general Welfare, and secure the Blessings of Liberty
to ourselves and our Posterity, do ordain and establish this Constitution
for the United States of America.`

const getString = (lengthLimit = 30) => {
  const startLimit = preamble.length - 50
  const length = getRandomInteger(lengthLimit)
  const startIndex = getRandomInteger(startLimit)
  return preamble.substr(startIndex, length)
}

const getItems = (labelLength: number) => {
  const num = getRandomInteger(8)
  const itemsLength = Math.pow(num, 2)
  return Array.from(Array(itemsLength), (_, i) => {
    return {
      label: `${i}: ${getString(labelLength)}`,
    }
  })
}

const getGroups = (labelLength: number) =>
  Array.from(Array(100), (_, i) => ({
    items: getItems(labelLength),
    label: `${i}: ${getString()}`,
  }))

export const LongMenus = () => {
  const { value, toggle } = useToggle(true)
  const { value: longLabels, toggle: toggleLongLabels } = useToggle()
  const groups = useMemo(() => {
    return getGroups(longLabels ? 120 : 30)
  }, [longLabels])
  return (
    <SpaceVertical align="start" p="xlarge">
      <FieldToggleSwitch
        on={value}
        label="Enable windowing"
        onChange={toggle}
      />
      <Space>
        <Menu
          content={array95.map((item, i) => (
            <MenuItem key={i}>{item}</MenuItem>
          ))}
        >
          <Button>No windowing (95)</Button>
        </Menu>
        <Menu
          width={100}
          content={groups.slice(0, 5).map(({ label, items }, index) => (
            <MenuGroup key={`${label}-${index}`} label={label}>
              {items.map((item, index2) => (
                <MenuItem key={`${item.label}-${index2}`}>
                  {item.label}
                </MenuItem>
              ))}
            </MenuGroup>
          ))}
        >
          <Button>No windowing (groups)</Button>
        </Menu>
        <Menu
          width={100}
          windowing={!value ? 'none' : undefined}
          content={array3000.map((item, i) => (
            <MenuItem key={i}>{item.label}</MenuItem>
          ))}
        >
          <Button>Fixed Windowing (3k)</Button>
        </Menu>
        <Menu
          width={100}
          windowing={!value ? 'none' : undefined}
          content={array3000.map((item, i) => (
            <MenuItem key={i} description={item.description}>
              {item.label}
            </MenuItem>
          ))}
        >
          <Button>Fixed Windowing (description)</Button>
        </Menu>
        <Menu
          width={300}
          windowing={!value ? 'none' : 'variable'}
          content={groups.map(({ label, items }, index) => (
            <MenuGroup key={`${label}-${index}`} label={label}>
              {items.map((item, index2) => (
                <MenuItem key={`${item.label}-${index2}`}>
                  {item.label}
                </MenuItem>
              ))}
            </MenuGroup>
          ))}
        >
          <Button>Variable Windowing (groups)</Button>
        </Menu>
        <FieldToggleSwitch
          on={longLabels}
          onChange={toggleLongLabels}
          label="Use longer labels"
          description="The scrolling will become jittery"
        />
      </Space>
    </SpaceVertical>
  )
}

LongMenus.parameters = {
  storyshots: { disable: true },
}

export const WithDialog = () => {
  const { value, setOn, setOff } = useToggle()
  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault()
    setOn()
  }
  return (
    <>
      <Menu
        content={
          <>
            <MenuItem onClick={setOn}>Open Dialog</MenuItem>
            <MenuItem onClick={handleClick}>
              Open Dialog, keep Menu open
            </MenuItem>
          </>
        }
      >
        <Button>Menu with Dialog</Button>
      </Menu>
      <Dialog isOpen={value} onClose={setOff}>
        <DialogLayout
          footer={<Button onClick={setOff}>Close</Button>}
          header="A Dialog"
        >
          Dialog must be placed outside of Menu
        </DialogLayout>
      </Dialog>
    </>
  )
}

WithDialog.parameters = {
  storyshots: { disable: true },
}

export const WithTooltip = () => {
  const { value, toggle } = useToggle()
  return (
    <Space>
      <Menu content={menuItems} disabled={value}>
        <Tooltip content="Open the menu" placement="right">
          <Button disabled={value}>Menu with Tooltip</Button>
        </Tooltip>
      </Menu>
      <FieldToggleSwitch on={value} onChange={toggle} label="Disabled" />
    </Space>
  )
}

WithTooltip.parameters = {
  storyshots: { disable: true },
}

export const ArrowKeyNavigation = () => (
  <SpaceVertical align="start">
    <Button>Above</Button>
    <Heading>Menu</Heading>
    <MenuList>
      <MenuItem>1</MenuItem>
      <MenuItem>2</MenuItem>
      <MenuItem>3</MenuItem>
    </MenuList>
    <Heading>Tabs</Heading>
    <Tabs>
      <TabList>
        <Tab>1</Tab>
        <Tab>2</Tab>
        <Tab>3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>One</TabPanel>
        <TabPanel>Two</TabPanel>
        <TabPanel>Three</TabPanel>
      </TabPanels>
    </Tabs>
    <Button>Below</Button>
  </SpaceVertical>
)

ArrowKeyNavigation.parameters = {
  storyshots: { disable: true },
}

export const NestedMenu = () => {
  const getOnClick = (text: string) => () => {
    alert(`You clicked ${text}`)
  }

  const submenu = (
    <>
      <MenuItem onClick={getOnClick('Sub Item')}>Sub Item</MenuItem>
      <MenuItem onClick={getOnClick('Another Sub Item')}>
        Another Sub Item
      </MenuItem>
      <MenuItem onClick={getOnClick('Third Sub Item')}>Third Sub Item</MenuItem>
      <MenuItem onClick={getOnClick('4th Sub Item')}>4th Sub Item</MenuItem>
      <MenuItem onClick={getOnClick('Fifth Sub Item')}>Fifth Sub Item</MenuItem>
    </>
  )
  const content = (
    <>
      <MenuGroup>
        <MenuItem icon="Edit" onClick={getOnClick('Edit')}>
          Edit
        </MenuItem>
        <MenuItem icon="Download" onClick={getOnClick('Download')}>
          Download
        </MenuItem>
      </MenuGroup>
      <MenuGroup label="Sub Menus">
        <MenuItem submenu={submenu}>Sub Menu</MenuItem>
        <MenuItem onClick={getOnClick('Sub Menu')} submenu={submenu}>
          Sub Menu - with onClick
        </MenuItem>
        <MenuItem icon="Favorite" onClick={getOnClick('Favorite')}>
          Favorite
        </MenuItem>
        <MenuItem submenu={submenu}>Sub Menu 3</MenuItem>
      </MenuGroup>
    </>
  )
  return (
    <Flex height="100vh" flexDirection="column" justifyContent="space-between">
      <Space between>
        <Menu content={content}>
          <Button>Nested Menu</Button>
        </Menu>
        <Menu content={content}>
          <Button>Right-aligned</Button>
        </Menu>
      </Space>
      <Space between>
        <Menu content={content}>
          <Button>Bottom-left-aligned</Button>
        </Menu>
        <Menu content={content}>
          <Button>Bottom-right-aligned</Button>
        </Menu>
      </Space>
    </Flex>
  )
}

NestedMenu.parameters = {
  storyshots: { disable: true },
}
