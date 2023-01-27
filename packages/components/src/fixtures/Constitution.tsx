/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import type { FontSizes } from '@looker/design-tokens'
import React from 'react'
import styled from 'styled-components'
import { Heading } from '../Text/Heading'
import { Paragraph } from '../Text/Paragraph'

export const constitutionShort =
  'We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defense, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.'

export const ConstitutionShort = ({ fontSize }: { fontSize?: FontSizes }) => (
  <Paragraph fontSize={fontSize}>{constitutionShort}</Paragraph>
)

export const Constitution = () => (
  <Format>
    <Heading as="h2">Preamble</Heading>
    <ConstitutionShort />
    <Heading as="h2">Article 1 </Heading>
    <Heading as="h3">Section 1 </Heading>
    <Paragraph>
      All legislative Powers herein granted shall be vested in a Congress of the
      United States, which shall consist of a Senate and House of
      Representatives.
    </Paragraph>
    <Paragraph>
      The House of Representatives shall be composed of Members chosen every
      second Year by the People of the several States, and the Electors in each
      State shall have the Qualifications requisite for Electors of the most
      numerous Branch of the State Legislature.
    </Paragraph>
    <Paragraph>
      No Person shall be a Representative who shall not have attained to the Age
      of twenty five Years, and been seven Years a Citizen of the United States,
      and who shall not, when elected, be an Inhabitant of that State in which
      he shall be chosen.
    </Paragraph>
    <Paragraph>
      Representatives and direct Taxes shall be apportioned among the several
      States which may be included within this Union, according to their
      respective Numbers, which shall be determined by adding to the whole
      Number of free Persons, including those bound to Service for a Term of
      Years, and excluding Indians not taxed, three fifths of all other Persons.
      The actual Enumeration shall be made within three Years after the first
      Meeting of the Congress of the United States, and within every subsequent
      Term of ten Years, in such Manner as they shall by Law direct. The Number
      of Representatives shall not exceed one for every thirty Thousand, but
      each State shall have at Least one Representative; and until such
      enumeration shall be made, the State of New Hampshire shall be entitled to
      chuse three, Massachusetts eight, Rhode-Island and Providence Plantations
      one, Connecticut five, New-York six, New Jersey four, Pennsylvania eight,
      Delaware one, Maryland six, Virginia ten, North Carolina five, South
      Carolina five, and Georgia three.
    </Paragraph>
    <Paragraph>
      When vacancies happen in the Representation from any State, the Executive
      Authority thereof shall issue Writs of Election to fill such Vacancies.
    </Paragraph>
    <Paragraph>
      The House of Representatives shall chuse their Speaker and other Officers;
      and shall have the sole Power of Impeachment.
    </Paragraph>
  </Format>
)

const Format = styled.article`
  ${Heading} {
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    margin-bottom: ${({ theme }) => theme.space.u3};
  }

  ${Paragraph} {
    margin: ${({ theme }) => theme.space.u3} 0;
  }
`
