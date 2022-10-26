import React from 'react';
import { VisualizationPlayground } from '../VisualizationPlayground';

const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

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
    await sleep(10);
  }
};
//# sourceMappingURL=VisualizationPlayground.stories.js.map