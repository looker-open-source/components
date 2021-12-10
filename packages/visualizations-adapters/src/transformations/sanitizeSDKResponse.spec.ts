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

import {
  mockFields,
  mockSdkConfigResponse,
  mockSdkDataResponse,
} from '../__mocks__'
import { keysToRemove, sanitizeSDKResponse } from './sanitizeSDKResponse'

describe('sanitizeSDKResponse', () => {
  test('removes appropriate properties from config object', () => {
    // ensure that the mock sdk response stays up-to-date to validate the keys we want to remove
    keysToRemove.forEach(key =>
      expect(mockSdkConfigResponse).toHaveProperty(key)
    )

    const transformedConfig = sanitizeSDKResponse({
      config: mockSdkConfigResponse,
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    // ensure the final output has in fact been stripped of unsupported keys
    keysToRemove.forEach(key =>
      expect(transformedConfig).not.toHaveProperty(key)
    )
  })
})
