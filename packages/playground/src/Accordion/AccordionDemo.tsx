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
} from '@looker/components'

export const AccordionDemo = () => {
  const [isOpen, setIsOpen] = useState(true)

  const vanillaAccordion = (
    <Accordion defaultOpen>
      <AccordionLabel>Hello World</AccordionLabel>
      <AccordionContent>
        <div style={{ backgroundColor: 'coral', padding: '10px' }}>Bleh</div>
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
      <AccordionLabel icon="Warning" iconColor="palette.green200" arrowLeft>
        Hello World
      </AccordionLabel>
      <AccordionContent>
        {' '}
        <div style={{ backgroundColor: 'coral', padding: '10px' }}>Bleh</div>
      </AccordionContent>
    </Accordion>
  )

  return (
    <Box width="300px" style={{ backgroundColor: 'lightblue' }}>
      {vanillaAccordion}
      {spicyAccordion}
    </Box>
  )
}
