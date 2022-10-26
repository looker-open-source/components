import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
const _excluded = ["onDelete", "arrayPos"];
import React from 'react';
import { Dialog, Button, ButtonTransparent, DialogLayout, Fieldset, Divider, Grid, Heading, IconButton, FieldColor, FieldSelect, SpaceVertical, FieldText, Flex, FlexItem } from '@looker/components';
import { Checkbox } from '../Checkbox';
import partial from 'lodash/partial';
import isArray from 'lodash/isArray';
import { Add } from '@styled-icons/material/Add';
import { Remove } from '@styled-icons/material/Remove';
export const TrendLines = ({
  value
}) => {
  const addLine = () => {};

  const removeLine = index => {
    const newValue = [...(value || [])];
    newValue.splice(index, 1);
  };

  return React.createElement(Dialog, {
    content: React.createElement(DialogLayout, {
      header: "Trend Lines",
      footer: "Changes saved automatically."
    }, React.createElement(SpaceVertical, null, isArray(value) && value.map((line, i) => React.createElement(TrendLineForm, _extends({}, line, {
      arrayPos: i,
      key: i,
      onDelete: partial(removeLine, i)
    }))), React.createElement(Button, {
      iconBefore: React.createElement(Add, null),
      onClick: addLine
    }, "Add New Trend Line")))
  }, React.createElement(ButtonTransparent, null, "Edit Trend Lines (", (value === null || value === void 0 ? void 0 : value.length) || 0, ")"));
};

const TrendLineForm = _ref => {
  let {
    onDelete,
    arrayPos
  } = _ref,
      lineProps = _objectWithoutProperties(_ref, _excluded);

  const {
    color,
    label_position,
    order,
    period,
    regression_type,
    series_index,
    show_label
  } = lineProps;
  return React.createElement(React.Fragment, null, React.createElement("div", null, React.createElement(Flex, {
    mb: "small"
  }, React.createElement(FlexItem, null, React.createElement(Heading, {
    as: "h3",
    mr: "xsmall"
  }, "Line ", arrayPos + 1)), React.createElement(FlexItem, null, React.createElement(IconButton, {
    icon: React.createElement(Remove, null),
    label: "Delete trend line",
    outline: true,
    onClick: onDelete
  }))), React.createElement(Fieldset, null, React.createElement(Grid, {
    columns: 4
  }, React.createElement(FieldColor, {
    label: "Color",
    value: color
  }), React.createElement(FieldSelect, {
    label: "Trend Type",
    value: regression_type,
    options: [{
      value: 'linear'
    }, {
      value: 'exponential'
    }, {
      value: 'logarithmic'
    }, {
      value: 'power'
    }, {
      value: 'polynomial'
    }, {
      value: 'average'
    }]
  }), regression_type === 'polynomial' && React.createElement(FieldText, {
    label: "Order",
    value: order
  }), regression_type === 'average' && React.createElement(FieldText, {
    label: "Period",
    value: period
  }), React.createElement(FieldText, {
    label: "Series Index",
    value: series_index
  }), React.createElement(Checkbox, {
    label: "Show Label",
    checked: show_label
  }), show_label === true && React.createElement(FieldSelect, {
    label: "Label Position",
    value: label_position,
    options: [{
      value: 'left'
    }, {
      value: 'center'
    }, {
      value: 'right'
    }]
  })))), React.createElement(Divider, null));
};
//# sourceMappingURL=TrendLines.js.map