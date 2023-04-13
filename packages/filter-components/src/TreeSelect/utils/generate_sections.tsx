/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Field } from '../Field'
import { Section } from '../Section'
import type { TreeModel } from '../types'

/**
 * This function takes the raw tree data and returns a React Tree component
 * with it, composed of Section and Field subcomponents.
 * @param trees
 * @param depth
 * @param onSectionClick
 * @param onFieldClick
 */
export const generateSections = (
  trees: TreeModel[],
  depth: number,
  onSectionClick: (updateNode: { id: string; isOpen: boolean }) => void,
  onFieldClick: (label: string, payload?: any) => void
) =>
  trees.map(tree =>
    // eslint-disable-next-line no-nested-ternary
    tree.children ? (
      tree.hide ? null : (
        <Section
          key={tree.id}
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          id={tree.id!}
          detail={tree.detail}
          isOpen={!!tree.isOpen}
          onClick={onSectionClick}
          title={tree.label}
        >
          {generateSections(
            tree.children,
            depth + 1,
            onSectionClick,
            onFieldClick
          )}
        </Section>
      )
    ) : tree.hide ? null : (
      <Field
        key={tree.id}
        isSecondary={tree.isSecondary}
        detail={tree.detail}
        disabled={tree.disabled}
        displayLabel={tree.label}
        label={tree.value}
        payload={tree.payload}
        alignItems="center"
        pl="medium"
        onClick={onFieldClick}
      />
    )
  )
