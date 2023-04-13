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
import { Box, inputHeight, SpaceVertical, useID } from '@looker/components'
import React from 'react'
import { TreeResults } from './TreeResults'
import type { TreeResultsProps } from './TreeResults'
import { FieldSearch } from './FieldSearch'
import { TreeSelectPopup } from './TreeSelectPopup'

export type TreeSelectProps = TreeResultsProps & {
  disabled?: boolean
  disabledText?: React.ReactNode
  placeholder?: string
  label?: string
  withDropdown?: boolean
  treeHeight?: string | number
  selectedSection?: string
  showSelectedSection?: boolean
}

export const TreeSelect = ({
  disabled,
  disabledText,
  placeholder,
  label,
  tree,
  shortcutTree,
  withDropdown = true,
  treeHeight,
  searchInputValue: valueFromProps,
  selectedSection,
  showSelectedSection = false,
  onSelectedFieldChange,
  ...flexProps
}: TreeSelectProps) => {
  const [inputElement, setInputElement] = React.useState<HTMLDivElement | null>(
    null
  )
  const isInputting = React.useRef(false)

  const [isOpen, setOpen] = React.useState(false)
  const [inputValue, setInputValue] = React.useState(valueFromProps || '')

  const fieldSearchInputId = useID()

  React.useEffect(() => {
    if (!isInputting.current) {
      if (showSelectedSection && !isOpen) {
        setInputValue(
          valueFromProps && selectedSection
            ? `${selectedSection} • ${valueFromProps}`
            : ''
        )
      } else {
        setInputValue(valueFromProps || '')
      }
    }
  }, [showSelectedSection, isOpen, valueFromProps, selectedSection])

  const setOpenTrue = () => setOpen(true)
  const handleClick = () => {
    if (!isOpen && !disabled) {
      setOpenTrue()
      if (valueFromProps) setInputValue(valueFromProps)
    }
  }

  const handleFieldClick = (payload?: any) => {
    if (onSelectedFieldChange) {
      onSelectedFieldChange(payload)
    }
    setOpen(false)
  }

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    isInputting.current = true
    setInputValue(event.currentTarget.value)
    setOpenTrue()
    window.requestAnimationFrame(() => (isInputting.current = false))
  }
  const innerTree = (
    <TreeResults
      shortcutTree={shortcutTree}
      tree={tree}
      onSelectedFieldChange={handleFieldClick}
      searchInputValue={inputValue}
    />
  )

  return (
    <SpaceVertical align="stretch">
      <FieldSearch
        disabled={disabled}
        disabledText={disabledText}
        fieldSearchInputId={fieldSearchInputId}
        height={inputHeight}
        label={label}
        onChange={onChange}
        onClick={handleClick}
        placeholder={placeholder}
        ref={setInputElement}
        value={inputValue}
        width="100%"
        isOpen={isOpen}
        withDropdown={withDropdown}
        showSelectedSection={showSelectedSection}
      />
      {withDropdown ? (
        <TreeSelectPopup
          anchorElement={inputElement}
          isOpen={isOpen}
          setOpen={setOpen}
        >
          {innerTree}
        </TreeSelectPopup>
      ) : (
        <Box overflow="auto" height={treeHeight}>
          {innerTree}
        </Box>
      )}
    </SpaceVertical>
  )
}
