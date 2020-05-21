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

import styled from 'styled-components'
import { FontWeights, SpacingSizes } from '@looker/design-tokens'
import React, { FC, ReactNode } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionDisclosure,
  AccordionProps,
  AccordionIndicatorProps,
} from '../Accordion'
import { IconNames } from '../Icon'
import { TreeItem } from './TreeItem'

export interface TreeProps extends Omit<AccordionProps, 'className'> {
  detail?: ReactNode
  fontWeight?: FontWeights
  border?: boolean
  icon?: IconNames
  iconSize?: SpacingSizes
  label: string
}

const indicatorProps: AccordionIndicatorProps = {
  indicatorGap: 'xxsmall',
  indicatorIcons: { close: 'ArrowRight', open: 'ArrowDown' },
  indicatorPosition: 'left',
  indicatorSize: 'small',
}

const TreeLayout: FC<TreeProps> = ({
  children,
  detail,
  fontWeight,
  icon,
  iconSize,
  label,
  ...restProps
}) => {
  return (
    <Accordion {...indicatorProps} {...restProps}>
      <AccordionDisclosure fontWeight={fontWeight}>
        <TreeItem
          detail={detail}
          gapSize="xsmall"
          icon={icon}
          iconSize={iconSize}
        >
          {label}
        </TreeItem>
      </AccordionDisclosure>
      <AccordionContent>{children}</AccordionContent>
    </Accordion>
  )
}

export const Tree = styled(TreeLayout)`
  /* Padding on <AccordionDisclosure> is removed since the <TreeItem> child of <AccordionDisclosure> has its own padding */
  ${AccordionDisclosure} {
    padding: ${({ theme }) => theme.space.none};
  }

  ${AccordionContent} {
    /* Margin is used to center the optional border line */
    border-left: ${({ border, theme }) =>
      border && `1px solid ${theme.colors.palette.charcoal200}`};
    margin-left: ${({ border, theme }) =>
      border &&
      `calc((${
        theme.space[indicatorProps.indicatorSize as SpacingSizes]
      } + 1px)/2)`};

    ${({ border, theme }) =>
      border &&
      `padding-left: calc(${
        theme.space[indicatorProps.indicatorSize as SpacingSizes]
      }
  + ${theme.space[indicatorProps.indicatorGap as SpacingSizes]} - (${
        theme.space[indicatorProps.indicatorSize as SpacingSizes]
      } + 1px)/2)`};
  }
`
