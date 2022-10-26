import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["isLoading", "value", "options", "anyOption"];
import { ProgressCircular, RadioGroup as RadioGroupComponent } from '@looker/components';
import compact from 'lodash/compact';
import pick from 'lodash/pick';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from '../../../../../utils';

const InternalRadioGroup = _ref => {
  let {
    isLoading,
    value = '',
    options,
    anyOption
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    t
  } = useTranslation('RadioGroup');
  const optionsWithAny = compact([anyOption && {
    label: t('any value'),
    value: ''
  }, ...options]);
  return isLoading ? React.createElement(ProgressCircular, {
    size: "medium"
  }) : React.createElement(RadioGroupComponent, _extends({
    options: optionsWithAny,
    value: value
  }, pick(props, ['inline', 'onChange'])));
};

export const RadioGroup = styled(InternalRadioGroup).withConfig({
  displayName: "RadioGroup",
  componentId: "sc-pk2me8-0"
})(_t || (_t = _``));
//# sourceMappingURL=RadioGroup.js.map