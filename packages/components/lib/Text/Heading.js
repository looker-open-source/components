let _ = t => t,
    _t;

import styled from 'styled-components';
import { textTransform } from '@looker/design-tokens';
import { TextBase } from './TextBase';
import { truncateCSS } from './truncate';

const headingLevelFontSize = as => {
  switch (as) {
    case 'h1':
      return 'xxlarge';

    case 'h3':
      return 'large';

    case 'h4':
      return 'medium';

    case 'h5':
      return 'small';

    case 'h6':
      return 'xsmall';

    case 'h2':
    default:
      return 'xlarge';
  }
};

const headingLineHeight = (as, fontSize) => fontSize || headingLevelFontSize(as);

export const Heading = styled(TextBase).attrs(({
  as: _as = 'h2',
  color: _color = 'title',
  fontFamily: _fontFamily = 'brand',
  fontSize,
  fontWeight: _fontWeight = 'normal',
  lineHeight
}) => ({
  as: _as,
  color: _color,
  fontFamily: _fontFamily,
  fontSize: fontSize || headingLevelFontSize(_as),
  fontWeight: _fontWeight,
  lineHeight: lineHeight || headingLineHeight(_as, fontSize)
})).withConfig({
  displayName: "Heading",
  componentId: "sc-63s0tz-0"
})(_t || (_t = _`
  ${0}
  ${0}
`), textTransform, truncateCSS);
//# sourceMappingURL=Heading.js.map