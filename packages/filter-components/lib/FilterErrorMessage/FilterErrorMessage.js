import { Icon, Space, Span } from '@looker/components';
import { Error } from '@styled-icons/material-outlined/Error';
import React from 'react';
import { useFiltersErrors } from './use_filters_errors';
import { ERROR_TYPE } from '../constants';
export const FilterErrorMessage = ({
  filters,
  userAttributes,
  useLongMessageForm
}) => {
  const options = {
    userAttributes,
    useLongMessageForm
  };
  const filterErrors = useFiltersErrors(filters, options);
  return filterErrors.type === ERROR_TYPE ? React.createElement(Space, {
    gap: "u2",
    mt: "xsmall"
  }, React.createElement(Icon, {
    icon: React.createElement(Error, null),
    color: "critical",
    size: "xsmall"
  }), React.createElement(Span, {
    color: "critical",
    fontSize: "xsmall"
  }, filterErrors.message)) : null;
};
//# sourceMappingURL=FilterErrorMessage.js.map