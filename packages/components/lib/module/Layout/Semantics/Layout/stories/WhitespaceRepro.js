import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["hasAside"];

import React from 'react';
import { Info } from '@styled-icons/material';
import { Page, Header, Layout, Aside, Section } from '../..';
import { Constitution, ItemsFiller } from '../../../..';
import { IconButton } from '../../../../Button';
import { Heading } from '../../../../Text';
export default function WhitespaceRepro(props) {
  const {
      hasAside
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  return React.createElement(Page, {
    fixed: true
  }, React.createElement(Header, {
    height: "4rem",
    px: "large",
    style: {
      backgroundColor: 'lightcoral'
    }
  }, "I'm the header"), React.createElement(Layout, _extends({
    hasAside: hasAside
  }, rest), React.createElement(Aside, {
    p: "u5",
    width: "200px",
    style: {
      backgroundColor: 'lightsalmon'
    }
  }, React.createElement(ItemsFiller, {
    count: 20
  })), React.createElement(Section, {
    main: true,
    p: "u10",
    style: {
      backgroundColor: 'lightgoldenrodyellow'
    }
  }, React.createElement(Heading, null, "Page title"), React.createElement(Constitution, null), React.createElement(IconButton, {
    icon: React.createElement(Info, null),
    label: "Info"
  }))));
}
//# sourceMappingURL=WhitespaceRepro.js.map