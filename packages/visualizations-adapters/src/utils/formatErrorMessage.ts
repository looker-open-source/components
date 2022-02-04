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

const ERROR_MAP = {
  'Invalid time value':
    'You have invalid values in your date or time dimension. One common fix is to filter out all null values and invalid date or time strings from your dimension.',
}

/**
 * Creates more descriptive error messages (that may or may not include solutions)
 * based on common query errors.
 *
 * @param errorMessage The errorMessage object from the ErrorBoudary component state
 * @returns A formatted error message string
 */
export const formatErrorMessage = (errorMessage: Error) => {
  if (errorMessage.message === 'Invalid time value') {
    return ERROR_MAP['Invalid time value']
  }

  return (errorMessage as Error).toString()
}
