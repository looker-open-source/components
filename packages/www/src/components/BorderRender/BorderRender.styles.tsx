import styled from 'styled-components'

export const BorderLabel = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

export const BorderExamples = styled.div`
  margin-bottom: 2rem;
`

export const BorderExample = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-width: 1px;
  border-style: solid;
  &:not(:last-child) {
    border-bottom: none;
  }
`

export const BorderDividerExample = styled.div`
  width: 70%;
  height: 1px;
`
