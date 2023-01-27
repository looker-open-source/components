let _ = t => t,
  _t;
import { Box, InputDate, Popover } from '@looker/components';
import React from 'react';
import styled from 'styled-components';
import { TokenBase } from '../../../../../../../Token/Token';
import { inputPlacementStyle } from '../../../../../../utils/filter_styles';
import { FILTERS_DATE_FORMAT, formatDate } from '../../utils/format_date';
export const DateInputInternal = ({
  className,
  date,
  onChange
}) => {
  const handleDayChange = d => {
    const newDate = d || new Date(Date.now());
    onChange(new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
  };
  return React.createElement(Popover, {
    content: React.createElement(Box, {
      p: "small"
    }, React.createElement(InputDate, {
      defaultValue: date,
      onChange: handleDayChange
      ,
      dateStringFormat: FILTERS_DATE_FORMAT
    })),
    placement: "bottom-start"
  }, React.createElement(TokenBase, {
    className: className,
    "aria-selected": "true"
  }, formatDate(date)));
};
export const DateInput = styled(DateInputInternal).withConfig({
  displayName: "DateInput",
  componentId: "sc-iggigb-0"
})(_t || (_t = _`
  ${0}
`), inputPlacementStyle);
//# sourceMappingURL=DateInput.js.map