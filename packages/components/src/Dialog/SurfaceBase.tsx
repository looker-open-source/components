/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { reset, omitStyledProps } from '@looker/design-tokens'
import React, { useContext, useRef } from 'react'
import styled, { css } from 'styled-components'
import { useGlobalHotkeys } from '../utils'
import { DialogContext } from './DialogContext'

type SurfaceLayoutProps = {
  className?: string
  id?: string
}

const SurfaceLayout = (props: SurfaceLayoutProps) => {
  const { closeModal } = useContext(DialogContext)

  const ref = useRef<null | HTMLDivElement>(null)

  useGlobalHotkeys('Escape', closeModal, ref)

  return (
    <div
      data-overlay-surface={true}
      ref={ref}
      tabIndex={-1}
      {...omitStyledProps(props)}
    />
  )
}

export const surfaceTransition = () => css`
  ${({ theme }) => `${theme.transitions.moderate}ms ${theme.easings.ease}`}
`

export const SurfaceBase = styled(SurfaceLayout).attrs(() => ({
  'aria-modal': true,
  role: 'dialog',
}))`
  ${reset}

  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`
