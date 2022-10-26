let _ = t => t,
    _t;

import React from 'react';
import styled from 'styled-components';
import { Select } from '../Form';
import { useTranslation } from '../utils';
const defaultPageSizes = [10, 25, 50, 100];

const stringToSelectOption = option => ({
  label: String(option),
  value: String(option)
});

const arrayToSelectOptions = options => options.map(option => stringToSelectOption(String(option)));

export const PageSizeLayout = ({
  alwaysVisible: _alwaysVisible = false,
  value,
  total,
  className,
  onChange,
  options: _options = defaultPageSizes
}) => {
  const {
    t
  } = useTranslation('PageSize');

  const handleOnChange = newValue => onChange(Number(newValue));

  return _alwaysVisible || Math.min(..._options) < total ? React.createElement("div", {
    className: className
  }, t('Display'), React.createElement(Select, {
    width: "5rem",
    mx: "xsmall",
    options: arrayToSelectOptions(_options),
    value: String(value > total ? total : value),
    onChange: handleOnChange,
    disabled: _options.every(option => option > total)
  }), React.createElement("span", null, t('of'), " ", total)) : null;
};
export const PageSize = styled(PageSizeLayout).withConfig({
  displayName: "PageSize",
  componentId: "sc-lmdbtc-0"
})(_t || (_t = _`
  align-items: center;
  display: flex;
  font-size: ${0};
`), ({
  theme
}) => theme.fontSizes.small);
//# sourceMappingURL=PageSize.js.map