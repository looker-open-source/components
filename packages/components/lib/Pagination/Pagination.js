import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t;

import React from 'react';
import styled from 'styled-components';
import { ChevronLeft } from '@styled-icons/material-rounded/ChevronLeft';
import { ChevronRight } from '@styled-icons/material-rounded/ChevronRight';
import { Flex } from '../Layout';
import { IconButton } from '../Button';
import { Span } from '../Text';
import { useTranslation } from '../utils';
import { DoubleChevronLeft } from './DoubleChevronLeft';
import { DoubleChevronRight } from './DoubleChevronRight';

const PaginationButton = props => React.createElement(IconButton, _extends({
  outline: true,
  shape: "square",
  mx: "xxsmall"
}, props));

const PaginationLayout = ({
  alwaysVisible: _alwaysVisible = false,
  className,
  current,
  pages,
  onChange
}) => {
  const {
    t
  } = useTranslation('Pagination');
  if (pages <= 1 && !_alwaysVisible) return null;

  const first = () => onChange(1);

  const previous = () => onChange(current - 1);

  const next = () => onChange(current + 1);

  const last = () => onChange(pages);

  return React.createElement(Flex, {
    alignItems: "center",
    className: className
  }, React.createElement(PaginationButton, {
    label: t('First page of results'),
    icon: React.createElement(DoubleChevronLeft, null),
    onClick: first,
    disabled: current === 1
  }), React.createElement(PaginationButton, {
    label: t('Previous page of results'),
    icon: React.createElement(ChevronLeft, null),
    onClick: previous,
    disabled: current === 1
  }), React.createElement(Span, {
    fontSize: "small",
    mx: "xxsmall"
  }, React.createElement("b", null, current), " ", t('of'), " ", pages), React.createElement(PaginationButton, {
    label: t('Next page of results'),
    icon: React.createElement(ChevronRight, null),
    onClick: next,
    disabled: pages - current === 0
  }), React.createElement(PaginationButton, {
    mr: "none",
    label: t('Last page of results'),
    icon: React.createElement(DoubleChevronRight, null),
    onClick: last,
    disabled: pages - current === 0
  }));
};

export const Pagination = styled(PaginationLayout).withConfig({
  displayName: "Pagination",
  componentId: "sc-kh6un3-0"
})(_t || (_t = _``));
//# sourceMappingURL=Pagination.js.map