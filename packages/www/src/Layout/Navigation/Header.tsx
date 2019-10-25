import { Flex, Heading, Icon } from 'looker-lens'
import React, { FC } from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from 'looker-design-tokens'

export const HeaderJsx: FC<{ className?: string }> = ({ className }) => (
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
      <ComponentsLogoSvg />
      <Heading
        variant="default"
        lineHeight="small"
        fontSize="large"
        as="h1"
        ml="xxsmall"
      >
        Components
      </Heading>
    </Flex>
  </a>
)

const Header = styled(HeaderJsx)`
  display: flex;
  align-items: center;
  height: 5rem;

  padding: ${props => props.theme.space.large};

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

const ComponentsLogoSvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginBottom: '-2px' }}
  >
    <path
      d="M19.6077 16.3924L12 20.7847L4.39231 16.3924L4.39231 7.60775L12 3.21545L19.6077 7.60775L19.6077 16.3924Z"
      fill="#9785F2"
    />
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="1"
      width="24"
      height="22"
    >
      <path
        d="M19.6077 16.3924L12 20.7847L4.3923 16.3924L4.3923 7.60775L12 3.21545L19.6077 7.60775L19.6077 16.3924Z"
        fill="#9785F2"
      />
    </mask>
    <g mask="url(#mask0)">
      <rect x="12" y="3" width="8" height="18" fill="#4F2ABA" />
    </g>
    <path
      d="M15.8258 14.0402L12.1117 16.1846L8.39765 14.0402L8.39765 9.7516L12.1117 7.60728L15.8258 9.7516L15.8258 14.0402Z"
      fill="#FAFAFF"
    />
  </svg>
)
