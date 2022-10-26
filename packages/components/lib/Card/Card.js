let _ = t => t,
    _t,
    _t2,
    _t3;

import { flexbox, shouldForwardProp } from '@looker/design-tokens';
import styled, { css } from 'styled-components';
import { commonLayoutCSS } from '../Layout/utils/common';

const cardTransition = () => css(_t || (_t = _`
  ${0}
`), ({
  theme
}) => `${theme.transitions.quick}ms ${theme.easings.ease}`);

const raised = props => props.raised && css(_t2 || (_t2 = _`
    box-shadow: ${0};

    &:hover {
      box-shadow: ${0};
    }
  `), ({
  theme
}) => theme.elevations.plus1, ({
  theme
}) => theme.elevations.plus2);

export const Card = styled.div.withConfig({
  shouldForwardProp,
  displayName: "Card",
  componentId: "sc-11cdxqo-0"
}).attrs(({
  bg: _bg = 'background',
  border: _border = 'ui3',
  borderRadius: _borderRadius = 'medium',
  display: _display = 'flex',
  flexDirection: _flexDirection = 'column',
  height: _height = '100%',
  minWidth: _minWidth = '200px',
  overflow: _overflow = 'hidden'
}) => ({
  bg: _bg,
  border: _border,
  borderRadius: _borderRadius,
  display: _display,
  flexDirection: _flexDirection,
  height: _height,
  minWidth: _minWidth,
  overflow: _overflow
}))(_t3 || (_t3 = _`
  ${0}
  ${0}

  transition: border ${0}, box-shadow ${0};

  &:hover {
    border-color: ${0};
  }

  ${0}
`), commonLayoutCSS, flexbox, cardTransition, cardTransition, ({
  theme
}) => theme.colors.ui4, raised);
//# sourceMappingURL=Card.js.map