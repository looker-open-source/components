import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["accessory", "content"];
import React from 'react';
import { ListItemDetail } from '../ListItemDetail';
import { ListItemIcon } from '../ListItemIcon';
import { ListItemLabel } from '../ListItemLabel';
import { getDetailOptions } from './getDetailOptions';
export const createListItemPartitions = ({
  color,
  density,
  description,
  detail,
  disabled,
  icon,
  children,
  truncate
}) => {
  const iconProps = {
    alignStart: Boolean(description),
    children: icon,
    color,
    density,
    disabled
  };
  const labelProps = {
    children,
    color,
    density,
    description,
    disabled,
    truncate
  };

  const _getDetailOptions = getDetailOptions(detail),
        {
    accessory,
    content
  } = _getDetailOptions,
        options = _objectWithoutProperties(_getDetailOptions, _excluded);

  const renderedDetail = detail && React.createElement(ListItemDetail, _extends({
    accessory: accessory,
    density: density
  }, options), content);
  const inside = React.createElement(React.Fragment, null, icon && React.createElement(ListItemIcon, iconProps), React.createElement(ListItemLabel, labelProps), !accessory && renderedDetail);
  return [inside, accessory && renderedDetail];
};
//# sourceMappingURL=createListItemPartitions.js.map