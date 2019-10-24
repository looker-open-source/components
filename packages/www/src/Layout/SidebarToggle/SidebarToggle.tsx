import React, { useState, useCallback } from 'react'
import { IconButton, IconNames } from '@looker/components'
import styled from 'styled-components'

interface SidebarToggleProps {
  isOpen: boolean
  onClick: () => void
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ isOpen, onClick }) => {
  const [buttonWidth, setButtonWidth] = useState(0)
  const iconName: IconNames = isOpen ? 'CaretLeft' : 'CaretRight'

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setButtonWidth(node.getBoundingClientRect().width)
    }
  }, [])

  return (
    <SidebarToggleWrapper buttonWidth={buttonWidth}>
      <IconButton
        ref={measuredRef}
        shape="round"
        icon={iconName}
        onClick={onClick}
        label={open ? 'Close Sidebar' : 'Open Sidebar'}
        size="small"
        mt="medium"
        px="large"
        outline
      />
    </SidebarToggleWrapper>
  )
}

interface WrapperProps {
  buttonWidth: number
}

const SidebarToggleWrapper = styled.div<WrapperProps>`
  position: relative;
  left: ${({ buttonWidth }) => `-${buttonWidth / 2}px`};
`

export default SidebarToggle
