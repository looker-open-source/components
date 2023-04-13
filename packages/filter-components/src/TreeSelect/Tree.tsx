/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Box, Spinner } from '@looker/components'
import React from 'react'
import styled from 'styled-components'
import { Section, SectionContent } from './Section'
import type { TreeModel } from './types'
import { generateSections } from './utils/generate_sections'

export type TreeProps = {
  tree?: TreeModel[]
  onSectionClick: (updateNode: { id: string; isOpen: boolean }) => void
  onFieldClick: (label: string, payload?: any) => void
}
export const TreeFactory = ({
  tree,
  onSectionClick,
  onFieldClick,
  ...props
}: TreeProps) => (
  <Box {...props}>
    {tree ? (
      generateSections(tree, 0, onSectionClick, onFieldClick)
    ) : (
      <Spinner mx="auto" />
    )}
  </Box>
)

export const Tree = styled(TreeFactory)`
  ${SectionContent} ${Section} {
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    padding: 0;
  }
  & > ${Section} + ${Section} {
    border-top: solid 1px ${({ theme }) => theme.colors.ui2};
  }
`
