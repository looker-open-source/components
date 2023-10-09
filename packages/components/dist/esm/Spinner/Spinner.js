let _ = t => t,
  _t,
  _t2;
const _excluded = ["color", "markers", "markerRadius", "speed"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { position, space, reset, shouldForwardProp } from '@looker/design-tokens';
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
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  return React.createElement(Style, _extends({
    "data-testid": "loading-spinner"
  }, rest), range(markers).map(i => React.createElement(SpinnerMarker, {
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