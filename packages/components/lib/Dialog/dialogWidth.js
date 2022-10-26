import { system } from '@looker/design-tokens';
export const dialogSizes = {
  xxsmall: '16rem',
  xsmall: '21rem',
  small: '28rem',
  medium: '40rem',
  large: '50rem'
};
export const dialogWidth = system({
  width: {
    property: 'width',
    scale: 'dialogSizes',
    defaultScale: dialogSizes
  }
});
//# sourceMappingURL=dialogWidth.js.map