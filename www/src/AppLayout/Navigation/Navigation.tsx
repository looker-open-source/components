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

import { Aside, AsideProps, SidebarGroup } from '@looker/components'
import { useLocation } from '@reach/router'
import React, { FC } from 'react'
import styled from 'styled-components'
import sitemap from '../../documentation/sitemap'
import Section from './Section'

interface NavigationProps extends AsideProps {
  className?: string
}

const NavigationLayout: FC<NavigationProps> = (props) => {
  const location = useLocation()
  const sectionPath = location.pathname.split('/')[1]
  const chapter = sitemap.find((section) => section.path === sectionPath)

  return chapter ? (
    <Aside as="nav" {...props}>
      <Section key={chapter.path} section={chapter} />
    </Aside>
  ) : null
}

export const Navigation = styled(NavigationLayout)`
  border-right: 1px solid ${({ theme }) => theme.colors.ui2};
  height: 100%;

  /* stylelint-disable max-nesting-depth */
  h2 {
    color: ${(props) => props.theme.colors.keyPressed};
  }

  ${SidebarGroup} {
    border-bottom: solid 1px ${(props) => props.theme.colors.keyAccent};
    cursor: pointer;
    padding: ${(props) =>
      `${props.theme.space.xsmall} ${props.theme.space.large}`};
    ${SidebarGroup} {
      border: none;
      padding: ${({ theme }) => theme.space.xxsmall} 0;

      h2 {
        color: ${(props) => props.theme.colors.text2};
        font-size: ${(props) => props.theme.fontSizes.xsmall};
        text-transform: uppercase;
      }

      svg {
        display: none;
      }
    }

    a {
      border-radius: 4px;
      font-size: ${(props) => props.theme.fontSizes.small};
      padding: ${(props) =>
        `${props.theme.space.xsmall} ${props.theme.space.small}`};

      &:hover {
        background-color: ${(props) => props.theme.colors.keySubtle};
      }
    }
    /* stylelint-enable max-nesting-depth */
  }
`
