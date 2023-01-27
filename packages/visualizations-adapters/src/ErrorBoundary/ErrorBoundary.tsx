/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { Component } from 'react'
import type { ReactNode, ErrorInfo } from 'react'
import type { IError } from '@looker/sdk'
import { Heading } from '@looker/components'
import type { SDKRecord, Fields, CAll } from '../types'
import { Translation } from 'react-i18next'
import { Debug } from '../Debug'
import { formatErrorMessage } from '../utils'

interface ErrorBoundaryProps {
  children: ReactNode
  data?: SDKRecord[]
  config?: CAll
  fields?: Fields
}

interface ErrorBoundaryState {
  hasError: boolean
  errorMessage: Error
  stackTrace?: ErrorInfo
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { errorMessage: new Error(''), hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { errorMessage: error, hasError: true }
  }

  componentDidCatch(errorMessage: Error, stackTrace: ErrorInfo) {
    this.setState(state => ({ ...state, errorMessage, stackTrace }))
  }

  render() {
    if (this.state.hasError) {
      const { errorMessage, stackTrace } = this.state
      return (
        <>
          <Heading>
            <Translation ns="ErrorBoundary">
              {t => {
                return t('Something went wrong')
              }}
            </Translation>
          </Heading>
          <Debug
            ok={false}
            error={
              {
                message: formatErrorMessage(errorMessage),
                ...stackTrace,
              } as IError
            }
            {...this.props}
          />
        </>
      )
    }
    return this.props.children
  }
}
