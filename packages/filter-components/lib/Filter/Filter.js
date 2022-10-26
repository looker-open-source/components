import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["expression", "type", "expressionType", "loadUserAttributes", "skipFilterConfigCheck"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { getExpressionType, typeToGrammar, hasUserAttributeNode, parseFilterExpression, updateNode } from '@looker/filter-expressions';
import isEmpty from 'lodash/isEmpty';
import React, { useMemo, useRef, useState } from 'react';
import { useFilterConfig, useValidationMessage } from './utils';
import { updateASTFromProps } from './utils/update_ast';
import { isValidFilterType } from './utils/filter_token_type_map';
import { ControlFilter } from './components/ControlFilter';
import { AdvancedFilter } from './components/AdvancedFilter';
export const Filter = _ref => {
  let {
    expression,
    type,
    expressionType: propsExpressionType,
    loadUserAttributes,
    skipFilterConfigCheck
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const expressionType = useMemo(() => {
    return propsExpressionType || getExpressionType({
      type,
      field: props.field || undefined
    });
  }, [propsExpressionType, type, props.field]);
  const validationMessage = useValidationMessage(expression, props.isRequired);

  const getAST = () => updateASTFromProps(expressionType, expression, props.userAttributes);

  const [ast, setAST] = useState(getAST);
  const expressionRef = useRef(expression);
  const typeRef = useRef(expressionType);
  const internallyUpdating = useRef(false);

  if (!internallyUpdating.current && (expressionRef.current !== expression || typeRef.current !== expressionType)) {
    setAST(getAST);
    expressionRef.current = expression;
    typeRef.current = expressionType;
  }

  const updateExpression = newAST => {
    const {
      toString
    } = typeToGrammar(expressionType);

    if (newAST.type === 'matchesAdvanced') {
      if (newAST.expression === undefined || newAST.expression === null) {
        return expression;
      } else return newAST.expression;
    } else {
      return toString(newAST, expressionType, props.field || undefined);
    }
  };

  const updateAST = newAST => {
    internallyUpdating.current = true;
    requestAnimationFrame(() => {
      internallyUpdating.current = false;
    });
    setAST(newAST);

    if (newAST) {
      if (loadUserAttributes && isEmpty(props.userAttributes) && hasUserAttributeNode(newAST)) {
        loadUserAttributes();
      } else {
        try {
          var _props$onChange;

          const newExpression = updateExpression(newAST);
          parseFilterExpression(expressionType, newExpression, props.userAttributes);
          expressionRef.current = newExpression;
          (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, {
            expression: newExpression
          });
        } catch ({
          message
        }) {}
      }
    }
  };

  const {
    uiConfig: config
  } = useFilterConfig({
    ast: ast,
    config: props.config,
    field: props.field,
    suggestions: props.suggestions,
    enumerations: props.enumerations,
    skipFilterConfigCheck
  });
  const isControlFilter = config && isValidFilterType(config.type);

  const changeFilter = (id, newItem) => {
    if (ast) {
      if (isControlFilter) {
        var _props$onChange2;

        (_props$onChange2 = props.onChange) === null || _props$onChange2 === void 0 ? void 0 : _props$onChange2.call(props, {
          expression: updateExpression(newItem)
        });
      } else {
        const item = newItem.type === 'matchesAdvanced' ? _objectSpread(_objectSpread({}, newItem), {}, {
          expression: newItem.expression === undefined || newItem.expression === null ? expression : newItem.expression
        }) : _objectSpread(_objectSpread({}, newItem), {}, {
          expression: null
        });
        updateAST(updateNode(ast, id, item));
      }
    }
  };

  if (!ast) return null;
  return isControlFilter ? React.createElement(ControlFilter, _extends({}, props, {
    config: config,
    expressionType: expressionType,
    ast: ast,
    changeFilter: changeFilter,
    validationMessage: validationMessage
  })) : React.createElement(AdvancedFilter, _extends({}, props, {
    config: config,
    expressionType: expressionType,
    ast: ast,
    updateAST: updateAST,
    changeFilter: changeFilter,
    validationMessage: validationMessage
  }));
};
//# sourceMappingURL=Filter.js.map