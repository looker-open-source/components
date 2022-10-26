let _ = t => t,
    _t;

import styled from 'styled-components';
import { Layout } from './Layout';
export const Page = styled(Layout).withConfig({
  displayName: "Page",
  componentId: "sc-rsmni7-0"
})(_t || (_t = _`
  background: ${0};
  font-family: ${0};

  ${0}
  width: 100%;
`), ({
  theme
}) => theme.colors.pageBackground, ({
  theme
}) => theme.fonts.body, ({
  fixed
}) => fixed && `height: 100vh;`);
//# sourceMappingURL=Page.js.map