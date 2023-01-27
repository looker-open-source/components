/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import type { FormEvent } from 'react'
import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../Button'
import { InputText } from '../../Form'
import { Space, SpaceVertical } from '../../Layout'
import { useToggle } from '../../utils'
import type { WindowedTreeNodeProps } from '..'
import { WindowedTreeCollection, Tree } from '..'
import {
  FieldPickerItem,
  HighlightContext,
} from '../../LkFieldTree/stories/FieldPickerItem'
import { generateBorderRadius } from '../utils/generateBorderRadius'

const BorderRadiusOverrideTree = styled(Tree)`
  ${({ theme }) => generateBorderRadius('medium', theme)}
`

const getRandomInteger = (limit: number) => Math.floor(Math.random() * limit)

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

const getItems = (
  prefix: string,
  labelLength: number,
  canNest = false
): WindowedTreeNodeProps[] => {
  return Array.from(Array(10), (_, i) => {
    if (canNest && i % 3 === 2) {
      const labelText = labelLength ? `: ${getString()}` : ''
      return {
        content: (
          <BorderRadiusOverrideTree label={`${prefix}-${i}${labelText}`} />
        ),
        isOpen: true,
        items: getItems(`${prefix}-${i}`, labelLength),
      }
    }
    const itemText = labelLength ? `: ${getString(labelLength)}` : ''
    return {
      content: (
        <FieldPickerItem>
          {prefix}-{i}
          {itemText}
        </FieldPickerItem>
      ),
    }
  })
}

const getTrees = (labelLength: number): WindowedTreeNodeProps[] =>
  Array.from(Array(100), (_, i) => {
    const labelText = labelLength ? `: ${getString()}` : ''
    return {
      content: <BorderRadiusOverrideTree label={`${i}${labelText}`} />,
      isOpen: true,
      items: getItems(String(i), labelLength, true),
    }
  })

const treesRandomText = getTrees(50)
const treesNoText = getTrees(0)

const getUpdater =
  (isOpen: boolean) =>
  (tree: WindowedTreeNodeProps): WindowedTreeNodeProps => {
    if (tree.items) {
      return { ...tree, isOpen, items: tree.items.map(getUpdater(isOpen)) }
    }
    return { ...tree, isOpen }
  }

export default function Windowing({ noText }: { noText?: boolean }) {
  const { value, toggle, setOn } = useToggle()
  const [term, setTerm] = useState('')
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setTerm(e.currentTarget.value)
    if (term === '' && e.currentTarget.value !== '') {
      setOn()
    }
  }
  const treesUpdated = useMemo(() => {
    const trees = noText ? treesNoText : treesRandomText
    return trees.map(getUpdater(value))
  }, [noText, value])

  return (
    <SpaceVertical height="100vh">
      <Space>
        <Button onClick={toggle}>Toggle all {value ? 'closed' : 'open'}</Button>
        <InputText value={term} onChange={handleChange} />
      </Space>
      <HighlightContext.Provider value={{ term }}>
        <WindowedTreeCollection
          density={-3}
          height="100%"
          width="450px"
          trees={treesUpdated}
        />
      </HighlightContext.Provider>
    </SpaceVertical>
  )
}
