import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["hasAside"];

import React from 'react';
import { Page, Layout, Aside, Section } from '../..';
import { Constitution, ConstitutionShort } from '../../../..';
import { Heading } from '../../../../Text';
export default function ScrollIndependently(props) {
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
    style: {
      backgroundColor: 'lightsalmon'
    }
  }, React.createElement(Constitution, null)), React.createElement(Section, {
    main: true,
    p: "u10",
    style: {
      backgroundColor: 'lightgoldenrodyellow'
    }
  }, React.createElement(Heading, null, "Page title"), React.createElement(Constitution, null)), React.createElement(Aside, {
    p: "u10",
    width: "navigation",
    style: {
      backgroundColor: 'lightskyblue'
    }
  }, React.createElement(ConstitutionShort, null))));
}
//# sourceMappingURL=ScrollIndependently.js.map