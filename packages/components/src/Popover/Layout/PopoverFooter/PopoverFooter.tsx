/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ReactNode, ReactElement } from 'react'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { DialogContext } from '../../../Dialog/DialogContext'
import type { ModalFooterProps } from '../../../Modal/ModalFooter/ModalFooter'
import { ModalFooter } from '../../../Modal/ModalFooter/ModalFooter'
import { ButtonTransparent } from '../../../Button'
import { useTranslation } from '../../../utils'

export interface PopoverFooterProps
  extends Omit<ModalFooterProps, 'secondary' | 'children'> {
  children?: ReactNode
  /**
   * Button to close popover
   * I18n recommended: content that is user visible should be treated for i18n
   * @default Done
   */
  closeButton?: ReactElement | string
}

const PopoverFooterLayout = ({
  children,
  closeButton,
  ...props
}: PopoverFooterProps) => {
  const { closeModal } = useContext(DialogContext)
  const { t } = useTranslation('PopoverFooter')
  closeButton = closeButton || t('Done')

  return (
    <ModalFooter pl="large" pr="medium" py="xsmall" {...props}>
      {typeof closeButton === 'string' ? (
        <ButtonTransparent size="small" onClick={closeModal}>
          {closeButton}
        </ButtonTransparent>
      ) : (
        closeButton
      )}
      {children}
    </ModalFooter>
  )
}

export const PopoverFooter = styled(PopoverFooterLayout)<PopoverFooterProps>``
