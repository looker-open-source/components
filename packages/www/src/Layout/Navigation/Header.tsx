import { Flex, Heading, Icon } from 'looker-lens'
import React, { FC } from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from 'looker-design-tokens'
import LensLogo from './LensLogo'

interface HeaderProps {
  className?: string
  height: string
}

export const HeaderJsx: FC<HeaderProps> = ({ className }) => (
  <a href="/" className={className}>
    <Flex alignItems="flex-end">
      <Icon
        name="LookerLogo"
        alt="Looker"
        color="palette.charcoal800"
        width="60px"
        height="26px"
      />
      <DividerVertical ml="medium" mr="small" />
      <LensLogo />
      <Heading
        variant="default"
        lineHeight="small"
        fontSize="large"
        as="h1"
        ml="xsmall"
      >
        Components
      </Heading>
    </Flex>
  </a>
)

const Header = styled(HeaderJsx)`
  display: flex;
  align-items: center;
  height: ${props => props.height};

  padding: 0 ${props => props.theme.space.large}
    ${props => props.theme.space.xxsmall};

  border-bottom: 1px solid ${props => props.theme.colors.palette.purple100};
`

const DividerVertical = styled.div<SpaceProps>`
  ${space}
  background: ${props => props.theme.colors.palette.purple300};
  height: 20px;
  width: 1px;
  /* margin-bottom: -2px; */
`

export default Header
