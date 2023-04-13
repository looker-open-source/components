let _ = t => t,
  _t,
  _t2;

import React from 'react';
import styled from 'styled-components';
import sortBy from 'lodash/sortBy';
import { theme } from './theme';
const CELL_SIZE = '3rem';
const sortedColorsArray = sortBy(Object.entries(theme.colors), 0);
const GridLayout = styled.div.withConfig({
  displayName: "colorsstories__GridLayout",
  componentId: "sc-aevhof-0"
})(_t || (_t = _`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(${0}, 1fr));
  padding: 1rem;
`), CELL_SIZE);
const CircleSwatch = styled.div.withConfig({
  displayName: "colorsstories__CircleSwatch",
  componentId: "sc-aevhof-1"
})(_t2 || (_t2 = _`
  background: ${0};
  border-radius: 50%;
  box-shadow: ${0};
  display: flex;
  height: 3rem;
  justify-content: space-between;
  padding: ${0};
  width: 3rem;
`), ({
  color
}) => color, ({
  theme
}) => theme.elevations.plus3, ({
  theme
}) => theme.space.u1);
export const AllColors = () => {
  const colors = sortedColorsArray.map(([name, color]) => {
    return {
      color
    };
  });
  const colorSwatches = colors.map(({
    color
  }, index) => React.createElement(CircleSwatch, {
    key: index,
    color: color
  }));
  return React.createElement(GridLayout, null, colorSwatches);
};
export default {
  title: 'Design Tokens / Colors'
};
//# sourceMappingURL=colors.stories.js.map