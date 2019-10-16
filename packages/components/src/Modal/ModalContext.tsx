import React from 'react'

export interface ModalContextProps {
  closeModal?: (event?: React.SyntheticEvent, doCallbacks?: boolean) => void
}

const context: ModalContextProps = {}

export const ModalContext = React.createContext(context)
