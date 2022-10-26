import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { Science } from '@styled-icons/material-outlined';
import React from 'react';
import { Icon } from '../../Icon';
import { SpaceVertical } from '../../Layout';
import { Heading } from '../../Text';
import { DataTable } from '../DataTable';
import { columns } from '../../fixtures/DataTable/columns';

const Template = _ref => {
  let args = _extends({}, _ref);

  return React.createElement(DataTable, args, React.createElement("p", null, "Faux ActionList here..."));
};

export const Loading = Template.bind({});
Loading.args = {
  caption: 'DataTable State',
  columns,
  state: 'loading'
};
Loading.parameters = {
  storyshots: {
    disable: true
  }
};
export const NoResults = Template.bind({});
NoResults.args = _objectSpread(_objectSpread({}, Loading.args), {}, {
  state: 'noResults'
});
export const NoResultsDisplay = Template.bind({});
NoResultsDisplay.args = _objectSpread(_objectSpread({}, NoResults.args), {}, {
  noResultsDisplay: 'No faux items were found'
});
NoResultsDisplay.parameters = {
  storyshots: {
    disable: true
  }
};
export const NoResultsDisplayFancy = Template.bind({});
NoResultsDisplayFancy.args = _objectSpread(_objectSpread({}, NoResults.args), {}, {
  noResultsDisplay: React.createElement(SpaceVertical, {
    align: "center"
  }, React.createElement(Icon, {
    size: "xlarge",
    icon: React.createElement(Science, null),
    color: "key"
  }), React.createElement(Heading, null, "The mad scientists have nothing for you..."))
});
NoResultsDisplayFancy.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=State.js.map