let _ = t => t,
    _t;

import { InputTimeSelect, InputText } from '@looker/components';
import React from 'react';
import styled from 'styled-components';
import { inputPlacementStyle } from '../../../../../../utils/filter_styles';

const TimeInputInternal = ({
  className,
  date,
  onChange
}) => {
  const value = `${date.getHours()}:${date.getMinutes()}`;

  const handleChange = (newTimeString = '0:00') => {
    const [newHour, newMinute] = newTimeString.split(':');
    const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), Number(newHour), Number(newMinute));
    onChange(newDate);
  };

  return React.createElement(InputTimeSelect, {
    className: className,
    interval: 30,
    value: value,
    onChange: handleChange
  });
};

export const TimeInput = styled(TimeInputInternal).withConfig({
  displayName: "TimeInput",
  componentId: "sc-1e5vm7c-0"
})(_t || (_t = _`
  width: 120px;
  ${0} {
    ${0}
  }
`), InputText, inputPlacementStyle);
//# sourceMappingURL=TimeInput.js.map