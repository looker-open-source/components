let _ = t => t,
    _t;

import styled from 'styled-components';
import { OverlaySurface, OverlaySurfaceContentArea } from '../Overlay/OverlaySurface';
export const NestedMenuSurface = styled(OverlaySurface).withConfig({
  displayName: "NestedMenuSurface",
  componentId: "sc-5ytfs8-0"
})(_t || (_t = _`
  &[data-placement] {
    padding: 0;
  }
  ${0} {
    box-shadow: ${0};
  }
`), OverlaySurfaceContentArea, ({
  theme
}) => theme.elevations.plus2);
//# sourceMappingURL=NestedMenuSurface.js.map