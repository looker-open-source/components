import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t,
    _t2;

const _excluded = ["value", "options", "onChange", "onInputChange", "anyOption", "validationMessage"];
import { InputText, Select } from '@looker/components';
import React from 'react';
import styled, { css } from 'styled-components';
import { tokenStylePlaceholder } from '../../../../utils/filter_styles';
import { useOptionFiltering } from '../../../../utils/use_option_filtering';
import { usePlaceholder } from '../../../../utils/use_placeholder';

const DropdownMenuComponent = _ref => {
  let {
    value,
    options,
    onChange,
    onInputChange,
    anyOption,
    validationMessage
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    filteredOptions,
    noOptionsLabel,
    onFilter
  } = useOptionFiltering({
    value,
    options,
    onInputChange
  });
  const placeholderProps = usePlaceholder(value, validationMessage);
  return React.createElement(Select, _extends({}, props, placeholderProps, {
    options: filteredOptions,
    noOptionsLabel: noOptionsLabel,
    isClearable: anyOption,
    value: value,
    onChange: onChange,
    isFilterable: true,
    onFilter: onFilter,
    minWidth: "12rem",
    maxWidth: "20rem",
    autoResize: true,
    listLayout: {
      maxWidth: ['95vw', '90vw', '80vw', '65vw', '50vw'],
      width: 'auto'
    },
    noErrorIcon: true,
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type
  }));
};

export const DropdownMenu = styled(DropdownMenuComponent).withConfig({
  displayName: "DropdownMenu",
  componentId: "sc-12r3rn4-0"
})(_t || (_t = _`
  ${0} {
    ${0}
    ${0}
  }
`), InputText, tokenStylePlaceholder, ({
  tokenStyle,
  value
}) => value !== '' && tokenStyle ? css(_t2 || (_t2 = _`
            background-color: ${0};
            color: ${0};
            &:not(:focus-within) {
              border-color: ${0};
            }
            &:hover {
              border: 1px solid ${0};
            }
          `), ({
  theme
}) => theme.colors.keyAccent, ({
  theme
}) => theme.colors.text5, ({
  theme
}) => theme.colors.ui2, ({
  theme
}) => theme.colors.keyInteractive) : '');
//# sourceMappingURL=DropdownMenu.js.map