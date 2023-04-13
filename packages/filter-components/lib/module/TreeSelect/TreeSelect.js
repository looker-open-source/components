import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["disabled", "disabledText", "placeholder", "label", "tree", "shortcutTree", "withDropdown", "treeHeight", "searchInputValue", "selectedSection", "showSelectedSection", "onSelectedFieldChange"];
import { Box, inputHeight, SpaceVertical, useID } from '@looker/components';
import React from 'react';
import { TreeResults } from './TreeResults';
import { FieldSearch } from './FieldSearch';
import { TreeSelectPopup } from './TreeSelectPopup';
export const TreeSelect = _ref => {
  let {
      disabled,
      disabledText,
      placeholder,
      label,
      tree,
      shortcutTree,
      withDropdown = true,
      treeHeight,
      searchInputValue: valueFromProps,
      selectedSection,
      showSelectedSection = false,
      onSelectedFieldChange
    } = _ref,
    flexProps = _objectWithoutProperties(_ref, _excluded);
  const [inputElement, setInputElement] = React.useState(null);
  const isInputting = React.useRef(false);
  const [isOpen, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(valueFromProps || '');
  const fieldSearchInputId = useID();
  React.useEffect(() => {
    if (!isInputting.current) {
      if (showSelectedSection && !isOpen) {
        setInputValue(valueFromProps && selectedSection ? `${selectedSection} • ${valueFromProps}` : '');
      } else {
        setInputValue(valueFromProps || '');
      }
    }
  }, [showSelectedSection, isOpen, valueFromProps, selectedSection]);
  const setOpenTrue = () => setOpen(true);
  const handleClick = () => {
    if (!isOpen && !disabled) {
      setOpenTrue();
      if (valueFromProps) setInputValue(valueFromProps);
    }
  };
  const handleFieldClick = payload => {
    if (onSelectedFieldChange) {
      onSelectedFieldChange(payload);
    }
    setOpen(false);
  };
  const onChange = event => {
    isInputting.current = true;
    setInputValue(event.currentTarget.value);
    setOpenTrue();
    window.requestAnimationFrame(() => isInputting.current = false);
  };
  const innerTree = React.createElement(TreeResults, {
    shortcutTree: shortcutTree,
    tree: tree,
    onSelectedFieldChange: handleFieldClick,
    searchInputValue: inputValue
  });
  return React.createElement(SpaceVertical, {
    align: "stretch"
  }, React.createElement(FieldSearch, {
    disabled: disabled,
    disabledText: disabledText,
    fieldSearchInputId: fieldSearchInputId,
    height: inputHeight,
    label: label,
    onChange: onChange,
    onClick: handleClick,
    placeholder: placeholder,
    ref: setInputElement,
    value: inputValue,
    width: "100%",
    isOpen: isOpen,
    withDropdown: withDropdown,
    showSelectedSection: showSelectedSection
  }), withDropdown ? React.createElement(TreeSelectPopup, {
    anchorElement: inputElement,
    isOpen: isOpen,
    setOpen: setOpen
  }, innerTree) : React.createElement(Box, {
    overflow: "auto",
    height: treeHeight
  }, innerTree));
};
//# sourceMappingURL=TreeSelect.js.map