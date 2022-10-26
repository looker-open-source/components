import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t;

import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import omit from 'lodash/omit';
import { FloatingLabelField, omitFieldProps, pickFieldProps } from '../Field';
import { getHasValue } from '../Field/useFloatingLabel';
import { useFormContext } from '../../Form';
import { Tooltip } from '../../../Tooltip';
import { useID, useTranslation } from '../../../utils';
import { InputTimeSelect } from '../../Inputs/InputTimeSelect';
import { VisuallyHidden } from '../../../VisuallyHidden';
export const FieldTimeSelect = styled(forwardRef((props, ref) => {
  const validationMessage = useFormContext(props);
  const id = useID(props.id);
  const fieldProps = omit(omitFieldProps(props), ['onChange']);
  const [formatError, setFormatError] = useState('');
  const {
    t
  } = useTranslation('FieldTimeSelect');

  const onChange = value => {
    props.onChange && props.onChange(value);

    if (value) {
      setFormatError('');
    } else {
      setFormatError(t('Please use format HHMM'));
    }
  };

  const onBlur = () => {
    setFormatError('');
  };

  const errorMessage = formatError ? {
    message: formatError,
    type: 'error'
  } : validationMessage;
  return React.createElement(FloatingLabelField, _extends({
    "data-testid": "FieldSelectMultiId"
  }, pickFieldProps(props), {
    id: id,
    hasValue: getHasValue(props)
  }), React.createElement(Tooltip, {
    placement: "top-end",
    content: formatError,
    isOpen: true,
    canClose: () => false
  }, React.createElement("div", null, React.createElement(VisuallyHidden, {
    "aria-live": "polite"
  }, formatError), React.createElement(InputTimeSelect, _extends({}, fieldProps, {
    "aria-labelledby": `labelledby-${id}`,
    id: id,
    validationType: errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.type,
    ref: ref,
    onChange: onChange,
    onBlur: onBlur
  })))));
})).withConfig({
  displayName: "FieldTimeSelect",
  componentId: "sc-18cfbnj-0"
})(_t || (_t = _``));
//# sourceMappingURL=FieldTimeSelect.js.map