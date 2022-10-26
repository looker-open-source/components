import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t,
    _t2;

const _excluded = ["id", "children", "intent", "visible", "onPrimaryClick", "onSecondaryClick", "primaryAction", "secondaryAction", "noActions"];
import { omitStyledProps, variant } from '@looker/design-tokens';
import { Close } from '@styled-icons/material/Close';
import noop from 'lodash/noop';
import isUndefined from 'lodash/isUndefined';
import React, { forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { IconButton, ButtonTransparent } from '../Button';
import { Space } from '../Layout/Space';
import { simpleLayoutCSS } from '../Layout/utils/simple';
import { useReadOnlyWarn, useTranslation } from '../utils';
import { getIntentLabel, Status } from '../Status';

const NoopComponent = () => React.createElement(React.Fragment, null);

function getPrimaryActionButton(t, primaryAction) {
  switch (typeof primaryAction) {
    case 'string':
      return ({
        onClick
      }) => React.createElement(ButtonTransparent, {
        onClick: onClick
      }, primaryAction);

    case 'object':
      return () => primaryAction;

    default:
      return ({
        intent,
        onClick,
        id
      }) => React.createElement(IconButton, {
        id: id ? `${id}-iconButton` : undefined,
        onClick: onClick,
        icon: React.createElement(Close, null),
        size: "small",
        label: `${t('DismissIntent', {
          intent: getIntentLabel(t, intent),
          ns: 'MessageBar'
        })}`
      });
  }
}

function getSecondaryActionButton(secondaryAction) {
  switch (typeof secondaryAction) {
    case 'string':
      return ({
        onClick
      }) => React.createElement(ButtonTransparent, {
        onClick: onClick,
        color: "neutral"
      }, secondaryAction);

    case 'object':
      return () => secondaryAction;

    default:
      return NoopComponent;
  }
}

const MessageBarLayout = forwardRef((_ref, ref) => {
  let {
    id,
    children,
    intent = 'inform',
    visible: visibleProp,
    onPrimaryClick = noop,
    onSecondaryClick = noop,
    primaryAction,
    secondaryAction,
    noActions = false
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  useReadOnlyWarn('MessageBar', visibleProp, onPrimaryClick);
  const [visible, setVisible] = useState(isUndefined(visibleProp) ? true : visibleProp);

  const handlePrimaryClick = () => {
    setVisible(visibleProp || false);
    onPrimaryClick();
  };

  const handleSecondaryClick = () => {
    setVisible(visibleProp || false);
    onSecondaryClick();
  };

  useEffect(() => {
    if (!isUndefined(visibleProp)) {
      setVisible(visibleProp);
    }
  }, [visibleProp]);
  const {
    t
  } = useTranslation('MessageBar');
  const PrimaryButton = getPrimaryActionButton(t, primaryAction);
  const SecondaryButton = getSecondaryActionButton(secondaryAction);
  const messageBarMarkup = React.createElement("div", _extends({
    "aria-live": "polite",
    ref: ref,
    role: "status"
  }, omitStyledProps(props)), React.createElement(Status, {
    intent: intent
  }), React.createElement(MessageBarContent, null, children), !noActions && React.createElement(Space, {
    width: "auto"
  }, React.createElement(SecondaryButton, {
    onClick: handleSecondaryClick
  }), React.createElement(PrimaryButton, {
    intent: intent,
    onClick: handlePrimaryClick,
    id: id
  })));
  return visible ? messageBarMarkup : null;
});
MessageBarLayout.displayName = 'MessageBarLayout';
const MessageBarContent = styled.div.withConfig({
  displayName: "MessageBar__MessageBarContent",
  componentId: "sc-11gt222-0"
})(_t || (_t = _`
  flex-grow: 1;
  padding: 0 ${0};
`), ({
  theme: {
    space
  }
}) => space.u5);
const backgroundColor = variant({
  prop: 'intent',
  variants: {
    critical: {
      backgroundColor: 'criticalAccent'
    },
    inform: {
      backgroundColor: 'informAccent'
    },
    positive: {
      backgroundColor: 'positiveAccent'
    },
    warn: {
      backgroundColor: 'warnAccent'
    }
  }
});
export const MessageBar = styled(MessageBarLayout).attrs(({
  intent: _intent = 'inform',
  px: _px = 'medium',
  py: _py = 'small',
  width: _width = '100%'
}) => ({
  intent: _intent,
  px: _px,
  py: _py,
  width: _width
})).withConfig({
  displayName: "MessageBar",
  componentId: "sc-11gt222-1"
})(_t2 || (_t2 = _`
  ${0}
  align-items: center;
  ${0}
  border-radius: ${0};
  color: ${0};
  display: flex;
  font-size: ${0};
`), simpleLayoutCSS, backgroundColor, ({
  theme: {
    radii
  }
}) => radii.medium, ({
  theme: {
    colors
  }
}) => colors.text5, ({
  theme: {
    fontSizes
  }
}) => fontSizes.small);
//# sourceMappingURL=MessageBar.js.map