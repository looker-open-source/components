let _ = t => t,
    _t,
    _t2;

import React, { Fragment } from 'react';
import styled from 'styled-components';
import sortBy from 'lodash/sortBy';
import { Tooltip } from '../../components/src';
import { theme } from './theme';
const CELL_SIZE = '3rem';
const sortedColorsArray = sortBy(Object.entries(theme.colors), 0);
export const AllColors = () => {
  const colors = sortedColorsArray.map(([name, color]) => {
    return {
      color,
      label: `${name} - ${color}`
    };
  });
  return React.createElement(MiniSwatches, null, colors);
};
export const GroupedByOutput = () => {
  const grouped = {};
  sortedColorsArray.forEach(([name, color]) => {
    if (grouped[color]) {
      grouped[color] = [...grouped[color], name];
    } else {
      grouped[String(color)] = [name];
    }
  });
  const colors = Object.entries(grouped).map(([color, entries]) => {
    const labels = entries.map((label, index) => React.createElement(Fragment, {
      key: index
    }, label, " ", React.createElement("br", null)));
    return {
      color,
      label: React.createElement(React.Fragment, null, React.createElement("strong", null, color), React.createElement("br", null), labels)
    };
  });
  return React.createElement(MiniSwatches, null, colors);
};
GroupedByOutput.parameters = {
  storyshots: {
    disable: true
  }
};
export default {
  title: 'Design Tokens / Colors'
};
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

const MiniSwatches = ({
  children
}) => {
  const colorSwatches = children.map(({
    label,
    color
  }, index) => React.createElement(Tooltip, {
    key: index,
    content: label,
    textAlign: "left"
  }, React.createElement(CircleSwatch, {
    color: color
  })));
  return React.createElement(GridLayout, null, colorSwatches);
};
//# sourceMappingURL=colors.stories.js.map