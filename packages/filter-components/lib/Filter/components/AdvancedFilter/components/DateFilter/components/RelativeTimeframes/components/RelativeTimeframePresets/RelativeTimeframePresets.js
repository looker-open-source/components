import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t;

import { FadeIn, Icon, MenuDivider, MenuItem, MenuList, DialogContext } from '@looker/components';
import { Check } from '@styled-icons/material/Check';
import { ExpandMore } from '@styled-icons/material-rounded/ExpandMore';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from '../../../../../../../../../utils';
import { useRelativeTimeframePresets } from '../../utils/get_relative_timeframe_presets';
import { PresetTimeframes, PresetTimeframesLeastRecent, PresetTimeframesMostRecent, PresetTimeframesPrevious, PresetTimeframesRecent, PresetTimeframesThis } from '../../../../types/relative_timeframe_types';
export const RelativeTimeframePresets = props => {
  const {
    t
  } = useTranslation('RelativeTimeframePresets');
  const [showMore, setShowMore] = useState(false);

  const handleClick = e => {
    setShowMore(true);
    e.preventDefault();
  };

  return React.createElement(MenuList, {
    density: -1,
    iconGutter: true
  }, showMore ? React.createElement(React.Fragment, null, React.createElement(PresetTimeframeGroup, _extends({}, props, {
    presetTimeframe: PresetTimeframesMostRecent,
    delay: "rapid"
  })), React.createElement(PresetTimeframeGroup, _extends({}, props, {
    presetTimeframe: PresetTimeframesRecent,
    delay: "simple"
  })), React.createElement(PresetTimeframeGroup, _extends({}, props, {
    presetTimeframe: PresetTimeframesLeastRecent,
    delay: "moderate"
  })), React.createElement(PresetTimeframeGroup, _extends({}, props, {
    presetTimeframe: PresetTimeframesThis,
    delay: "complex"
  })), React.createElement(PresetTimeframeGroup, _extends({}, props, {
    presetTimeframe: PresetTimeframesPrevious,
    delay: "intricate"
  }))) : React.createElement(React.Fragment, null, React.createElement(PresetTimeframeGroup, _extends({}, props, {
    presetTimeframe: PresetTimeframes,
    delay: "none",
    duration: "none"
  })), React.createElement(CustomMenuItem, {
    detail: React.createElement(Icon, {
      size: 28,
      color: "ui3",
      pr: "xsmall",
      icon: React.createElement(ExpandMore, null)
    }),
    onClick: handleClick
  }, t('More'))));
};

const PresetTimeframeGroup = ({
  duration: _duration = 'simple',
  delay,
  onPresetChange,
  presetTimeframe,
  value
}) => {
  const presets = useRelativeTimeframePresets();
  const {
    closeModal
  } = useContext(DialogContext);

  const handleOnClick = timeframe => () => {
    onPresetChange(timeframe);
    closeModal === null || closeModal === void 0 ? void 0 : closeModal();
  };

  return React.createElement(React.Fragment, null, Object.values(presetTimeframe).map((timeframe, index) => {
    const current = typeof value === 'string' && value === timeframe;
    return React.createElement(CustomMenuItem, {
      icon: current ? React.createElement(Check, null) : undefined,
      key: index,
      onClick: handleOnClick(timeframe),
      selected: current
    }, React.createElement(FadeIn, {
      duration: _duration,
      delay: delay
    }, presets[timeframe]));
  }), React.createElement(MenuDivider, null));
};

const CustomMenuItem = styled(MenuItem).withConfig({
  displayName: "RelativeTimeframePresets__CustomMenuItem",
  componentId: "sc-1lkgww6-0"
})(_t || (_t = _`
  & > button {
    &[aria-current='true'] {
      background-color: ${0};
      ${0} {
        color: ${0};
      }
    }

    &:hover {
      background-color: ${0};
    }
  }
`), ({
  theme: {
    colors
  }
}) => colors.background, Icon, ({
  theme: {
    colors
  }
}) => colors.key, ({
  theme: {
    colors
  }
}) => colors.keySubtle);
//# sourceMappingURL=RelativeTimeframePresets.js.map