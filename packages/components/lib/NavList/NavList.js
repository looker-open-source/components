let _ = t => t,
    _t;

import styled from 'styled-components';
import { TextBase } from '../Text/TextBase';
import { Truncate } from '../Truncate';
import { List } from '../List';
import { ListItem, ListItemContent, ListItemDetail, ListItemIcon } from '../ListItem';
import { NavTreeDisclosure } from '../NavTree/NavTreeDisclosure';
import { INDICATOR_SPACER } from '../NavTree';
export const NavList = styled(List).attrs(({
  color: _color = 'key'
}) => ({
  color: _color
})).withConfig({
  displayName: "NavList",
  componentId: "sc-6lju3j-0"
})(_t || (_t = _`
  ${0}, ${0} {
    border-bottom-right-radius: 5rem;
    border-top-right-radius: 5rem;

    &[aria-selected='true'] {
      ${0},
      ${0},
      ${0},
      ${0} svg {
        color: ${0};
      }
    }
  }

  ${0} {
    svg {
      transition: color
        ${0};
    }
  }

  & > ${0} {
    ${0} {
      padding-left: ${0};
    }
  }
`), NavTreeDisclosure, ListItemContent, ListItemDetail, TextBase, Truncate, ListItemIcon, ({
  theme
}) => theme.colors.key, ListItemIcon, ({
  theme
}) => `${theme.transitions.quick}ms ${theme.easings.ease}`, ListItem, ListItemContent, ({
  theme
}) => {
  const iconGutterSize = theme.sizes.medium;
  return `calc(${iconGutterSize} + ${INDICATOR_SPACER})`;
});
//# sourceMappingURL=NavList.js.map