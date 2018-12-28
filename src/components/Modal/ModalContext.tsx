import * as React from 'react'

export interface ModalContextProps {
  close?: () => void
}

const context: ModalContextProps = {}

export const ModalContext = React.createContext(context)
