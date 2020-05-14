/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionDisclosure,
  Box,
  Grid,
  Text,
  Icon,
  Fieldset,
  FieldText,
} from '@looker/components'

const lorem = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`
const placeholder = (
  <Box p="medium" bg="palette.blue100" color="palette.blue600">
    {lorem}
  </Box>
)
const visibleLabel = (
  <Box
    alignItems="center"
    display="grid"
    width="100%"
    bg="palette.yellow100"
    style={{
      gridGap: '.5rem',
      gridTemplateColumns: '1.25rem 1fr 1.25rem',
    }}
  >
    <Icon color="palette.yellow600" name="Warning" size={20} />
    <Text color="palette.yellow600">Hello World</Text>
    <Icon color="palette.charcoal500" name="CircleQuestionOutline" size={20} />
  </Box>
)

export const AccordionDemo = () => {
  const [isOpen, setIsOpen] = useState(true)

  const spicyAccordion = (
    <Accordion
      indicatorPosition="left"
      isOpen={isOpen}
      toggleOpen={setIsOpen}
      onOpen={() => alert('Opening doors')}
      onClose={() => alert('Closing doors')}
    >
      <AccordionDisclosure>{visibleLabel}</AccordionDisclosure>
      <AccordionContent>{placeholder}</AccordionContent>
    </Accordion>
  )

  const spaceTest = (
    <Accordion indicatorPosition="left" px="xxxlarge">
      <AccordionDisclosure>Advanced Options</AccordionDisclosure>
      <AccordionContent>
        <Fieldset>
          <Fieldset inline legend="Customer">
            <FieldText label="First name" />
            <FieldText label="Middle" />
            <FieldText label="Last name" />
          </Fieldset>
          <FieldText label="Email" />
          <FieldText label="Phone" />
        </Fieldset>
      </AccordionContent>
    </Accordion>
  )

  return (
    <Grid m="xxlarge">
      <Accordion indicatorPosition="left" defaultOpen>
        <AccordionDisclosure>Hello World</AccordionDisclosure>
        <AccordionContent>{placeholder} </AccordionContent>
      </Accordion>
      <Accordion defaultOpen>
        <AccordionDisclosure>Hello World</AccordionDisclosure>
        <AccordionContent>{placeholder} </AccordionContent>
      </Accordion>

      <Accordion indicatorPosition="left" defaultOpen>
        <AccordionDisclosure>{visibleLabel}</AccordionDisclosure>
        <AccordionContent>{placeholder} </AccordionContent>
      </Accordion>
      <Accordion defaultOpen>
        <AccordionDisclosure>{visibleLabel}</AccordionDisclosure>
        <AccordionContent>{placeholder} </AccordionContent>
      </Accordion>

      {spicyAccordion}
      {spaceTest}
    </Grid>
  )
}
