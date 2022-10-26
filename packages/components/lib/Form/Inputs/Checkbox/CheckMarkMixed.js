import React from 'react';
import { useTranslation } from '../../../utils';
export const CheckMarkMixed = () => {
  const {
    t
  } = useTranslation('CheckMarkMixed');
  return React.createElement("svg", {
    role: "presentation",
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("title", null, t('Check Mark Mixed')), React.createElement("g", {
    stroke: "currentColor",
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round"
  }, React.createElement("line", {
    x1: "4",
    y1: "7",
    x2: "10",
    y2: "7"
  })));
};
//# sourceMappingURL=CheckMarkMixed.js.map