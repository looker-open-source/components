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
import {
  Checkbox,
  Label,
  List,
  ListItem,
  MixedBoolean,
  CheckboxTree,
  useMixedStateCheckbox,
  Heading,
} from '@looker/components'

/* eslint-disable sort-keys */
export const MixedStateCheckboxDemo = () => {
  // Set up local state and child change handlers
  const [parentState, setParentState] = useState<MixedBoolean>(false)
  const [appleState, setAppleState] = useState<MixedBoolean>(false)
  const [bananaState, setBananaState] = useState<MixedBoolean>(false)
  const [avocadoState, setAvocadoState] = useState<MixedBoolean>(false)
  const handleAppleChange = () => setAppleState(!appleState)
  const handleBananaChange = () => setBananaState(!bananaState)
  const handleAvocadoChange = () => setAvocadoState(!avocadoState)

  // Establish checkbox hierarchy for use in custom hook
  const fruitTree: CheckboxTree = {
    parent: {
      setState: setParentState,
      state: parentState,
    },
    children: [
      { setState: setAppleState, state: appleState },
      { setState: setBananaState, state: bananaState },
      { setState: setAvocadoState, state: avocadoState },
    ],
  }

  // Sync parent/child states and get provided parent change handler
  const handleParentChange = useMixedStateCheckbox(fruitTree)

  return (
    <>
      <Heading mt="small">Mixed State Checkbox</Heading>
      <List p="large">
        <ListItem>
          <Checkbox
            id="fruit-parent"
            name="fruit"
            value="all-fruit"
            onChange={handleParentChange}
            checked={parentState}
          />
          <Label htmlFor="fruit-parent" fontSize="medium">
            Fruit
          </Label>
        </ListItem>
        <ListItem>
          <List pl="large">
            <ListItem>
              <Checkbox
                id="fruit-apple"
                name="fruit"
                value="apple"
                onChange={handleAppleChange}
                checked={appleState}
              />
              <Label htmlFor="fruit-apple" fontSize="large">
                🍏
              </Label>
            </ListItem>
            <ListItem>
              <Checkbox
                id="fruit-banana"
                name="fruit"
                value="apple"
                onChange={handleBananaChange}
                checked={bananaState}
              />
              <Label htmlFor="fruit-banana" fontSize="large">
                🍌
              </Label>
            </ListItem>
            <ListItem>
              <Checkbox
                id="fruit-avocado"
                name="fruit"
                value="apple"
                onChange={handleAvocadoChange}
                checked={avocadoState}
              />
              <Label htmlFor="fruit-avocado" fontSize="large">
                🥑
              </Label>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </>
  )
}
