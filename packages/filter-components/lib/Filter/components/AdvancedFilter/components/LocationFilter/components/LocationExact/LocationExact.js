let _ = t => t,
    _t;

import { Flex } from '@looker/components';
import React from 'react';
import styled from 'styled-components';
import { MAX_LATITUDE, MAX_LONGITUDE, MIN_LATITUDE, MIN_LONGITUDE } from '../../../../../../constants';
import { GroupInput } from '../../../GroupInput';
export const LocationExact = ({
  item,
  onChange,
  latString: _latString = 'LATITUDE',
  lonString: _lonString = 'LONGITUDE',
  lat: _lat = 'lat',
  lon: _lon = 'lon',
  placement: _placement = 'right'
}) => {
  const latChange = event => {
    if (Number(event.currentTarget.value) <= MAX_LATITUDE && Number(event.currentTarget.value) >= MIN_LATITUDE) {
      onChange(item.id, {
        [_lat]: event.currentTarget.value
      });
    }
  };

  const lonChange = event => {
    if (Number(event.currentTarget.value) <= MAX_LONGITUDE && Number(event.currentTarget.value) >= MIN_LONGITUDE) {
      onChange(item.id, {
        [_lon]: event.currentTarget.value
      });
    }
  };

  return React.createElement(Flex, {
    flexDirection: "row"
  }, React.createElement(GroupInput, {
    before: React.createElement(Prefix, null, _latString),
    value: String(item.lat || ''),
    type: "number",
    onChange: latChange,
    placement: "middle",
    minWidth: `${_latString.length / 2 + 5.5}em`
  }), React.createElement(GroupInput, {
    before: React.createElement(Prefix, null, _lonString),
    value: String(item.lon || ''),
    type: "number",
    onChange: lonChange,
    placement: _placement,
    minWidth: `${_lonString.length / 2 + 5.5}em`
  }));
};
const Prefix = styled.span.withConfig({
  displayName: "LocationExact__Prefix",
  componentId: "sc-cjs9jc-0"
})(_t || (_t = _`
  color: ${0};
  font-size: ${0};
  white-space: nowrap;
`), ({
  theme: {
    colors
  }
}) => colors.text1, ({
  theme: {
    fontSizes
  }
}) => fontSizes.xsmall);
//# sourceMappingURL=LocationExact.js.map