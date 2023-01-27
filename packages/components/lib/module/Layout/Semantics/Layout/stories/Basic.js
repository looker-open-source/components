import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["hasAside"];

import React from 'react';
import { Page, Header, Layout, Aside, Section, Footer } from '../..';
import { Constitution, ItemsFiller } from '../../../..';
import { Heading } from '../../../../Text';
export default function Basic(props) {
  const {
      hasAside
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  return React.createElement(Page, null, React.createElement(Header, {
    height: "4rem",
    px: "large"
  }, "I'm the header"), React.createElement(Layout, _extends({
    hasAside: hasAside
  }, rest), React.createElement(Aside, {
    p: "u5",
    width: "200px",
    style: {
      backgroundColor: 'lightskyblue'
    }
  }, React.createElement(ItemsFiller, {
    count: 20
  })), React.createElement(Section, {
    main: true,
    p: "u10",
    style: {
      backgroundColor: 'lightgoldenrodyellow'
    }
  }, React.createElement(Heading, null, "Page title"), React.createElement(Constitution, null))), React.createElement(Footer, {
    height: "3rem",
    px: "large"
  }, "I'm a footer"));
}
//# sourceMappingURL=Basic.js.map