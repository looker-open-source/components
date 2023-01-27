import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { Component } from 'react';
import { Heading } from '@looker/components';
import { Translation } from 'react-i18next';
import { Debug } from '../Debug';
import { formatErrorMessage } from '../utils';
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: new Error(''),
      hasError: false
    };
  }
  static getDerivedStateFromError(error) {
    return {
      errorMessage: error,
      hasError: true
    };
  }
  componentDidCatch(errorMessage, stackTrace) {
    this.setState(state => _objectSpread(_objectSpread({}, state), {}, {
      errorMessage,
      stackTrace
    }));
  }
  render() {
    if (this.state.hasError) {
      const {
        errorMessage,
        stackTrace
      } = this.state;
      return React.createElement(React.Fragment, null, React.createElement(Heading, null, React.createElement(Translation, {
        ns: "ErrorBoundary"
      }, t => {
        return t('Something went wrong');
      })), React.createElement(Debug, _extends({
        ok: false,
        error: _objectSpread({
          message: formatErrorMessage(errorMessage)
        }, stackTrace)
      }, this.props)));
    }
    return this.props.children;
  }
}
//# sourceMappingURL=ErrorBoundary.js.map