import React from 'react'
import { Box } from '../src/components/Box'
import { Button } from '../src/components/Button'
import { Menu, MenuItem } from '../src/components/Menu'
import { DialogManager, ModalContent } from '../src/components/Modal'
import { Popover } from '../src/components/Popover'
import { Paragraph } from '../src/components/Text'
import { Tooltip } from '../src/components/Tooltip'

const warningContent = (
  <ModalContent>
    <Paragraph>A warning about grave consequences here...</Paragraph>
    <Button color="danger">Do it dangerdoom!</Button>
  </ModalContent>
)

const menu = (
  <Menu>
    <MenuItem>Thing 1</MenuItem>
    <DialogManager content={warningContent}>
      {onClick => <MenuItem onClick={onClick}>Thing 2 🔥</MenuItem>}
    </DialogManager>
    <MenuItem
      detail={
        <Tooltip content="... is delicious" placement="right">
          {(eventHandlers, ref) => (
            <Box ref={ref} {...eventHandlers}>
              Pizza
            </Box>
          )}
        </Tooltip>
      }
    >
      Thing 3
    </MenuItem>
    <MenuItem>Some more info...</MenuItem>
  </Menu>
)

export const PopoverOverlayDemo: React.FC = () => {
  return (
    <>
      <Popover content={menu}>
        {(onClick, ref) => (
          <Button
            aria-haspopup="true"
            onClick={onClick}
            ref={ref}
            variant="outline"
            iconAfter="ArrowDropDown"
          >
            Do some things...
          </Button>
        )}
      </Popover>
    </>
  )
}
