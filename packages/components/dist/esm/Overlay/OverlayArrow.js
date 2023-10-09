let _ = t => t,
  _t,
  _t2;
import styled, { css } from 'styled-components';
const arrowColor = css(_t || (_t = _`
  ${0};
`), ({
  theme,
  color: _color = 'background'
}) => theme.colors[_color] || _color);
export const OverlayArrow = styled.div.attrs(() => ({
  'data-popper-arrow': true,
  'data-testid': 'overlay-arrow'
})).withConfig({
  displayName: "OverlayArrow",
  componentId: "sc-r1gti2-0"
})(_t2 || (_t2 = _`
  position: absolute;

  &::after,
  &::before {
    content: '';
    display: block;
    height: 0.54rem;
    width: 0.54rem;
    border: 0.38rem solid transparent;
    border-right: 0;
  }
  &::after {
    border-left-color: ${0};
  }
  &::before {
    position: absolute;
    border-left-color: rgba(0, 0, 0, 0.15);
    filter: blur(1px);
  }

  &[data-placement*='top'] {
    bottom: -0.125rem;
    &::after,
    &::before {
      transform: rotate(90deg);
    }
    &::before {
      border-left-color: rgba(0, 0, 0, 0.3);
      bottom: -3px;
      filter: blur(2px);
    }
  }

  &[data-placement*='right'] {
    left: 0;
    &::after,
    &::before {
      transform: rotate(180deg);
    }
    &::before {
      left: -2px;
    }
  }

  &[data-placement*='bottom'] {
    top: -0.125rem;
    &::after,
    &::before {
      transform: rotate(270deg);
    }
    &::before {
      border-left-color: rgba(0, 0, 0, 0.1);
      top: -1px;
      filter: none;
    }
  }

  &[data-placement*='left'] {
    right: 0;
    &::after,
    &::before {
      transform: rotate(0deg);
    }
    &::before {
      right: -2px;
    }
  }
`), arrowColor);
//# sourceMappingURL=OverlayArrow.js.map