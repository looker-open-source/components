/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useContext } from 'react'
import type { ReactNode } from 'react'
import styled from 'styled-components'
import { TreeContext } from './TreeContext'
import { generateIndent } from './utils'

export interface TreeBranchProps {
  className?: string
  children?: ReactNode
}

const TreeBranchLayout = ({ children, className }: TreeBranchProps) => {
  const { depth, density } = useContext(TreeContext)
  return (
    <TreeBranchIndentSpacer
      className={className}
      /**
       * Child items should be +1 depth more than their parents so that their label
       * aligns with the label of the parent as opposed to the indicator
       */
      depth={depth + 1}
      density={density}
    >
      {children}
    </TreeBranchIndentSpacer>
  )
}

const TreeBranchIndentSpacer = styled.div`
  ${generateIndent}
`

export const TreeBranch = styled(TreeBranchLayout)``
