import React, { FC, useState, useCallback } from 'react'
import { IconButton, IconNames } from 'looker-lens'
import styled from 'styled-components'

interface SidebarToggleProps {
  isOpen: boolean
  headerHeight: string
  onClick: () => void
}

const SidebarToggle: FC<SidebarToggleProps> = ({
  isOpen,
  onClick,
  headerHeight,
}) => {
  const [buttonWidth, setButtonWidth] = useState(0)
  const iconName: IconNames = isOpen ? 'CaretLeft' : 'CaretRight'

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setButtonWidth(node.getBoundingClientRect().width)
    }
  }, [])

  return (
    <SidebarToggleWrapper headerHeight={headerHeight} buttonWidth={buttonWidth}>
      <IconButton
        ref={measuredRef}
        shape="round"
        icon={iconName}
        onClick={onClick}
        label={open ? 'Close Sidebar' : 'Open Sidebar'}
        size="small"
        px="large"
        outline
      />
    </SidebarToggleWrapper>
  )
}

interface WrapperProps {
  buttonWidth: number
  headerHeight?: string
}

const SidebarToggleWrapper = styled.div<WrapperProps>`
  position: relative;
  left: ${({ buttonWidth }) => `-${buttonWidth / 2}px`};
  margin-top: ${({ buttonWidth, headerHeight }) =>
    `calc(${headerHeight}/2 - ${buttonWidth}px/2)`};
`

export default SidebarToggle
