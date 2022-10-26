import { Flex } from '@looker/components';
import pick from 'lodash/pick';
import React from 'react';
import { GroupInput } from '../../../GroupInput';
import { GroupSelect } from '../../../GroupSelect';
import { LocationExact } from '../LocationExact';
import { useUnitOptions } from '../../../../utils';
export const LocationCircle = ({
  item,
  onChange
}) => {
  const unitOptions = useUnitOptions();

  const distanceChange = event => {
    if (Number(event.currentTarget.value) >= 0) {
      onChange === null || onChange === void 0 ? void 0 : onChange(item.id, {
        distance: event.currentTarget.value,
        unit: item.unit || 'miles'
      });
    }
  };

  const unitChange = value => {
    onChange === null || onChange === void 0 ? void 0 : onChange(item.id, {
      unit: value
    });
  };

  return React.createElement(Flex, {
    flexDirection: "row"
  }, React.createElement(GroupInput, {
    value: String(item.distance || ''),
    type: "number",
    onChange: distanceChange,
    minWidth: "4.5em"
  }), React.createElement(GroupSelect, {
    placement: "middle",
    value: item.unit || 'miles',
    options: unitOptions,
    onChange: unitChange
  }), React.createElement(LocationExact, {
    item: pick(item, ['id', 'is', 'lat', 'lon', 'type']),
    onChange: onChange,
    latString: "FROM LATITUDE"
  }));
};
//# sourceMappingURL=LocationCircle.js.map