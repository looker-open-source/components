import React from 'react'
import noop from 'lodash/noop'
import {
  ComponentsProvider,
  Space,
  SpaceVertical,
  Select,
  Heading,
  Layout,
  MenuList,
  Tabs2,
  Tab2,
  MenuItem,
  InputText,
  ToggleSwitch,
  IconButton,
  Aside,
} from '@looker/components'
import { Delete } from '@styled-icons/material'
import { countries } from './bugData'

export const BugDemo = () => (
  <ComponentsProvider>
    <SpaceVertical>
      <Heading>Select issue</Heading>
      <Select
        options={[
          { value: 'Option 1' },
          { value: 'Option 2' },
          { value: 'Option 3' },
        ]}
        defaultValue="Option 2"
      />
      <Select
        options={[
          { value: 'Option 1' },
          { value: 'Option 2' },
          { value: 'Option 3' },
        ]}
        defaultValue="Option 3"
      />
      <Layout hasAside height="100%" width="100%">
        <Aside borderRight>
          <Heading>Menu</Heading>
          <MenuList>
            <MenuItem>Option A</MenuItem>
            <MenuItem>Option B</MenuItem>
            <MenuItem>Option C</MenuItem>
          </MenuList>
        </Aside>

        <SpaceVertical style={{ alignItems: 'normal' }} pl="small" pr="small">
          <Tabs2>
            <Tab2 id="tab1" label="Tab 1">
              <Layout hasAside height="100%">
                <Aside borderRight>
                  <MenuList>
                    <MenuItem>Option 1 </MenuItem>
                    <MenuItem>Option 2 </MenuItem>
                    <MenuItem>Option 3 </MenuItem>
                  </MenuList>
                </Aside>
                <SpaceVertical pl="small" pr="small">
                  <InputText before="App ID" value="12345" />
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                    <Space key={i}>
                      <ToggleSwitch on={true} onChange={noop} />
                      <Select options={countries} defaultValue="ALL" />
                      <InputText
                        before="$"
                        defaultValue="1.00"
                        placeholder="Rate"
                      />
                      <IconButton icon={<Delete />} label="Trash It" />
                    </Space>
                  ))}
                </SpaceVertical>
              </Layout>
            </Tab2>
            <Tab2 id="tab2" label="Tab 2">
              Nothing
            </Tab2>
          </Tabs2>
        </SpaceVertical>
      </Layout>
    </SpaceVertical>
  </ComponentsProvider>
)
