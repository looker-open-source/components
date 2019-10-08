import styled from 'styled-components'

export const PreWrapper = styled.pre`
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-family: ${({ theme }) => theme.fonts.code};
  line-height: ${({ theme }) => theme.lineHeights.medium};
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.lineHeights.medium};
`
