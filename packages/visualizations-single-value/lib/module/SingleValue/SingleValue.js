let _ = t => t,
  _t,
  _t2,
  _t3;
import React from 'react';
import numeral from 'numeral';
import styled from 'styled-components';
import { VisWrapper } from '@looker/visualizations-adapters';
export const SingleValue = ({
  data,
  fields,
  width,
  height,
  config
}) => {
  if (!data) {
    return null;
  }
  const {
    series = {}
  } = config;

  const {
    name
  } = fields.measures[0];
  const firstSeries = Array.isArray(series) ? series[0] : series[name || ''];
  const {
    color,
    label,
    value_format
  } = firstSeries;
  const value = data[0][name || ''];
  const formattedValue = numeral(value).format(value_format);
  return React.createElement(VisWrapper, null, React.createElement(SingleValueLayout, {
    width: width,
    height: height
  }, React.createElement(SingleValueContent, {
    color: color
  }, formattedValue), label && React.createElement(SingleValueTitle, {
    color: color
  }, label)));
};
const SingleValueLayout = styled.div.withConfig({
  displayName: "SingleValue__SingleValueLayout",
  componentId: "sc-1qwcp7y-0"
})(_t || (_t = _`
  align-items: center;
  background: ${0};
  display: grid;
  grid-template-columns: 1fr;
  height: ${0};
  justify-items: center;
  width: ${0};
`), ({
  theme
}) => theme.colors.background, ({
  height
}) => `${height}px` || `auto`, ({
  width
}) => `${width}px` || `auto`);
const SingleValueContent = styled.div.withConfig({
  displayName: "SingleValue__SingleValueContent",
  componentId: "sc-1qwcp7y-1"
})(_t2 || (_t2 = _`
  color: ${0};
  font-size: ${0};
`), ({
  color
}) => `${color}`, ({
  theme
}) => theme.fontSizes.xxxlarge);
const SingleValueTitle = styled.div.withConfig({
  displayName: "SingleValue__SingleValueTitle",
  componentId: "sc-1qwcp7y-2"
})(_t3 || (_t3 = _`
  color: ${0};
  font-size: ${0};
  opacity: 50%;
`), ({
  color
}) => `${color}`, ({
  theme
}) => theme.fontSizes.large);
//# sourceMappingURL=SingleValue.js.map