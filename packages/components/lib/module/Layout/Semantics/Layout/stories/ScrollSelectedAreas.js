import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["hasAside"];

import React from 'react';
import { Page, Layout, Aside, Section } from '../..';
import { Constitution, ConstitutionShort } from '../../../..';
import { Heading } from '../../../../Text';
export default function ScrollSelectedAreas(props) {
  const {
      hasAside
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  return React.createElement(Page, {
    fixed: true
  }, React.createElement(Layout, _extends({
    hasAside: hasAside
  }, rest), React.createElement(Aside, {
    p: "u5",
    width: "200px",
    style: {
      backgroundColor: 'lightsalmon'
    }
  }, React.createElement(ConstitutionShort, null)), React.createElement(Layout, _extends({
    hasAside: hasAside
  }, rest), React.createElement(Section, {
    main: true,
    scrollWithin: true,
    p: "u10",
    style: {
      backgroundColor: 'lightgoldenrodyellow'
    }
  }, React.createElement(Heading, null, "Page title"), React.createElement(Constitution, null)), React.createElement(Aside, {
    scrollWithin: true,
    p: "u10",
    style: {
      backgroundColor: 'lightskyblue'
    }
  }, React.createElement(ConstitutionShort, null)))));
}
//# sourceMappingURL=ScrollSelectedAreas.js.map