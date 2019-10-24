import styled from 'styled-components'
import {
  reset,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'looker-design-tokens'

interface BadgeProps extends SpaceProps, TypographyProps {
  color?: string
}

export const Badge = styled.span<BadgeProps>`
  ${reset}

  border: 1px solid ${props => props.theme.colors.palette.charcoal200};
  border-radius: ${props => props.theme.radii.medium};
  background: ${props => props.theme.colors.palette.charcoal100};
  color: ${props => props.theme.colors.palette.charcoal600};

  display: inline-block;
  ${space}
  ${typography}
`

Badge.defaultProps = {
  fontSize: 'xxsmall',
  mx: 'xsmall',
  px: 'xxsmall',
  py: 'xxxsmall',
}
