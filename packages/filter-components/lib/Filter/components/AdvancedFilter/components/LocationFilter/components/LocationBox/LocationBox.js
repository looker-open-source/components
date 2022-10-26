import { Flex } from '@looker/components';
import pick from 'lodash/pick';
import React from 'react';
import { LocationExact } from '../LocationExact';
export const LocationBox = ({
  item,
  onChange
}) => React.createElement(Flex, {
  flexDirection: "row"
}, React.createElement(LocationExact, {
  item: pick(item, ['id', 'is', 'lat', 'lon', 'type']),
  onChange: onChange,
  placement: "middle",
  latString: "FROM LATITUDE"
}), React.createElement(LocationExact, {
  lat: "lat1",
  lon: "lon1",
  item: {
    id: item.id,
    is: item.is,
    lat: item.lat1,
    lon: item.lon1,
    type: item.type
  },
  onChange: onChange,
  latString: "TO LATITUDE"
}));
//# sourceMappingURL=LocationBox.js.map