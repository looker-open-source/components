import { SpaceProps, space } from 'looker-design-tokens'
import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Heading } from '../Text'

interface SidebarGroupProps {
  label: string
  showChildren?: boolean
}

export const SidebarGroup: FC<SidebarGroupProps> = ({
  children,
  label,
  showChildren = false,
}) => {
  const [isOpen, setOpen] = useState(showChildren)

  const toggle = () => {
    setOpen(!isOpen)
    return false
  }

  return (
    <Style>
      <SidebarGroupHeading onClick={toggle}>{label}</SidebarGroupHeading>
      {isOpen && <SidebarChildren>{children}</SidebarChildren>}
    </Style>
  )
}

const SidebarChildren = styled.div.attrs({ px: 'medium' })<SpaceProps>`
  ${space}
`

const SidebarGroupHeading = styled(Heading).attrs({
  as: 'h3',
  fontSize: 'medium',
  fontWeight: 'bold',
})``

const Style = styled.section``
