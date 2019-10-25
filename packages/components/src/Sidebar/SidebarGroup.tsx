import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Heading } from '../Text'
import { Box } from '../Layout'
import { Icon } from '../Icon'

interface SidebarGroupProps {
  label: string
  showChildren?: boolean
}

const InternalSidebarGroup: FC<SidebarGroupProps> = ({
  children,
  className,
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
    <section className={className} {...props}>
      <SidebarGroupHeading onClick={toggle}>
        <button aria-expanded={isOpen ? 'true' : 'false'}>
          {label}
          <Icon size={20} name={isOpen ? 'CaretUp' : 'CaretDown'} />
        </button>
      </SidebarGroupHeading>
      {isOpen && <Box px="medium">{children}</Box>}
    </section>
  )
}

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

export const SidebarGroup = styled(InternalSidebarGroup)<SidebarGroupProps>``
