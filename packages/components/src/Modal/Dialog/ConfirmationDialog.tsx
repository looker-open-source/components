import * as React from 'react'
import { SemanticColor, SemanticColors } from '../../../style'
import { Button } from '../../Button'
import { Heading } from '../../Heading'
import { Paragraph } from '../../Text'
import { ModalContent, ModalFooter, ModalHeader } from '../Layout'
import { ManagedModalProps } from '../Modal'
import { Dialog } from './Dialog'

export type ConfirmationCallback = (close: () => void) => void

export interface ConfirmationProps extends ManagedModalProps {
  /**
   * Cancel button text
   * @default 'Cancel'
   */
  cancelLabel?: string
  /**
   * Defines the color of the confirm button. Can be the string name of a color listed in the color theme, or a color object.
   * @default "primary"
   */
  buttonColor?: keyof SemanticColors | SemanticColor
  /**
   * Confirmation button text
   * @default 'Confirm'
   */
  confirmLabel?: string
  /**
   * Additional information about the action requiring confirmation
   */
  message: string
  /**
   * Callback if user clicks Cancel button or closes the dialog
   */
  onCancel?: ConfirmationCallback
  /**
   * Function called when user clicks to confirm
   * close function is passed as an argument to control when to close the dialog
   */
  onConfirm: ConfirmationCallback
  /**
   * Dialog title text
   */
  title: string
}

export interface ConfirmationDialogProps extends ConfirmationProps {
  /**
   * For triggering close from within the dialog
   */
  close: () => void
  /**
   * Toggling this after mounting will trigger the animation
   * @default false
   */
  isOpen?: boolean
}

export const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  cancelLabel = 'Cancel',
  close,
  confirmLabel = 'Confirm',
  buttonColor = 'primary',
  isOpen = false,
  message,
  onCancel,
  onConfirm,
  title,
  ...props
}) => {
  const confirm = React.useCallback(() => {
    onConfirm(close)
  }, [onConfirm])

  const cancel = React.useCallback(() => {
    if (onCancel) {
      onCancel(close)
    } else {
      close()
    }
  }, [onCancel])

  return (
    <Dialog isOpen={isOpen} onClose={cancel} {...props}>
      <ModalHeader>
        <Heading>{title}</Heading>
      </ModalHeader>
      {message && (
        <ModalContent>
          <Paragraph>{message}</Paragraph>
        </ModalContent>
      )}
      <ModalFooter>
        <Button onClick={confirm} color={buttonColor}>
          {confirmLabel}
        </Button>
        <Button onClick={cancel} variant="transparent">
          {cancelLabel}
        </Button>
      </ModalFooter>
    </Dialog>
  )
}
