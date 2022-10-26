import { ChipButton, usePopover, Breakpoint, Dialog, DialogLayout } from '@looker/components';
import React, { useRef } from 'react';
import { useTranslation } from '../../../../../../../utils';
import { useRelativeTimeframeToString } from '../../utils/relative_timeframe_to_string';
import { RelativeTimeframePopoverContent } from './components/RelativeTimeframePopoverContent';
export const RelativeTimeframes = ({
  value,
  onChange
}) => {
  const internalPopoverInstanceRef = useRef();
  const {
    t
  } = useTranslation('RelativeTimeframe');

  const handlePresetChange = selected => {
    onChange(selected);
  };

  const handleCustomChange = range => {
    onChange(range);
  };

  const handleNav = () => {
    var _internalPopoverInsta;

    (_internalPopoverInsta = internalPopoverInstanceRef.current) === null || _internalPopoverInsta === void 0 ? void 0 : _internalPopoverInsta.update();
  };

  const popoverContent = React.createElement(RelativeTimeframePopoverContent, {
    value: value,
    onNav: handleNav,
    onCustomChange: handleCustomChange,
    onPresetChange: handlePresetChange
  });
  const popoverProps = {
    content: popoverContent,
    pin: true,
    placement: 'bottom-start'
  };
  const {
    popover,
    open,
    ref,
    popperInstanceRef
  } = usePopover(popoverProps);
  internalPopoverInstanceRef.current = popperInstanceRef.current;
  const label = useRelativeTimeframeToString(value);
  const overlayTrigger = React.createElement(ChipButton, {
    ref: ref,
    onClick: open
  }, label);
  return React.createElement(React.Fragment, null, React.createElement(Breakpoint, {
    show: "mobile"
  }, React.createElement(Dialog, {
    content: React.createElement(DialogLayout, {
      header: t('Choose a Timeframe')
    }, popoverContent)
  }, overlayTrigger)), React.createElement(Breakpoint, {
    show: ['tablet', undefined]
  }, popover, overlayTrigger));
};
//# sourceMappingURL=RelativeTimeframes.js.map