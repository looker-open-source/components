/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import noop from 'lodash/noop'
import { createContext } from 'react'

const defaultContext = { beforeWidth: 0, setBeforeWidth: noop }
export const InputTextContext = createContext(defaultContext)
