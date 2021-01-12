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

import '@testing-library/jest-dom/extend-expect'
import { fireEvent } from '@testing-library/react'
import 'jest-styled-components'
import React, { useState } from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { Icon } from '../Icon'
import { Aside, Page, Section } from '../Layout'
import { MenuGroup, MenuItem, MenuList } from '../Menu'
import { Panel, Panels } from './'

describe('Panel', () => {
  const PanelExample = () => {
    const [explore, setExplore] = useState(false)
    const toggleExplore = () => setExplore(!explore)

    const title = (
      <>
        <Icon color="inform" name="ArrowBackward" m="xsmall" />
        return to explore
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
                <Panel title="Develop" content={'content from display...'}>
                  <MenuItem icon="Code">Develop</MenuItem>
                </Panel>
                <MenuItem icon="Group">Admin</MenuItem>
              </MenuGroup>
            </MenuList>

            <Panel
              isOpen={explore}
              setOpen={setExplore}
              direction="left"
              title={title}
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

  test('opens content prop if passed as parent of the clickable item to trigger Panel', () => {
    const { getByText } = renderWithTheme(<PanelExample />)

    const dev = getByText('Develop')
    expect(dev).toBeInTheDocument()

    fireEvent.click(dev)

    // Find content
    expect(getByText(/content from display/)).toBeInTheDocument()
  })

  test('opens content prop if passed as a separated component from the clickable trigger', () => {
    const { getByText } = renderWithTheme(<PanelExample />)

    const explore = getByText('Explore')
    expect(explore).toBeInTheDocument()

    fireEvent.click(explore)

    // Find content
    expect(getByText('DCL')).toBeInTheDocument()
    expect(getByText('Internal Issues')).toBeInTheDocument()
    expect(getByText('Licence')).toBeInTheDocument()
  })

  test('returns to main menu when title is clicked', () => {
    const { getByText } = renderWithTheme(<PanelExample />)

    const explore = getByText('Explore')
    expect(explore).toBeInTheDocument()

    fireEvent.click(explore)

    // Find content
    expect(getByText('DCL')).toBeInTheDocument()

    const returnToExplore = getByText('return to explore')

    fireEvent.click(returnToExplore)

    expect(getByText('Looker')).toBeInTheDocument()
  })
})
