/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { ModalLayoutProps } from '../../Modal/ModalLayout'
import { ModalLoading } from '../../Modal/ModalLayout'
import { PopoverContent } from './PopoverContent'
import type { PopoverFooterProps } from './PopoverFooter'
import { PopoverFooter } from './PopoverFooter'
import { PopoverHeader } from './PopoverHeader'

export type PopoverLayoutProps = ModalLayoutProps &
  Pick<PopoverFooterProps, 'closeButton'> & {
    /**
     * Header will not be visually available but it will still properly announced in screen reader scenarios
     * @default false
     */
    hideHeader?: boolean
  }

export const PopoverLayout = ({
  children,
  closeButton,
  footer = true,
  header,
  hideHeader = false,
  isLoading,
}: PopoverLayoutProps) => {
  const internalFooter = typeof footer === 'boolean' ? null : footer

  return (
    <>
      {header && (
        <PopoverHeader hidden={hideHeader} hideClose={!!footer}>
          {header}
        </PopoverHeader>
      )}
      <PopoverContent hasFooter={!!footer} hasHeader={!!header}>
        {isLoading ? <ModalLoading /> : children}
      </PopoverContent>
      {footer && (
        <PopoverFooter closeButton={closeButton}>
          {internalFooter}
        </PopoverFooter>
      )}
    </>
  )
}
