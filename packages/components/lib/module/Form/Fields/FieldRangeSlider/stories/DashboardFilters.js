

import React, { useEffect, useState } from 'react';
import { FieldRangeSlider } from '../';
import { ButtonGroup, ButtonItem } from '../../../../';
export default function DashboardFilters() {
  const [renderSiblings, setRenderSiblings] = useState(false);
  const [buttonValue, setButtonValue] = useState(['CA']);
  useEffect(() => {
    const timeout = setTimeout(() => setRenderSiblings(true), 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return React.createElement(React.Fragment, null, renderSiblings && React.createElement(ButtonGroup, {
    value: buttonValue,
    onChange: setButtonValue
  }, React.createElement(ButtonItem, {
    value: "CA"
  }, "California"), React.createElement(ButtonItem, {
    value: "AK"
  }, "Alaska"), React.createElement(ButtonItem, {
    value: "UT"
  }, "Utah")), React.createElement(FieldRangeSlider, null));
}
//# sourceMappingURL=DashboardFilters.js.map