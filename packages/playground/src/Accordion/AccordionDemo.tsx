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
  AccordionLabel,
  Box,
  Text,
  Icon,
} from '@looker/components'

export const AccordionDemo = () => {
  const [isOpen, setIsOpen] = useState(true)

  const vanillaAccordion = (
    <Accordion defaultOpen>
      <AccordionLabel>Hello World</AccordionLabel>
      <AccordionContent>
        <Text color="palette.red500">I have content</Text>
      </AccordionContent>
    </Accordion>
  )

  const spicyAccordion = (
    <Accordion
      isOpen={isOpen}
      toggleOpen={setIsOpen}
      onOpen={() => alert('Opening doors')}
      onClose={() => alert('Closing doors')}
    >
      <AccordionLabel arrowLeft>
        <div
          style={{
            alignItems: 'center',
            display: 'grid',
            gridGap: '0.5rem',
            gridTemplateColumns: '1.25rem 1fr 1.25rem',
            width: '100%',
          }}
        >
          <Icon color="palette.yellow600" name="Warning" size={20} />
          <Text color="palette.yellow600">Hello World</Text>
          <Icon
            color="palette.charcoal500"
            name="CircleQuestionOutline"
            size={20}
          />
        </div>
      </AccordionLabel>
      <AccordionContent>
        <Text color="palette.red500">More content!</Text>
      </AccordionContent>
    </Accordion>
  )

  return (
    <Box width="300px">
      {vanillaAccordion}
      {spicyAccordion}
    </Box>
  )
}
