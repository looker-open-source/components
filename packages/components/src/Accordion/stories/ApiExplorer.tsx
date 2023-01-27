/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { ChevronLeft, ExpandMore } from '@styled-icons/material-rounded'
import styled from 'styled-components'
import {
  Accordion,
  AccordionDisclosure,
  Badge,
  Box2,
  UnorderedList,
  Text,
} from '../..'

export default function ApiExplorer() {
  const content = (
    <Box2 borderLeft ml="xsmall" pl="small">
      <UnorderedList fontSize="small">
        <li>
          <Badge intent="inform">GET</Badge> Search Favorites
        </li>
        <li>
          <Badge intent="inform">GET</Badge> Get Favorites
        </li>
        <li>
          <Badge intent="critical">GET</Badge> Delete Favorite
        </li>
        <li>
          <Badge intent="positive">GET</Badge> Create Favorite
        </li>
        <li>
          <Badge intent="warn">POST</Badge> Update Content
        </li>
      </UnorderedList>
    </Box2>
  )

  return (
    <Customized>
      <Accordion
        indicatorIcons={{ close: <ChevronLeft />, open: <ExpandMore /> }}
        content={content}
      >
        First Group
      </Accordion>
      <Accordion
        defaultOpen
        indicatorIcons={{ close: <ChevronLeft />, open: <ExpandMore /> }}
        content={content}
      >
        <Text color="red">Second Group</Text>
      </Accordion>
    </Customized>
  )
}

const Customized = styled.div`
  ${AccordionDisclosure}[aria-expanded='true'] {
    color: ${({ theme }) => theme.colors.key};
  }
`
