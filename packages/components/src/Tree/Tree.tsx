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

import styled, { css } from 'styled-components'
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
import { TreeGroup } from './TreeGroup'

export interface TreeProps extends Omit<AccordionProps, 'className'> {
  /**
   * If true, vertical lines will extend from the Tree indicator (and all sub-Trees' indicators)
   * @default false
   */
  border?: boolean
  /**
   * Supplementary element that appears right of the Tree's label
   */
  detail?: ReactNode
  /**
   * If true, clicking on the detail element will not trigger the Tree's other click handlers
   * @default false
   */
  detailStopPropagation?: boolean
  /**
   * The font weight of the Tree's text
   * @default 'semiBold'
   */
  fontWeight?: FontWeights
  /**
   * Icon element that appears between the Tree indicator and the Tree label
   */
  icon?: IconNames
  /**
   * Text label of the Tree
   * Note: This is a required prop
   */
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
  detailStopPropagation,
  fontWeight,
  icon,
  label,
  ...restProps
}) => {
  return (
    <Accordion {...indicatorProps} {...restProps}>
      <AccordionDisclosure fontWeight={fontWeight}>
        <TreeItem
          detail={detail}
          detailStopPropagation={detailStopPropagation}
          gapSize="xsmall"
          icon={icon}
        >
          {label}
        </TreeItem>
      </AccordionDisclosure>
      <AccordionContent>{children}</AccordionContent>
    </Accordion>
  )
}

const centeredVerticalBorder = css`
  ${({ theme: { space, colors } }) => css`
    border-left: 1px solid ${colors.ui2};
    /* Margin is used to center the optional border line */
    margin-left: calc(
      ${space[indicatorProps.indicatorSize as SpacingSizes]} / 2 +
        ${space.xxsmall}
    );
    padding-left: calc(
      (${space[indicatorProps.indicatorSize as SpacingSizes]} / 2) +
        ${space[indicatorProps.indicatorGap as SpacingSizes]} - ${space.xxsmall}
    );
  `}
`

export const Tree = styled(TreeLayout)`
  ${AccordionDisclosure} {
    height: 25px;
    padding: ${({ theme }) => theme.space.xxsmall};
  }

  ${AccordionContent} {
    ${({ border }) => border && centeredVerticalBorder}
    padding-left: ${({ theme: { space } }) =>
      `calc(${space[indicatorProps.indicatorSize as SpacingSizes]} + ${
        space[indicatorProps.indicatorGap as SpacingSizes]
      })`}
  }

  ${TreeItem} {
    font-size: ${({ theme }) => theme.space.small};
    outline: none;
  }

  ${/* sc-selector */ AccordionContent} > ${/* sc-selector */ TreeItem} {
    border: 1px solid transparent;
    height: 25px;
    padding: ${({ theme }) => theme.space.xxsmall};
  }

  ${/* sc-selector */ TreeGroup} > ${/* sc-selector */ TreeItem} {
    border: 1px solid ${({ theme }) => theme.colors.palette.transparent};
    height: 25px;
    padding: ${({ theme }) => theme.space.xxsmall};
  }

  ${/* sc-selector */ AccordionContent} > ${/* sc-selector */ TreeItem}:focus {
    border-color: ${({ theme }) => theme.colors.keyFocus};
  }

  ${/* sc-selector */ TreeGroup} > ${/* sc-selector */ TreeItem}:focus {
    border-color: ${({ theme }) => theme.colors.palette.purple300};
  }
`
