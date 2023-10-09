import { VIEWPORT_MAP } from '../../utils-storybook';
export { default as Desktop } from './Desktop';
export { default as DesktopXL } from './DesktopXL';
export { default as MobileLaptop } from './MobileLaptop';
export { default as XL } from './XL';
export default {
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true
      }
    },
    storyshots: {
      disable: true
    },
    viewport: {
      defaultViewport: 'desktop',
      viewports: VIEWPORT_MAP
    }
  },
  title: 'Stories/Breakpoint'
};
//# sourceMappingURL=index.stories.js.map