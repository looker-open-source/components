import { SpaceProps, space } from 'looker-design-tokens'
import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Heading } from '../Text'
import { Icon } from '../Icon'

interface SidebarGroupProps {
  label: string
  showChildren?: boolean
}

const InternalSidebarGroup: FC<SidebarGroupProps> = ({
  children,
  label,
  showChildren = false,
  ...props
}) => {
  const [isOpen, setOpen] = useState(showChildren)

  const toggle = () => {
    setOpen(!isOpen)
    return false
  }

  return (
    <Style {...props}>
      <SidebarGroupHeading onClick={toggle}>
        <button aria-expanded={isOpen ? 'true' : 'false'}>
          {label}
          <Icon size={20} name={isOpen ? 'CaretUp' : 'CaretDown'} />
        </button>
      </SidebarGroupHeading>
      {isOpen && <SidebarChildren>{children}</SidebarChildren>}
    </Style>
  )
}

const SidebarChildren = styled.div.attrs({ px: 'medium' })<SpaceProps>`
  ${space}
`

const SidebarGroupHeading = styled(Heading).attrs({
  as: 'h3',
  fontSize: 'small',
  fontWeight: 'semiBold',
})`
  button {
    align-items: center;
    all: inherit;
    display: flex;
    justify-content: space-between;
    width: 100%;

    ${Icon} {
      align-self: center;
    }
  }
`

const Style = styled.section``

export const SidebarGroup = styled(InternalSidebarGroup)<SidebarGroupProps>``
