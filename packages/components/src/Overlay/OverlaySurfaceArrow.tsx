import { color, ColorProps, CompatibleHTMLProps } from 'looker-design-tokens'
import { PopperArrowProps } from 'react-popper'
import styled from 'styled-components'

interface OverlaySurfaceArrowProps
  extends Omit<CompatibleHTMLProps<HTMLDivElement>, 'style'>,
    ColorProps,
    PopperArrowProps {
  borderColor?: string
  border?: string
  ['data-placement']: string
}

export const OverlaySurfaceArrow = styled.div.attrs(
  (props: OverlaySurfaceArrowProps) => ({
    'data-placement': props['data-placement'],
  })
)<OverlaySurfaceArrowProps>`
  position: absolute;

  &::before {
    content: '';
    display: block;
    margin: auto;
    width: 0.5rem;
    height: 0.5rem;

    ${color}

    border-bottom: ${props => props.border} ${props => props.borderColor};
    border-right: ${props => props.border} ${props => props.borderColor};
  }

  &[data-placement*='top'] {
    bottom: 0.25rem;
    margin: 0 1rem;
    &::before {
      transform: rotate(45deg);
    }
  }

  &[data-placement*='right'] {
    left: 0.25rem;
    margin: 1rem 0;
    &::before {
      transform: rotate(135deg);
    }
  }

  &[data-placement*='bottom'] {
    top: 0.25rem;
    margin: 0 1rem;
    &::before {
      transform: rotate(225deg);
    }
  }

  &[data-placement*='left'] {
    right: 0.25rem;
    margin: 1rem 0;
    &::before {
      transform: rotate(315deg);
    }
  }
`
