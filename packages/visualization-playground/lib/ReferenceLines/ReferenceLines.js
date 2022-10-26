import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
const _excluded = ["onDelete"];
import React from 'react';
import { Dialog, Button, ButtonTransparent, DialogLayout, Fieldset, Flex, FlexItem, Divider, Grid, Heading, IconButton, FieldColor, FieldSelect, SpaceVertical } from '@looker/components';
import partial from 'lodash/partial';
import isArray from 'lodash/isArray';
import { Add } from '@styled-icons/material/Add';
import { Remove } from '@styled-icons/material/Remove';
export const ReferenceLines = ({
  value
}) => {
  const addLine = () => {};

  const removeLine = index => {
    const newValue = [...(value || [])];
    newValue.splice(index, 1);
  };

  return React.createElement(Dialog, {
    content: React.createElement(DialogLayout, {
      header: "Reference Lines",
      footer: "Changes saved automatically."
    }, React.createElement(SpaceVertical, null, isArray(value) && value.map((line, i) => React.createElement(ReferenceLineForm, _extends({}, line, {
      arrayPos: i,
      key: i,
      onDelete: partial(removeLine, i)
    }))), React.createElement(Button, {
      iconBefore: React.createElement(Add, null),
      onClick: addLine
    }, "Add New Reference Line")))
  }, React.createElement(ButtonTransparent, null, "Edit Reference Lines (", (value === null || value === void 0 ? void 0 : value.length) || 0, ")"));
};

const ReferenceLineForm = _ref => {
  let {
    onDelete
  } = _ref,
      lineProps = _objectWithoutProperties(_ref, _excluded);

  const {
    arrayPos,
    color,
    label_position,
    line_value,
    margin_bottom,
    margin_top,
    margin_value,
    range_end,
    range_start,
    reference_type
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
  }))), ' ', React.createElement(Fieldset, null, React.createElement(Grid, {
    columns: 4
  }, React.createElement(FieldSelect, {
    label: "Reference Type",
    value: reference_type,
    options: [{
      value: 'line'
    }, {
      value: 'range'
    }, {
      value: 'margins'
    }]
  }), React.createElement(FieldColor, {
    label: "Color",
    value: color
  }), React.createElement(FieldSelect, {
    label: "Label Position",
    value: label_position,
    options: [{
      value: 'left'
    }, {
      value: 'center'
    }, {
      value: 'right'
    }]
  }), React.createElement(FieldSelect, {
    label: "Line Value",
    value: line_value,
    options: [{
      value: 'mean'
    }, {
      value: 'median'
    }, {
      value: 'max'
    }, {
      value: 'min'
    }]
  }), reference_type === 'margins' && React.createElement(React.Fragment, null, React.createElement(FieldSelect, {
    label: "Margin Bottom",
    value: margin_bottom,
    options: [{
      value: 'deviation'
    }, {
      value: 'variance'
    }]
  }), React.createElement(FieldSelect, {
    label: "Margin Top",
    value: margin_top,
    options: [{
      value: 'deviation'
    }, {
      value: 'variance'
    }]
  }), React.createElement(FieldSelect, {
    label: "Margin Value",
    value: margin_value,
    options: [{
      value: 'mean'
    }, {
      value: 'median'
    }, {
      value: 'max'
    }, {
      value: 'min'
    }]
  })), reference_type === 'range' && React.createElement(React.Fragment, null, React.createElement(FieldSelect, {
    label: "Range Start",
    value: range_start,
    options: [{
      value: 'mean'
    }, {
      value: 'median'
    }, {
      value: 'max'
    }, {
      value: 'min'
    }]
  }), React.createElement(FieldSelect, {
    label: "Range End",
    value: range_end,
    options: [{
      value: 'mean'
    }, {
      value: 'median'
    }, {
      value: 'max'
    }, {
      value: 'min'
    }]
  }))))), React.createElement(Divider, null));
};
//# sourceMappingURL=ReferenceLines.js.map