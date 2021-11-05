/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
import { Debug } from '../Debug'
import type { QueryContextProps } from '../Query'
import { formatErrorMessage } from '../utils'

interface ErrorBoundaryProps {
  contextValues: QueryContextProps
  children: ReactNode
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
      const { contextValues, ...restProps } = this.props
      const { errorMessage, stackTrace } = this.state
      const { ok, error, data, config, fields } = contextValues

      return (
        <>
          {/* eslint-disable-next-line i18next/no-literal-string */}
          <Heading>Something went wrong.</Heading>
          <Debug
            ok={ok}
            error={
              {
                ...error,
                message: formatErrorMessage(errorMessage),
                ...stackTrace,
              } as IError
            }
            data={data}
            config={config}
            fields={fields}
            {...restProps}
          />
        </>
      )
    }
    return this.props.children
  }
}
