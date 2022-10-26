import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["skipFilterConfigCheck"];
import { useState, useRef } from 'react';
import { getFallbackFilterConfig, canRenderFilter } from '.';

const getSkipFallback = _ref => {
  let {
    skipFilterConfigCheck
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return skipFilterConfigCheck !== null && skipFilterConfigCheck !== void 0 ? skipFilterConfigCheck : canRenderFilter(props);
};

export const useFilterConfig = props => {
  const [skipFallback, setSkipFallback] = useState(getSkipFallback(props));
  const skipFallbackConfigCheckRef = useRef(props.skipFilterConfigCheck);

  if (props.skipFilterConfigCheck !== skipFallbackConfigCheckRef.current) {
    skipFallbackConfigCheckRef.current = props.skipFilterConfigCheck;
    setSkipFallback(getSkipFallback(props));
  }

  const uiConfig = skipFallback ? props.config || {} : getFallbackFilterConfig(props.config);
  return {
    skipFilterConfigCheck: skipFallback,
    uiConfig
  };
};
//# sourceMappingURL=use_filter_config.js.map