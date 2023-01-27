/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ReactNode } from 'react'
import React, { cloneElement, isValidElement, useContext, useMemo } from 'react'
import { Flex } from '../../../../Layout'
import {
  ComboboxContext,
  ComboboxMultiContext,
  OptionContext,
} from '../ComboboxContext'
import type {
  ComboboxOptionIndicatorFunction,
  ComboboxOptionIndicatorProps,
} from '../types'

function isIndicatorFunction(
  children: ReactNode | ComboboxOptionIndicatorFunction
): children is ComboboxOptionIndicatorFunction {
  return typeof children === 'function'
}

export const ComboboxOptionIndicator = ({
  children,
  indicator: propsIndicator,
  isActive,
  isSelected,
  isMulti,
  ...props
}: ComboboxOptionIndicatorProps) => {
  const context = useContext(ComboboxContext)
  const contextMulti = useContext(ComboboxMultiContext)
  const contextToUse = isMulti ? contextMulti : context
  const { indicatorPropRef } = contextToUse
  const indicatorToUse =
    propsIndicator !== undefined
      ? propsIndicator
      : indicatorPropRef && indicatorPropRef.current

  const option = useContext(OptionContext) || { value: '' }
  const { label, value } = option

  const indicator = useMemo(() => {
    const indicatorProps = { isActive, isSelected, label, value }
    if (isValidElement(indicatorToUse)) {
      return cloneElement(indicatorToUse, indicatorProps)
    } else if (isIndicatorFunction(indicatorToUse)) {
      return indicatorToUse(indicatorProps)
    }
    return indicatorToUse
  }, [indicatorToUse, isActive, isSelected, value, label])

  const content = indicator === undefined ? children : indicator

  return (
    <Flex
      width={content ? 'small' : 'none'}
      alignItems="flex-start"
      flexShrink={0}
      justifyContent="center"
      mr="xsmall"
      {...props}
    >
      {content}
    </Flex>
  )
}
