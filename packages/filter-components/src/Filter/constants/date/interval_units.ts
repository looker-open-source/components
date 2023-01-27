/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { useDateUnits, useFiscalDateUnits } from './date_units'

export const useFiscalIntervalUnits = () => {
  const dateUnits = useDateUnits()
  const fiscalDateUnits = useFiscalDateUnits()
  return [...dateUnits, ...fiscalDateUnits]
}
