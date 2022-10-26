let _ = t => t,
    _t;

import { css } from 'styled-components';
import { Divider } from '../../Divider';
export const listPadding = css(_t || (_t = _`
  > :first-child {
    margin-top: ${0};

    ${0} {
      display: none;
    }
  }

  > :last-child {
    margin-bottom: ${0};

    ${0} {
      display: none;
    }
  }
`), ({
  theme
}) => theme.space.u2, Divider, ({
  theme
}) => theme.space.u2, Divider);
//# sourceMappingURL=listPadding.js.map