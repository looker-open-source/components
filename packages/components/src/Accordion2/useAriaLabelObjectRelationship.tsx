/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { useID } from '../utils'

/**
 * Generates a tuple with appropriate DOM props to create an ARIA label
 * relationship based on the ID (ID will be dynamically generated if not supplied)
 *
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute
 *
 * First portion of tuple should be spread on the label
 * Second should be spread on the controlled element
 *
 * @returns [ label, labeled ]
 */
export const useAriaLabelObjectRelationship = (id?: string) => {
  id = useID(id)
  const labelID = `${id}-label`
  const objectID = `${id}-object`

  return [
    {
      'aria-controls': objectID,
      id: labelID,
    },
    {
      'aria-labelledby': labelID,
      id,
    },
  ]
}
