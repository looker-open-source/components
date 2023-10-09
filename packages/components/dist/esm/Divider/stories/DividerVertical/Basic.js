import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { AvatarIcon, DividerVertical, SpaceVertical, Span } from '../../..';
export default function Basic() {
  return React.createElement(React.Fragment, null, React.createElement(SpaceVertical, {
    align: "center"
  }, React.createElement(AvatarIcon, {
    icon: React.createElement(MaterialIcons.Schedule, null)
  }), React.createElement(DividerVertical, null), React.createElement(Span, null, "2:45PM")), React.createElement(SpaceVertical, {
    align: "center"
  }, React.createElement(AvatarIcon, {
    icon: React.createElement(MaterialIcons.Schedule, null)
  }), React.createElement(DividerVertical, {
    height: "3rem"
  }), React.createElement(Span, null, "2:45PM")), React.createElement(SpaceVertical, {
    align: "center"
  }, React.createElement(AvatarIcon, {
    icon: React.createElement(MaterialIcons.Schedule, null),
    size: "large"
  }), React.createElement(DividerVertical, {
    height: "100px"
  }), React.createElement(Span, {
    pl: "u5",
    fontSize: "xxxxlarge"
  }, "2:45PM")));
}
//# sourceMappingURL=Basic.js.map