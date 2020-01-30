import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { InputDate, Flex } from '@looker/components'

export const InputDateDemo: FC = () => {
  const [smallDate, setSmallDate] = useState()
  const [mediumDate, setMediumDate] = useState()
  const [largeDate, setLargeDate] = useState()

  return (
    <Flex>
      <div>
        <InputDate size="small" onChange={setSmallDate} />
        {smallDate && (
          <OutputWrapper>
            Selected: {new Intl.DateTimeFormat().format(smallDate)}
          </OutputWrapper>
        )}
      </div>
      <div>
        <InputDate onChange={setMediumDate} />
        {mediumDate && (
          <OutputWrapper>
            Selected: {new Intl.DateTimeFormat().format(mediumDate)}
          </OutputWrapper>
        )}
      </div>
      <div>
        <InputDate size="large" onChange={setLargeDate} />
        {largeDate && (
          <OutputWrapper>
            Selected: {new Intl.DateTimeFormat().format(largeDate)}
          </OutputWrapper>
        )}
      </div>
    </Flex>
  )
}

const OutputWrapper = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.palette.charcoal400};
  border-top: 1px solid #ccc;
  padding-top: 0.75rem;
  margin-top: 0.5rem;
`
