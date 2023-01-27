/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Context } from 'react'
import { useContext } from 'react'
import { useSafeLayoutEffect } from '../../../../utils'
import type { ComboboxInputProps, ComboboxMultiInputProps } from '../types'
import type {
  ComboboxContextProps,
  ComboboxMultiContextProps,
} from '../ComboboxContext'

export function useInputPropRefs<
  TProps extends
    | ComboboxInputProps
    | ComboboxMultiInputProps = ComboboxInputProps,
  TContext extends
    | ComboboxContextProps
    | ComboboxMultiContextProps = ComboboxContextProps
>(
  { autoComplete = true, freeInput = false, inputReadOnly = false }: TProps,
  context: Context<TContext>
) {
  const { autoCompletePropRef, freeInputPropRef, inputReadOnlyPropRef } =
    useContext(context)

  useSafeLayoutEffect(() => {
    if (autoCompletePropRef) autoCompletePropRef.current = autoComplete
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoComplete])

  useSafeLayoutEffect(() => {
    if (freeInputPropRef) freeInputPropRef.current = freeInput
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [freeInput])

  useSafeLayoutEffect(() => {
    if (inputReadOnlyPropRef) inputReadOnlyPropRef.current = inputReadOnly
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputReadOnly])
}
