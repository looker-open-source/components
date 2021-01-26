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

import React, { useState } from 'react'
// import { Story } from '@storybook/react/types-6-0'
import { MenuItem, MenuGroup, MenuList } from '../Menu'
import { Aside, Page, Section } from '../Layout'
import { Icon } from '../Icon'
import { Panel, Panels, usePanel } from './'

export default {
  component: Panel,
  title: 'Panel',
}

export const Basic = () => {
  const [explore, setExplore] = useState(false)
  const toggleExplore = () => setExplore(!explore)

  const title = (
    <>
      <Icon name="ExploreOutline" m="xsmall" />
      Explore
    </>
  )

  return (
    <Page hasAside>
      <Aside width="12rem">
        <Panels>
          <MenuList>
            <MenuGroup label="Looker">
              <MenuItem onClick={toggleExplore} icon="ExploreOutline">
                Explore
              </MenuItem>
              <Panel content={'content from display...'} title="Develop">
                <MenuItem icon="Code">Develop</MenuItem>
              </Panel>
              <MenuItem icon="Group">Admin</MenuItem>
            </MenuGroup>
          </MenuList>

          <Panel
            content={
              <MenuList>
                <MenuItem icon="ArrowRight">DCL</MenuItem>
                <MenuItem icon="ArrowRight">Internal Issues</MenuItem>
                <MenuItem icon="ArrowRight">Licence</MenuItem>
              </MenuList>
            }
            direction="left"
            isOpen={explore}
            setOpen={setExplore}
            title={title}
          />
        </Panels>
      </Aside>
      <Section>Main stuff here...</Section>
    </Page>
  )
}
Basic.parameters = {
  storyshots: { disable: true },
}

export const Hook = () => {
  const [isOpen, setOpen] = useState(false)
  const open = () => setOpen(true)
  const canClose = () => true

  const { panel } = usePanel({
    canClose,
    content: 'Panel content',
    direction: 'left',
    isOpen,
    setOpen,
    title: 'Panel Hook',
  })

  return (
    <>
      {panel}
      <MenuList>
        <MenuGroup>
          <MenuItem onClick={open} icon="Check">
            Option A
          </MenuItem>
          <MenuItem icon="Check">Option B</MenuItem>
        </MenuGroup>
      </MenuList>
    </>
  )
}
Hook.parameters = {
  storyshots: { disable: true },
}
