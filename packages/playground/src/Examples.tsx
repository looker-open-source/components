import React, { useContext } from 'react'
import Select from 'react-select'
import {
  Box,
  ButtonTransparent,
  Button,
  useScrollLock,
  getModalRoot,
  Flex,
  FlexItem,
  Paragraph,
  ModalContent,
  InterstitialContext,
  Popover,
  PopoverContent,
  ModalHeader,
  ModalFooter,
} from '@looker/components'

export const getMenuTarget = () => {
  // Make sure #modal-root is first in DOM in order for
  // Popover click-outside behavior to work
  getModalRoot()

  const existing = document.getElementById('menu-target')
  if (existing) {
    return existing
  } else {
    const newElement = document.createElement('div')
    newElement.id = 'menu-target'
    document.body.appendChild(newElement)
    return newElement
  }
}

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

export const LongText = () => (
  <Box>
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
)

const PopoverWithButtons = () => (
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
)

export const ModalInner: React.FC = () => {
  const { enable, disable } = useScrollLock(false, true, getMenuTarget())
  const { close, disableScrollLock, enableFocusTrap } = useContext(
    InterstitialContext
  )
  const handleMenuClose = () => {
    enableFocusTrap && enableFocusTrap()
    disable()
  }
  const handleMenuOpen = () => {
    disableScrollLock && disableScrollLock()
    enable()
  }

  return (
    <>
      <ModalHeader>A React Select inside a Dialog</ModalHeader>
      <ModalContent width={500}>
        <Flex>
          <FlexItem flex="1">
            <LongText />
          </FlexItem>
          <FlexItem flex="2">
            <Popover pin placement="bottom" content={<PopoverWithButtons />}>
              {(onClick, ref, className) => (
                <Button onClick={onClick} ref={ref} className={className}>
                  Open Popover
                </Button>
              )}
            </Popover>
          </FlexItem>
          <FlexItem flex="2">
            <Paragraph>A React Select:</Paragraph>
            <Select
              options={options}
              menuPortalTarget={getMenuTarget()}
              isSearchable={false}
              onMenuClose={handleMenuClose}
              onMenuOpen={handleMenuOpen}
            />
          </FlexItem>
        </Flex>
      </ModalContent>
      <ModalFooter>
        <ButtonTransparent onClick={close}>Close</ButtonTransparent>
      </ModalFooter>
    </>
  )
}

export const PopoverReactSelect = () => {
  const { enable, disable } = useScrollLock(false, true, getMenuTarget())
  const { disableScrollLock, enableFocusTrap } = useContext(InterstitialContext)
  const handleMenuClose = () => {
    enableFocusTrap && enableFocusTrap()
    disable()
  }
  const handleMenuOpen = () => {
    disableScrollLock && disableScrollLock()
    enable()
  }
  return (
    <PopoverContent width={300}>
      <Paragraph>A React Select:</Paragraph>
      <Select
        options={options}
        menuPortalTarget={getMenuTarget()}
        isSearchable={false}
        captureMenuScroll={false}
        onMenuClose={handleMenuClose}
        onMenuOpen={handleMenuOpen}
      />
      <LongText />
      <ButtonTransparent mt="medium" onClick={close}>
        Cancel
      </ButtonTransparent>
    </PopoverContent>
  )
}
export const PopoverInner = () => {
  const { close } = useContext(InterstitialContext)
  return (
    <PopoverContent width={300}>
      <Paragraph>A Popover:</Paragraph>
      <Popover pin placement="bottom" content={<PopoverWithButtons />}>
        {(onClick, ref, className) => (
          <Button onClick={onClick} ref={ref} className={className}>
            Open Popover
          </Button>
        )}
      </Popover>
      <LongText />
      <ButtonTransparent mt="medium" onClick={close}>
        Cancel
      </ButtonTransparent>
    </PopoverContent>
  )
}
