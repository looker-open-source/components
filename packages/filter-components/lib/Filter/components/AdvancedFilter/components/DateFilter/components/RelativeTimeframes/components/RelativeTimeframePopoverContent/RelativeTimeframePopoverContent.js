import React from 'react';
import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@looker/components';
import { useTranslation } from '../../../../../../../../../utils';
import { RelativeTimeframeCustom } from '../RelativeTimeframeCustom';
import { RelativeTimeframePresets } from '../RelativeTimeframePresets';
export const RelativeTimeframePopoverContent = ({
  value,
  onCustomChange,
  onPresetChange,
  onNav
}) => {
  const defaultTabIndex = typeof value === 'string' ? 0 : 1;
  const {
    t
  } = useTranslation('RelativeTimeframePopoverContent');

  const handleTabClick = () => {
    requestAnimationFrame(() => {
      onNav();
    });
  };

  return React.createElement("div", null, React.createElement(Tabs, {
    onChange: handleTabClick,
    defaultIndex: defaultTabIndex
  }, React.createElement(TabList, {
    pt: "xsmall",
    pl: "small"
  }, React.createElement(Tab, null, t('Presets')), React.createElement(Tab, null, t('Custom'))), React.createElement(TabPanels, {
    pt: "none"
  }, React.createElement(TabPanel, null, React.createElement(RelativeTimeframePresets, {
    value: value,
    onPresetChange: onPresetChange
  })), React.createElement(TabPanel, null, React.createElement(RelativeTimeframeCustom, {
    value: value,
    onCustomChange: onCustomChange
  })))));
};
//# sourceMappingURL=RelativeTimeframePopoverContent.js.map