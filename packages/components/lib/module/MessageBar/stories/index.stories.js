
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { MessageBar } from '../MessageBar';
export { default as Basic } from './Basic';
export { default as NoAction } from './NoAction';
export { default as CustomAction } from './CustomAction';
export { default as Controlled } from './Controlled';
export { default as Intent } from './Intent';
export default {
  argTypes,
  component: MessageBar,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/MessageBar'
};
//# sourceMappingURL=index.stories.js.map