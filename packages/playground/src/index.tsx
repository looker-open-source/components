/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import Select from 'react-select'
import {
  Box,
  ButtonTransparent,
  GlobalStyle,
  Button,
  useScrollLock,
  getModalRoot,
  Flex,
  FlexItem,
  Paragraph,
  ModalContent,
  ModalContext,
  Popover,
  PopoverContent,
  DialogManager,
  Divider,
  ModalHeader,
} from '@looker/components'
import { theme } from '@looker/design-tokens'
import { ThemeProvider } from 'styled-components'

const options = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '10', value: '10' },
  { label: '11', value: '11' },
  { label: '12', value: '12' },
  { label: '13', value: '13' },
  { label: '14', value: '14' },
  { label: '15', value: '15' },
  { label: '16', value: '16' },
  { label: '17', value: '17' },
  { label: '18', value: '18' },
  { label: '19', value: '19' },
  { label: '20', value: '20' },
  { label: '21', value: '21' },
  { label: '22', value: '22' },
  { label: '23', value: '23' },
  { label: '24', value: '24' },
  { label: '25', value: '25' },
  { label: '26', value: '26' },
  { label: '27', value: '27' },
]

const Content: React.FC = () => {
  const { setFocusTrapEnabled } = useContext(ModalContext)
  const handleMenuClose = () => {
    setFocusTrapEnabled && setFocusTrapEnabled(true)
  }

  return (
    <>
      <ModalHeader>A React Select inside a Dialog</ModalHeader>
      <ModalContent width={500}>
        <Flex>
          <FlexItem flex="1">
            <Paragraph>Text</Paragraph>
            <Paragraph>Text</Paragraph>
            <Paragraph>Text</Paragraph>
            <Paragraph>Text</Paragraph>
            <Paragraph>Text</Paragraph>
            <Paragraph>Text</Paragraph>
            <Paragraph>Text</Paragraph>
            <Paragraph>Text</Paragraph>
            <Paragraph>Text</Paragraph>
            <Paragraph>Text</Paragraph>
            <Paragraph>Text</Paragraph>
            <Paragraph>Text</Paragraph>
            <Paragraph>Text</Paragraph>
            <Paragraph>Text</Paragraph>
            <Paragraph>Text</Paragraph>
            <Paragraph>Text</Paragraph>
            <Paragraph>Text</Paragraph>
            <Paragraph>Text</Paragraph>
            <Paragraph>Text</Paragraph>
            <Paragraph>Text</Paragraph>
            <Paragraph>Text</Paragraph>
          </FlexItem>
          <FlexItem>
            <Popover
              pin
              placement="bottom"
              content={
                <PopoverContent>
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                  <ButtonTransparent>Text</ButtonTransparent>
                  <br />
                </PopoverContent>
              }
            >
              {(onClick, ref, className) => (
                <Button onClick={onClick} ref={ref} className={className}>
                  Open Popover
                </Button>
              )}
            </Popover>
          </FlexItem>
          <FlexItem>
            <Paragraph>A React Select:</Paragraph>
            <Select
              options={options}
              menuPortalTarget={getModalRoot()}
              isSearchable={false}
              onMenuClose={handleMenuClose}
            />
          </FlexItem>
        </Flex>
      </ModalContent>
    </>
  )
}

// const PopoverReactSelect = () => {
//   useScrollLock(false, true, getModalRoot())
//   const { closeModal } = useContext(ModalContext)
//   return (
//     <PopoverContent width={300}>
//       <Paragraph>A React Select:</Paragraph>
//       <Select
//         options={options}
//         menuPortalTarget={getModalRoot()}
//         isSearchable={false}
//         captureMenuScroll={false}
//       />
//       <ButtonTransparent mt="medium" onClick={closeModal}>
//         Cancel
//       </ButtonTransparent>
//     </PopoverContent>
//   )
// }
const PopoverInner = () => {
  const { closeModal } = useContext(ModalContext)
  return (
    <PopoverContent width={300}>
      <Paragraph>A React Select:</Paragraph>
      <Popover
        pin
        placement="bottom"
        content={
          <PopoverContent>
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
            <br />
            <ButtonTransparent>Text</ButtonTransparent>
          </PopoverContent>
        }
      >
        {(onClick, ref, className) => (
          <Button onClick={onClick} ref={ref} className={className}>
            Open Popover
          </Button>
        )}
      </Popover>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <Paragraph>Text</Paragraph>
      <ButtonTransparent mt="medium" onClick={closeModal}>
        Cancel
      </ButtonTransparent>
    </PopoverContent>
  )
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Box padding="xlarge">
          <DialogManager content={<Content />}>
            {onClick => <Button onClick={onClick}>Open Modal</Button>}
          </DialogManager>
          <Divider my="large" />
          <Popover pin placement="bottom-start" content={<PopoverInner />}>
            {(onClick, ref, className) => (
              <Button onClick={onClick} ref={ref} className={className}>
                Open Popover
              </Button>
            )}
          </Popover>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
          <Paragraph>Text</Paragraph>
        </Box>
      </>
    </ThemeProvider>
  )
}

/**
 * This is the binding site for the playground. If you want to edit the
 * primary application, do your work in App.tsx instead.
 */
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('container'))
})
