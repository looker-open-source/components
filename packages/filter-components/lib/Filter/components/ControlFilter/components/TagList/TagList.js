import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["value", "options", "onChange", "onInputChange", "validationMessage"];
import { InputText, SelectMulti } from '@looker/components';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { tokenStylePlaceholder } from '../../../../utils/filter_styles';
import { useOptionFiltering } from '../../../../utils/use_option_filtering';
import { usePlaceholder } from '../../../../utils/use_placeholder';

const TagListComponent = _ref => {
  let {
    value,
    options,
    onChange,
    onInputChange,
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

  const handleChange = newValues => {
    onChange(newValues || []);
  };

  const placeholderProps = usePlaceholder(value, validationMessage);
  const resizeHappened = useRef();
  useEffect(() => {
    if (options.length && !resizeHappened.current) {
      window.dispatchEvent(new Event('resize'));
      resizeHappened.current = true;
    }
  }, [options.length]);
  return React.createElement(SelectMulti, _extends({}, props, placeholderProps, {
    removeOnBackspace: false,
    values: value,
    onChange: handleChange,
    isFilterable: true,
    onFilter: onFilter,
    options: filteredOptions,
    noOptionsLabel: noOptionsLabel,
    width: 410,
    maxWidth: "100%",
    maxHeight: 145,
    listLayout: {
      maxWidth: ['95vw', '90vw', '80vw', '65vw', '50vw'],
      width: 'auto'
    },
    noErrorIcon: true,
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type
  }));
};

export const TagList = styled(TagListComponent).withConfig({
  displayName: "TagList",
  componentId: "sc-s3oxgm-0"
})(_t || (_t = _`
  ${0} {
    ${0}
  }
`), InputText, tokenStylePlaceholder);
//# sourceMappingURL=TagList.js.map