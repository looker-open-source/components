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

import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Heading } from '../Text'
import { Box } from '../Layout'
import { Icon } from '../Icon'

interface SidebarGroupProps {
  className?: string
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

export const SidebarGroup = styled(InternalSidebarGroup)``
