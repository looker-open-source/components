import { createContext, SyntheticEvent } from 'react'

export interface ModalContextProps {
  closeModal?: (event?: SyntheticEvent, doCallbacks?: boolean) => void
}

const context: ModalContextProps = {}

export const ModalContext = createContext(context)
