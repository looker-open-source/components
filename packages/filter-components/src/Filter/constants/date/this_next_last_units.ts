/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Option } from '../../types/option'
import { useDateUnits, useFiscalDateUnits } from './date_units'

/** returns the singular value from Option */
const singularizeLabel = (option: Option): Option => ({
  ...option,
  label: option.singular || option.label,
})

export const useLastUnits = () => {
  const dateUnits = useDateUnits()
  return dateUnits.map(singularizeLabel)
}

export const useThisNextUnits = () => {
  const lastUnits = useLastUnits()
  return lastUnits.filter(
    (option: Option) =>
      ['second', 'minute', 'hour'].indexOf(option.value as string) === -1
  )
}

export const useFiscalLastUnits = () => {
  const dateUnits = useDateUnits()
  const fiscalDateUnits = useFiscalDateUnits()
  return [...dateUnits, ...fiscalDateUnits].map(singularizeLabel)
}

export const useFiscalThisNextUnits = () => {
  const thisNextUnits = useThisNextUnits()
  const fiscalDateUnits = useFiscalDateUnits()
  return [...thisNextUnits, ...fiscalDateUnits].map(singularizeLabel)
}
