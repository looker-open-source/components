import { ReactNode } from 'react'
import { rgba } from 'polished'
import styled, { css } from 'styled-components'
import {
  reset,
  SpaceProps,
  LayoutProps,
  BorderProps,
  space,
  TypographyProps,
  typography,
  layout,
  border,
} from '@looker/design-tokens'

export interface TabProps
  extends BorderProps,
    LayoutProps,
    SpaceProps,
    TypographyProps {
  children: ReactNode
  selected?: boolean
  disabled?: boolean
  onSelect?: () => void
}

const tabFocusRing = (color: string) => css`
  box-shadow: 0 0 0 0.15rem ${rgba(color, 0.25)};
  outline: none;
`

export const Tab = styled.button.attrs((props: TabProps) => ({
  minWidth: '3rem',
  onClick: () => {
    if (!props.disabled && props.onSelect) {
      props.onSelect()
    }
  },
}))<TabProps>`
  ${reset}
  ${space}
  ${layout}
  ${border}
  ${typography}

  background: transparent;
  border-bottom: 3px solid;
  border-bottom-color: ${props =>
    props.selected ? props.theme.colors.palette.purple400 : 'transparent'};
  border-radius: 0;
  color: ${props =>
    props.selected
      ? props.theme.colors.palette.charcoal800
      : props.theme.colors.palette.charcoal500};
  cursor: pointer;

  & + & {
    margin-left: ${props => props.theme.space.xlarge};
  }

  &:hover {
    border-bottom-color: ${props =>
      props.selected
        ? props.theme.colors.palette.purple400
        : props.theme.colors.palette.charcoal300};
  }

  &:active {
    border-bottom-color: ${props =>
      props.selected
        ? props.theme.colors.palette.purple400
        : props.theme.colors.palette.charcoal400};
  }

  &:focus {
    ${props => tabFocusRing(props.theme.colors.palette.purple300)}
  }

  &:disabled {
    color: ${props => props.theme.colors.palette.charcoal300};

    &:active,
    &:hover {
      border-bottom-color: transparent;
    }
  }
`

Tab.defaultProps = { fontWeight: 'semiBold', pb: 'small', pt: 'xsmall' }
