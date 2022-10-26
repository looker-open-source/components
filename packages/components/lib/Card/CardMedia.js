let _ = t => t,
    _t;

import styled from 'styled-components';
import { backgroundPosition, shouldForwardProp, backgroundColor } from '@looker/design-tokens';
export const CardMedia = styled.div.withConfig({
  shouldForwardProp,
  displayName: "CardMedia",
  componentId: "sc-1y4pdp-0"
})(_t || (_t = _`
  ${0}
  background-image: url(${0});
  background-repeat: no-repeat;
  ${0}
  background-size: cover;
  height: 0;
  overflow: hidden;
  padding-top: 56%;
`), backgroundColor, ({
  image
}) => image, backgroundPosition);
//# sourceMappingURL=CardMedia.js.map