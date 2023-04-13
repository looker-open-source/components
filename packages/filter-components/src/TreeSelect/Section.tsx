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
import type { BoxProps, IconProps } from '@looker/components'
import { Box, Flex, Icon, Text } from '@looker/components'
import { ArrowDropDown } from '@styled-icons/material/ArrowDropDown'
import React from 'react'
import styled from 'styled-components'

interface SectionProps extends Omit<BoxProps, 'title' | 'onClick'> {
  title: React.ReactNode
  isOpen: boolean
  id: string
  detail?: string
  onClick: (updateNode: { id: string; isOpen: boolean }) => void
}

interface TreeArrowIconProps extends IconProps {
  open: boolean
}

export const SectionFactory = ({
  title,
  isOpen,
  onClick,
  id,
  detail,
  ...props
}: SectionProps) => {
  const handleClick = () =>
    onClick({
      isOpen: !isOpen,
      id,
    })

  return (
    <Box {...props}>
      <SectionLabel role="button" onClick={handleClick} alignItems="center">
        <TreeArrowIcon open={isOpen} icon={<ArrowDropDown />} />
        <SectionLabelName ml="xxsmall" fontSize="small">
          {title}
        </SectionLabelName>
        {detail && (
          <SectionLabelDetail ml="auto" fontSize="xsmall">
            {detail}
          </SectionLabelDetail>
        )}
      </SectionLabel>
      {isOpen ? (
        <SectionContent pl="medium">{props.children}</SectionContent>
      ) : (
        <></>
      )}
    </Box>
  )
}

export const SectionLabelName = styled(Text)`
  color: ${({ theme }) => theme.colors.text5};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`
export const SectionLabelDetail = styled(Text)`
  color: ${({ theme }) => theme.colors.text2};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`
const TreeArrowIcon = styled(Icon)<TreeArrowIconProps>`
  color: ${({ theme }) => theme.colors.text1};
  transform: ${({ open }) => (open ? 'rotate(0deg)' : 'rotate(-90deg)')};
  transition: transform 90ms ease-out;
`

export const SectionContent = styled(Box)``

export const SectionLabel = styled(Flex)`
  cursor: pointer;
  padding: 0 ${({ theme }) => theme.space.small};
  background: ${({ theme }) => theme.colors.background};
  height: 36px;
  top: 0;
  z-index: 1; /* Fixes bleed through of transformed caret icon */

  &:hover {
    background: ${({ theme }) => theme.colors.ui1};
  }

  /* highlighting for search results */
  b {
    color: ${({ disabled, theme }) =>
      disabled ? undefined : theme.colors.text5};
    text-decoration: ${({ disabled }) => (disabled ? undefined : 'underline')};
    font-weight: ${({ disabled, theme }) =>
      disabled ? undefined : theme.fontWeights.semiBold};
  }
`

export const Section = styled(SectionFactory)`
  color: ${({ theme }) => theme.colors.text3};
  ${SectionContent} {
    ${SectionLabel} {
      height: 30px;
      padding: 0 ${({ theme }) => theme.space.xxsmall};
      position: initial;
    }

    ${SectionLabelName} {
      font-weight: ${({ theme }) => theme.fontWeights.normal};
    }
  }
`
