import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t,
    _t2;

import { position, space, reset, shouldForwardProp } from '@looker/design-tokens';
import omit from 'lodash/omit';
import range from 'lodash/range';
import React from 'react';
import styled from 'styled-components';
import { SpinnerMarker } from './SpinnerMarker';

const SpinnerFactory = props => {
  const {
    color = 'text5',
    markers = 13,
    markerRadius,
    speed = 1000
  } = props;
  return React.createElement(Style, _extends({
    "data-testid": "loading-spinner"
  }, omit(props, 'color', 'markers', 'markersRadius', 'speed')), range(markers).map(i => React.createElement(SpinnerMarker, {
    backgroundColor: color,
    key: i,
    speed: speed,
    markers: markers,
    markerIndex: i,
    markerRadius: markerRadius
  })));
};

const Style = styled.div.withConfig({
  shouldForwardProp,
  displayName: "Spinner__Style",
  componentId: "sc-dvoyit-0"
}).attrs(({
  size: _size = '30'
}) => ({
  size: _size
}))(_t || (_t = _`
  ${0}
  ${0}
  ${0}

  height: ${0}px;
  position: relative;
  width: ${0}px;
`), reset, space, position, ({
  size
}) => size, ({
  size
}) => size);
export const Spinner = styled(SpinnerFactory).withConfig({
  displayName: "Spinner",
  componentId: "sc-dvoyit-1"
})(_t2 || (_t2 = _``));
//# sourceMappingURL=Spinner.js.map