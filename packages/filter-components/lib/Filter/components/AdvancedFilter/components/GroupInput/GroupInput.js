import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["type", "width"];
import omit from 'lodash/omit';
import { InputText } from '@looker/components';
import React from 'react';
import styled from 'styled-components';
import { inputPlacementStyle } from '../../../../utils/filter_styles';

const InputLayout = _ref => {
  let {
    type = 'number',
    width = '80px'
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const inputValidator = evt => {
    if (evt.target && evt.currentTarget.value) {
      evt.currentTarget.value = evt.currentTarget.value.toString().replace(/\D/g, '');
    }
  };

  return React.createElement(InputText, _extends({
    autoResize: true,
    onInput: inputValidator,
    type: type
  }, omit(props, 'placement')));
};

export const GroupInput = styled(InputLayout).attrs(({
  placement: _placement = 'middle'
}) => ({
  placement: _placement
})).withConfig({
  displayName: "GroupInput",
  componentId: "sc-rdk5zh-0"
})(_t || (_t = _`
  ${0}
  input {
    text-align: right;
  }
`), inputPlacementStyle);
//# sourceMappingURL=GroupInput.js.map