/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
