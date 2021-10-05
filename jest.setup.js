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

import { format } from 'util'
import { setGlobalConfig } from '@storybook/testing-react'
import * as globalStorybookConfig from './apps/storybook/.storybook/preview'

require('@testing-library/jest-dom/extend-expect')
require('jest-styled-components')

const observeMock = function (cb, config) {
  this.observeCallback = cb
  this.observeConfig = config
  this.disconnect = jest.fn()
  this.observe = jest.fn()
}

const globalAny = global
globalAny.IntersectionObserver = observeMock

// js-dom doesn't do scrollIntoView
Element.prototype.scrollIntoView = jest.fn()

// js-dom doesn't do requestAnimationFrame
globalAny.requestAnimationFrame = cb => setTimeout(() => cb(), 0)

/**
 * Throw a hard-error if an underlying library (e.g.: React) is throwing console.error
 * Inspired by: https://github.com/facebook/jest/issues/6121#issuecomment-529591574
 */
const error = global.console.error

global.console.error = function (...args) {
  error(...args)
  throw new Error(format(...args))
}

setGlobalConfig(globalStorybookConfig)

beforeAll(() => {
  jest.resetAllMocks()
})
