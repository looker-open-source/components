import React, { createContext, useContext, useState } from 'react';
import { FilterList, MoreVert, SubdirectoryArrowLeft } from '@styled-icons/material';
import { Info } from '@styled-icons/material-outlined';
import { IconButton, Menu, MenuItem, Tooltip, Flex, Truncate } from '../..';
import { LkFieldItem } from '..';
import { HoverDisclosure } from '../../utils';
import { listItemDimensions } from '../../ListItem';
import { ReplaceText, Span } from '../../Text';
export const HighlightContext = createContext({
  term: ''
});
export const FieldPickerItem = ({
  children: _children = 'Cost',
  color: _color = 'dimension',
  filter: _filter = false,
  pivot: _pivot = false,
  selected: _selected = false
}) => {
  const [isFieldMenuOpen, setIsFieldMenuOpen] = useState(false);
  const {
    term
  } = useContext(HighlightContext);
  const [isFilter, setIsFilter] = useState(_filter);
  const [isPivot, setIsPivot] = useState(_pivot);
  const [isSelected, setIsSelected] = useState(_selected);

  const toggleMenu = () => isFieldMenuOpen ? setIsFieldMenuOpen(false) : setIsFieldMenuOpen(true);

  const detailContent = React.createElement(React.Fragment, null, React.createElement(Tooltip, {
    placement: "top",
    content: "Some exciting info or something"
  }, React.createElement(IconButton, {
    shape: "square",
    icon: React.createElement(Info, null),
    label: "Info"
  })), React.createElement(Menu, {
    isOpen: isFieldMenuOpen,
    setOpen: toggleMenu,
    density: -1,
    content: React.createElement(React.Fragment, null, React.createElement(MenuItem, null, "Brie"), React.createElement(MenuItem, null, "Cheddar"), React.createElement(MenuItem, null, "Gouda"))
  }, React.createElement(IconButton, {
    shape: "square",
    icon: React.createElement(MoreVert, null),
    label: "Options",
    tooltipPlacement: "top"
  })));

  const toggleField = () => setIsSelected(!isSelected);

  const {
    height
  } = listItemDimensions(-3);
  return React.createElement(LkFieldItem, {
    color: _color,
    selected: isSelected,
    detail: {
      content: detailContent,
      options: {
        accessory: true,
        hoverDisclosure: !isFieldMenuOpen,
        width: 48
      }
    },
    onKeyDown: event => {
      if (event.key === 'Enter' && event.metaKey) {
        alert(`CMD + Enter'ed on ${_children}!`);
      } else if (event.key === 'Enter' && event.currentTarget === event.target) {
        toggleField();
      }
    }
  }, React.createElement(Flex, null, React.createElement(Flex, {
    onClick: toggleField,
    height: height,
    alignItems: "center",
    overflow: "hidden",
    width: "100%"
  }, React.createElement(Truncate, null, React.createElement(ReplaceText, {
    match: term,
    replace: (str, index) => React.createElement(Span, {
      fontWeight: "semiBold",
      textDecoration: "underline",
      key: index
    }, str)
  }, _children))), React.createElement(HoverDisclosure, {
    visible: isPivot
  }, React.createElement(IconButton, {
    icon: React.createElement(SubdirectoryArrowLeft, null),
    onClick: () => setIsPivot(!isPivot),
    shape: "square",
    toggle: isPivot,
    toggleBackground: true,
    toggleColor: _color,
    label: "Pivot",
    tooltipPlacement: "top"
  })), React.createElement(HoverDisclosure, {
    visible: isFilter,
    width: isPivot ? 24 : undefined
  }, React.createElement(IconButton, {
    onClick: () => setIsFilter(!isFilter),
    shape: "square",
    toggle: isFilter,
    toggleBackground: true,
    toggleColor: _color,
    icon: React.createElement(FilterList, null),
    label: "Filter",
    tooltipPlacement: "top"
  }))));
};
//# sourceMappingURL=FieldPickerItem.js.map