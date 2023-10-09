import { system } from '@looker/design-tokens';
export const asideSizes = {
  rail: '3.5rem',
  navigation: '16rem',
  sidebar: '20rem'
};
export const asideWidth = system({
  width: {
    property: 'width',
    scale: 'asideSizes',
    defaultScale: asideSizes
  }
});
//# sourceMappingURL=asideWidth.js.map