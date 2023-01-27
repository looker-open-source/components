/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'

export const AccordionLabel = styled.div`
  flex: 1;
  /*
    min-width prevent truncate text from growing AccordionLabel past the disclosure's 100% width
   */
  min-width: 0;
`
