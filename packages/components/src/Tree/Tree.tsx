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

export interface TreeProps extends Omit<AccordionProps, 'className'> {
  detail?: ReactNode
  detailStopPropagation?: boolean
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
  detailStopPropagation,
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
          detailStopPropagation={detailStopPropagation}
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

const centeredVerticalBorder = css`
  ${({ theme: { space, colors } }) => css`
    border-left: 1px solid ${colors.palette.charcoal200};
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
    padding: ${({ theme }) => theme.space.xxsmall};
  }

  ${/* sc-selector */ AccordionContent} > ${/* sc-selector */ TreeItem} {
    padding: ${({ theme }) => theme.space.xxsmall};
  }

  ${AccordionContent} {
    ${({ border }) => border && centeredVerticalBorder}
  }
`
