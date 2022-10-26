let _ = t => t,
    _t;

import styled from 'styled-components';
import { ListItemLabel } from '../ListItem';
import { generateIndent } from '../Tree/utils';
import { lkFieldItemDensity } from './defaults';
export const LkFieldItemContent = styled.div.attrs(({
  role: _role = 'treeitem'
}) => ({
  role: _role
})).withConfig({
  displayName: "LkFieldItemContent",
  componentId: "sc-vth29c-0"
})(_t || (_t = _`
  ${0} {
    /*
      Height and padding normally get set by both the icon and label containers, but we're removing the
      vertical padding on the label container to avoid hover disclosed icons from expanding items
      in the core Looker Field Picker
    */
    padding: 0;

    /* Horizontal label padding to avoid text from bumping agaisnt background */
    padding-left: ${0};
  }

  ${0}

  /*
    IconButtons with hovered / selected backgrounds sit above
    a non-absolutely positioned box-shadow. Absolute positioning
    and a z-index gets the box-shadow to sit above ListItem children
    with background colors.
  */
  ${0}

  /*
    Normal TreeItemContent calculates background color, but in LkFieldItem's case,
    the background exists on the LkFieldItemLabel container to get the "label background
    only" styling.
  */
  background: none;

  color: inherit;
  cursor: ${0};
  display: flex;
  flex: 1;
  font-size: inherit;
  font-weight: inherit;
  margin: 0; /* safari has default margin */
  min-width: 0;
  outline: none;

  /*
    Supports absolutely positioned box-shadow
  */
  position: relative;

  text-align: left;
  text-decoration: none;
  width: 100%;

  &:hover,
  &:focus {
    color: inherit;
    text-decoration: none;
  }

  &[disabled] {
    color: ${0};
    cursor: not-allowed;
  }
`), ListItemLabel, ({
  theme
}) => theme.space.xxsmall, ({
  depth
}) => generateIndent({
  density: lkFieldItemDensity,
  depth
}), ({
  focusVisible,
  theme
}) => focusVisible && `
    &::after {
      bottom: 0;
      box-shadow: inset 0 0 0 2px ${theme.colors.keyFocus};
      content: '';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
    }
  `, ({
  cursorPointer
}) => cursorPointer ? 'pointer' : undefined, ({
  theme
}) => theme.colors.text1);
//# sourceMappingURL=LkFieldItemContent.js.map