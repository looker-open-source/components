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
import {
  Box,
  Flex,
  Icon,
  IconButton,
  InputText,
  Label,
  Text,
} from '@looker/components'
import { ExpandMore } from '@styled-icons/material-rounded/ExpandMore'
import { Search } from '@styled-icons/material-outlined/Search'
import React from 'react'
import styled from 'styled-components'

interface FieldSearchProps {
  disabled?: boolean
  fieldSearchInputId?: string
  width?: string | number
  height?: string | number
  placeholder?: string
  label?: string
  onClick?: (event: React.MouseEvent) => void
  value?: string
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent) => void
  isOpen?: boolean
  withDropdown?: boolean
  showSelectedSection?: boolean
  disabledText?: React.ReactNode
}

type Ref = React.Ref<HTMLDivElement>

export const FieldSearch = React.forwardRef(
  (
    {
      disabled,
      fieldSearchInputId,
      width,
      height,
      label,
      onClick,
      value,
      onChange,
      onFocus,
      placeholder,
      isOpen,
      withDropdown,
      showSelectedSection,
      disabledText,
    }: FieldSearchProps,
    ref: Ref
  ) => {
    const [section, field] = value?.split('•') || []

    return (
      <Flex
        position="relative"
        flexDirection="column"
        width={width}
        height={height}
        overflow="hidden"
        flexShrink={0}
      >
        {label && (
          <SearchLabel htmlFor={fieldSearchInputId}>{label}</SearchLabel>
        )}
        <SearchInput
          disabled={disabled}
          ref={ref}
          flexWrap="nowrap"
          alignItems="center"
          onClick={onClick}
          px="small"
        >
          <Icon icon={<Search />} size={24} />
          {disabledText ? (
            <TextContainer px="small">{disabledText}</TextContainer>
          ) : (
            <InnerInputText
              id={label ? fieldSearchInputId : undefined}
              display={
                // eslint-disable-next-line no-nested-ternary
                showSelectedSection && withDropdown
                  ? isOpen || value === ''
                    ? 'block'
                    : 'none'
                  : 'block'
              }
              width="100%"
              height="auto"
              value={value}
              onChange={onChange}
              onFocus={onFocus}
              placeholder={placeholder}
              autoComplete="off"
            />
          )}
          {!disabledText &&
            showSelectedSection &&
            withDropdown &&
            !isOpen &&
            value && (
              <TextContainer px="xsmall">
                <SectionText>{section}</SectionText>
                <DividerText>•</DividerText>
                <FieldText>{field}</FieldText>
              </TextContainer>
            )}
          <IconButton
            tooltipDisabled={true}
            label="View fields"
            icon={<ExpandMore />}
            size="small"
            outline={false}
            p="none"
            mr="xsmall"
          />
        </SearchInput>
      </Flex>
    )
  }
)

const InnerInputText = styled(InputText)`
  &:focus,
  &:focus-within {
    box-shadow: none;
  }
`

const TextContainer = styled(Box)`
  cursor: text;
  display: table;
  font-size: ${({ theme }) => theme.fontSizes.small};
  overflow: hidden;
  width: 100%;
  table-layout: fixed;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const SectionText = styled(Text)`
  color: ${({ theme }) => theme.colors.text4};
  font-size: ${({ theme }) => theme.fontSizes.small};
`

const DividerText = styled(Text)`
  color: ${({ theme }) => theme.colors.text4};
  font-size: ${({ theme }) => theme.fontSizes.small};
`

const FieldText = styled(Text)`
  color: ${({ theme }) => theme.colors.text4};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`

const SearchLabel = styled(Label)`
  color: ${({ theme }) => theme.colors.text2};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  margin-bottom: ${({ theme: { space } }) => space.xsmall};
`

const SearchInput = styled(Flex)`
  border: solid 1px ${({ theme }) => theme.colors.ui2};
  border-radius: ${({ theme }) => theme.radii.medium};
  height: 48px;
  padding-right: 0;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.keyFocus};
    box-shadow: 0 0 1px ${({ theme }) => theme.colors.keyFocus};
  }

  &[disabled] {
    background-color: ${({ theme: { colors } }) => colors.ui1};
    border-color: ${({ theme: { colors } }) => colors.ui2};
    * {
      color: ${({ theme: { colors } }) => colors.text1};
      pointer-events: none;
    }
  }

  ${InputText} {
    border: none;
    font-size: ${({ theme }) => theme.fontSizes.small};
    outline: none;

    :not(:focus) {
      color: ${({ theme }) => theme.colors.text4};
    }
  }

  ${IconButton} {
    color: ${({ theme }) => theme.colors.text1};
    margin-right: 6px;

    &:focus,
    &:hover {
      color: ${({ theme }) => theme.colors.text5};
      background-color: transparent;
      border-color: transparent;
    }
  }
`
