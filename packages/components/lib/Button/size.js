import { variant } from '@looker/design-tokens';
export const buttonSizeMap = {
  xxsmall: 20,
  xsmall: 24,
  small: 28,
  medium: 36,
  large: 44
};
export const iconButtonIconSizeMap = {
  xxsmall: 'xxsmall',
  xsmall: 'xsmall',
  small: 'small',
  medium: 'small',
  large: 'medium'
};
export const buttonIconSizeMap = {
  xxsmall: 'xxxsmall',
  xsmall: 'xxxsmall',
  small: 'xxsmall',
  medium: 'xsmall',
  large: 'small'
};
export const buttonPadding = (hasIcon, size) => {
  switch (size) {
    case 'xxsmall':
      return 'xsmall';

    case 'xsmall':
      return 'small';

    case 'small':
      return hasIcon ? 'small' : 'large';

    case 'medium':
    case 'large':
    default:
      return hasIcon ? 'medium' : '1.5rem';
  }
};
export const buttonSize = variant({
  prop: 'size',
  variants: {
    xxsmall: {
      fontSize: 'xxsmall',
      height: `${buttonSizeMap.xxsmall}px`
    },
    xsmall: {
      fontSize: 'xxsmall',
      height: `${buttonSizeMap.xsmall}px`
    },
    small: {
      fontSize: 'xsmall',
      height: `${buttonSizeMap.small}px`
    },
    medium: {
      fontSize: 'small',
      height: `${buttonSizeMap.medium}px`
    },
    large: {
      fontSize: 'large',
      height: `${buttonSizeMap.large}px`
    }
  }
});
//# sourceMappingURL=size.js.map