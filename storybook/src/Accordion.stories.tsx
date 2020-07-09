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
  Paragraph,
  List,
  ListItem,
  Icon,
  Fieldset,
  FieldText,
  Space,
  Badge,
  SpaceVertical,
} from '@looker/components'

export const All = () => (
  <SpaceVertical>
    <Basic />
    <Controlled />
    <DefaultOpen />
    <Nested />
    <ApiExplorer />
  </SpaceVertical>
)

export default {
  component: All,
  title: 'Accordion',
}

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

export const Basic = () => (
  <Accordion px="large">
    <AccordionDisclosure> See more...</AccordionDisclosure>
    <AccordionContent>{lorem}</AccordionContent>
  </Accordion>
)

export const DefaultOpen = () => (
  <Accordion defaultOpen>
    <AccordionDisclosure>Advanced Options</AccordionDisclosure>
    <AccordionContent>
      <Fieldset>
        <Fieldset inline>
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

export const CustomizedIndicator = () => (
  <Accordion
    indicatorSize="xxlarge"
    indicatorPosition="left"
    indicatorIcons={{ close: 'CaretLeft', open: 'CaretDown' }}
  >
    <AccordionDisclosure> See more...</AccordionDisclosure>
    <AccordionContent>{lorem}</AccordionContent>
  </Accordion>
)

export const Controlled = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Accordion
      indicatorPosition="left"
      isOpen={isOpen}
      toggleOpen={setIsOpen}
      onOpen={() => alert('Opening doors')}
      onClose={() => alert('Closing doors')}
    >
      <AccordionDisclosure>
        <Space between>
          Some Information
          <Icon color="text4" name="CircleQuestionOutline" size={20} />
        </Space>
      </AccordionDisclosure>
      <AccordionContent>
        {' '}
        <Paragraph>{lorem}</Paragraph>
      </AccordionContent>
    </Accordion>
  )
}

export const Nested = () => (
  <Accordion m="xlarge" pl="xlarge" indicatorPosition="left" defaultOpen>
    <AccordionDisclosure>Hello World</AccordionDisclosure>
    <AccordionContent>
      <List>
        <ListItem>Cheddar</ListItem>
        <ListItem>Cheddar</ListItem>
        <ListItem>Cheddar</ListItem>
        <ListItem>
          <Accordion indicatorPosition="left" defaultOpen>
            <AccordionDisclosure>Hello World</AccordionDisclosure>
            <AccordionContent>
              <List>
                <ListItem>Cheddar</ListItem>
                <ListItem>Cheddar</ListItem>
                <ListItem>Cheddar</ListItem>
                <ListItem>
                  <Accordion indicatorPosition="left" defaultOpen>
                    <AccordionDisclosure>Hello World</AccordionDisclosure>
                    <AccordionContent>
                      <List>
                        <ListItem>Cheddar</ListItem>
                        <ListItem>Cheddar</ListItem>
                        <ListItem>Cheddar</ListItem>
                        <ListItem>
                          <Accordion indicatorPosition="left" defaultOpen>
                            <AccordionDisclosure>
                              Hello World
                            </AccordionDisclosure>
                            <AccordionContent>
                              <List>
                                <ListItem>Cheddar</ListItem>
                                <ListItem>Cheddar</ListItem>
                                <ListItem>Cheddar</ListItem>
                                <ListItem>Cheddar</ListItem>
                              </List>
                            </AccordionContent>
                          </Accordion>
                        </ListItem>
                      </List>
                    </AccordionContent>
                  </Accordion>
                </ListItem>
              </List>
            </AccordionContent>
          </Accordion>
        </ListItem>
      </List>
    </AccordionContent>
  </Accordion>
)

export const ApiExplorer = () => (
  <Accordion
    defaultOpen
    indicatorIcons={{ close: 'CaretLeft', open: 'CaretDown' }}
  >
    <AccordionDisclosure>Hello World</AccordionDisclosure>
    <AccordionContent>
      <Box borderLeft="1px dotted" borderColor="ui2" ml="xsmall" pl="small">
        <List fontSize="small">
          <ListItem>
            <Badge intent="inform">GET</Badge> Search Favorites
          </ListItem>
          <ListItem>
            <Badge intent="inform">GET</Badge> Get Favorites
          </ListItem>
          <ListItem>
            <Badge intent="critical">GET</Badge> Delete Favorite
          </ListItem>
          <ListItem>
            <Badge intent="positive">GET</Badge> Create Favorite
          </ListItem>
          <ListItem>
            <Badge intent="warn">POST</Badge> Update Content
          </ListItem>
        </List>
      </Box>
    </AccordionContent>
  </Accordion>
)
