import styled from 'styled-components'

export const SwatchGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
`

export const SwatchHolder = styled.div`
  border-radius: 6px;
  overflow: hidden;
`

export const SwatchHeader = styled.div`
  padding: 1.5rem 1rem;
`

export const SwatchItem = styled.div`
  padding: 4px 12px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContrastBox = styled.div`
  font-size: 10px;
  background: rgba(255, 255, 255, 0.45);
  padding: 2px 8px;
  border-radius: 10px;
`
