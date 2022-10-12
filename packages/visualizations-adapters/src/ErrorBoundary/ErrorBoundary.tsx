/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import React, { Component } from 'react'
import type { ReactNode, ErrorInfo } from 'react'
import type { IError } from '@looker/sdk'
import { Heading } from '@looker/components'
import type { SDKRecord, Fields, CAll } from '@looker/visualizations-adapters'
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
    this.setState((state) => ({ ...state, errorMessage, stackTrace }))
  }

  render() {
    if (this.state.hasError) {
      const { errorMessage, stackTrace } = this.state
      return (
        <>
          <Heading>
            <Translation ns="ErrorBoundary">
              {(t) => {
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
