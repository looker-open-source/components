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
import { MenuGroup, MenuList, MenuItem } from '../Menu'
import { Page, Aside, Section } from '../Layout'
import { Panel } from './Panel'
import { Panels } from './Panels'

export default {
  component: Panel,
  title: 'Panel',
}

export const Basic = () => {
  const [explore, setExplore] = useState(false)
  const toggleExplore = () => setExplore(!explore)

  return (
    <Page hasAside>
      <Aside width="12rem">
        <Panels>
          <MenuList>
            <MenuGroup label="Looker">
              <MenuItem onClick={toggleExplore} icon="ExploreOutline">
                Explore
              </MenuItem>
              <Panel title="Develop" content={'content fro display...'}>
                <MenuItem icon="Code">Develop</MenuItem>
              </Panel>
              <MenuItem icon="Group">Admin</MenuItem>
            </MenuGroup>
          </MenuList>

          <Panel
            isOpen={explore}
            setOpen={setExplore}
            direction="left"
            title="Explore"
            content={
              <MenuList>
                <MenuItem icon="ArrowRight">DCL</MenuItem>
                <MenuItem icon="ArrowRight">Internal Issues</MenuItem>
                <MenuItem icon="ArrowRight">Licence</MenuItem>
              </MenuList>
            }
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
