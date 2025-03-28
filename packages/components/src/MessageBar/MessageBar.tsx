/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import type { TFunction } from 'i18next';
import type {
  CompatibleHTMLProps,
  TypographyProps,
  StatefulColor,
} from '@looker/design-tokens';
import { omitStyledProps, variant } from '@looker/design-tokens';
import { Close } from '@styled-icons/material/Close';
import noop from 'lodash/noop';
import isUndefined from 'lodash/isUndefined';
import type { Ref, ReactElement } from 'react';
import React, { forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import type { ButtonProps } from '../Button';
import { IconButton, ButtonTransparent } from '../Button';
import { Space } from '../Layout/Space';
import type { SimpleLayoutProps } from '../Layout/utils/simple';
import { simpleLayoutCSS } from '../Layout/utils/simple';
import { useReadOnlyWarn, useTranslation } from '../utils';
import { getIntentLabel, Status } from '../Status';

export type MessageBarIntent = 'critical' | 'inform' | 'positive' | 'warn';

const intentToStatefulColorMap: Record<MessageBarIntent, StatefulColor> = {
  critical: 'critical',
  inform: 'key',
  positive: 'positive',
  warn: 'neutral',
};

export type SupportedActionTypes = string | ReactElement<ButtonProps>;

export interface MessageBarProps
  extends CompatibleHTMLProps<HTMLElement>,
    SimpleLayoutProps,
    TypographyProps {
  /**
   * Determines the icon choice and background color
   * @default: 'inform'
   */
  intent?: MessageBarIntent;
  /**
   * Determines whether the MessageBar is rendered or not.
   * @default: true
   */
  visible?: boolean;
  /**
   * Polymorphic prop defines the primary action button to render.
   * @default true (which renders IconButton)
   */
  primaryAction?: SupportedActionTypes;
  /**
   * Polymorphic prop defines the secondary action button to render.
   */
  secondaryAction?: SupportedActionTypes;
  /**
   * Callback fires when primaryAction is clicked
   * @default noop
   */
  onPrimaryClick?: () => void;
  /**
   * Callback fires when secondaryAction is clicked
   * @default noop
   */
  onSecondaryClick?: () => void;
  /**
   * Hide action buttons altogether
   * @default false
   */
  noActions?: boolean;
  className?: string;
}

const NoopComponent = () => <></>;

/* eslint-disable react/display-name */

/*
 * Helper function checks the type of `primaryAction`
 * type: string
 *   -- returns a ButtonTransparent with `primaryAction` as the label
 * type: object
 *   -- signifies a custom react element, and is directly rendered
 * type: boolean
 *  -- true returns the default `X` dismiss button
 *  -- false returns NoopComponent
 */

function getPrimaryActionButton(
  t: TFunction,
  {
    primaryAction,
    onClick,
    id,
    intent = 'inform',
  }: Pick<MessageBarProps, 'intent' | 'primaryAction' | 'id'> & {
    onClick: () => void;
  }
) {
  switch (typeof primaryAction) {
    case 'string':
      // string label
      return (
        <ButtonTransparent
          color={intentToStatefulColorMap[intent]}
          onClick={onClick}
          id={id}
          className="message-bar-primary-action"
        >
          {primaryAction}
        </ButtonTransparent>
      );

    case 'object':
      // custom react component
      return primaryAction;
    default:
      return (
        <IconButton
          id={id ? `${id}-iconButton` : undefined}
          onClick={onClick}
          icon={<Close color={intentToStatefulColorMap[intent]} />}
          size="small"
          label={`${t('DismissIntent', {
            intent: getIntentLabel(t, intent),
            ns: 'MessageBar',
          })}`}
        />
      );
  }
}

/*
 * Helper function checks the type of `secondaryAction`
 * type: string
 *   -- returns a ButtonTransparent with `secondaryAction` as the label
 * type: object
 *   -- signifies a custom react element, and is directly rendered
 * type: boolean or undefined
 *  -- returns NoopComponent
 */
function getSecondaryActionButton({
  secondaryAction,
  onClick,
}: Pick<MessageBarProps, 'secondaryAction'> & { onClick: () => void }) {
  switch (typeof secondaryAction) {
    case 'string':
      // string label
      return (
        <ButtonTransparent
          onClick={onClick}
          color="neutral"
          className="message-bar-secondary-action"
        >
          {secondaryAction}
        </ButtonTransparent>
      );
    case 'object':
      // custom react component
      return secondaryAction;
    default:
      return <NoopComponent />;
  }
}

/* eslint-enable react/display-name */

const MessageBarLayout = forwardRef(
  (
    {
      id,
      children,
      intent = 'inform',
      visible: visibleProp,
      onPrimaryClick = noop,
      onSecondaryClick = noop,
      primaryAction,
      secondaryAction,
      noActions = false,
      ...props
    }: MessageBarProps,
    ref: Ref<HTMLDivElement>
  ) => {
    useReadOnlyWarn('MessageBar', visibleProp, onPrimaryClick);

    const [visible, setVisible] = useState(
      isUndefined(visibleProp) ? true : visibleProp
    );

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

    const { t } = useTranslation('MessageBar');
    const primaryButton = getPrimaryActionButton(t, {
      id,
      intent,
      onClick: handlePrimaryClick,
      primaryAction,
    });
    const secondaryButton = getSecondaryActionButton({
      onClick: handleSecondaryClick,
      secondaryAction,
    });

    const messageBarMarkup = (
      <div
        aria-live="polite"
        ref={ref}
        role="status"
        {...omitStyledProps(props)}
        data-testid="message-bar"
      >
        <Status intent={intent} />
        <MessageBarContent>{children}</MessageBarContent>
        {!noActions && (
          <Space width="auto">
            {secondaryButton}
            {primaryButton}
          </Space>
        )}
      </div>
    );

    return visible ? messageBarMarkup : null;
  }
);

MessageBarLayout.displayName = 'MessageBarLayout';

const MessageBarContent = styled.div`
  flex-grow: 1;
  padding: 0 ${({ theme: { space } }) => space.u5};
`;

const backgroundColor = variant({
  prop: 'intent',
  variants: {
    critical: {
      backgroundColor: 'criticalAccent',
    },
    inform: {
      backgroundColor: 'informAccent',
    },
    positive: {
      backgroundColor: 'positiveAccent',
    },
    warn: {
      backgroundColor: 'warnAccent',
    },
  },
});

export const MessageBar = styled(MessageBarLayout).attrs(
  ({ intent = 'inform', px = 'medium', py = 'small', width = '100%' }) => ({
    intent,
    px,
    py,
    width,
  })
)`
  ${simpleLayoutCSS}
  align-items: center;
  ${backgroundColor}
  border-radius: ${({ theme: { radii } }) => radii.medium};
  color: ${({ theme: { colors } }) => colors.text5};
  display: flex;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
`;
