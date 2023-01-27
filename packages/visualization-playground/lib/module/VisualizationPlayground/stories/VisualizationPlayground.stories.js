

import React from 'react';
import { VisualizationPlayground } from '../VisualizationPlayground';
export default {
  component: VisualizationPlayground,
  title: 'Visualizations/Playground'
};
const Template = props => {
  return React.createElement(VisualizationPlayground, props);
};
export const Playground = Template.bind({});
Playground.args = {};
Playground.parameters = {
  beforeScreenshot: async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
};
//# sourceMappingURL=VisualizationPlayground.stories.js.map