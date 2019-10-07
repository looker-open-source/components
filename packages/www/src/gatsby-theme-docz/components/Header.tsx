import { Button, Icon } from '@looker/components'
import React from 'react'
import styled from 'styled-components'

export const Header: React.FC = () => (
  <StyledHeader>
    <a href="/">
      <Title>
        <Icon
          name="LookerLogo"
          alt="Looker"
          color="palette.charcoal900"
          width="74px"
          height="32px"
          mr="small"
        />
        Components
      </Title>
    </a>
    <div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/looker/lens"
      >
        <Button variant="transparent">Github</Button>
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://looker.atlassian.net/secure/RapidBoard.jspa?rapidView=148&view=planning.nodetail"
      >
        <Button variant="transparent">JIRA</Button>
      </a>
    </div>
  </StyledHeader>
)

const StyledHeader = styled.header`
  background: ${props => props.theme.colors.palette.white};
  box-shadow: ${props => props.theme.shadows[1]};
  height: 100%;
  width: 100%;
  padding: 0 ${props => props.theme.space.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`

const Title = styled.h1`
  color: ${props => props.theme.colors.palette.charcoal500};
  font-size: ${props => props.theme.fontSizes.xlarge};
  font-weight: ${props => props.theme.fontWeights.light};
`
