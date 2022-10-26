let _ = t => t,
    _t,
    _t2;

import { Info } from '@styled-icons/material';
import React from 'react';
import styled from 'styled-components';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Constitution, ConstitutionShort } from '../../../fixtures/Constitution';
import { ItemsFiller } from '../../../fixtures/ListHelper';
import { IconButton } from '../../../Button';
import { Heading } from '../../../Text';
import { Page, Header, Layout, Aside, Section, Footer } from '../';
export default {
  argTypes,
  component: Layout,
  title: 'Layout'
};
const AsideAlt = styled(Aside).withConfig({
  displayName: "Layoutstories__AsideAlt",
  componentId: "sc-563f1e-0"
})(_t || (_t = _``));
const Highlighter = styled.div.withConfig({
  displayName: "Layoutstories__Highlighter",
  componentId: "sc-563f1e-1"
})(_t2 || (_t2 = _`
  /* stylelint-disable color-named */

  ${0}, ${0} {
    background-color: lightcoral;
  }

  ${0} {
    background-color: lightsalmon;
  }

  ${0} {
    background-color: lightskyblue;
  }

  ${0} {
    background-color: lightgoldenrodyellow;
  }
`), Header, Footer, Aside, AsideAlt, Section);
export const Basic = () => React.createElement(Highlighter, null, React.createElement(Page, null, React.createElement(Header, {
  height: "4rem",
  px: "large"
}, "I'm the header"), React.createElement(Layout, {
  hasAside: true
}, React.createElement(Aside, {
  p: "u5",
  width: "200px"
}, React.createElement(ItemsFiller, {
  count: 20
})), React.createElement(Section, {
  main: true,
  p: "u10"
}, React.createElement(Heading, null, "Page title"), React.createElement(Constitution, null))), React.createElement(Footer, {
  height: "3rem",
  px: "large"
}, "I'm a footer")));
export const FixedWithFooterAndHeaderShadow = () => React.createElement(Highlighter, null, React.createElement(Page, {
  fixed: true
}, React.createElement(Header, {
  height: "4rem",
  px: "large"
}, "I'm the header"), React.createElement(Layout, {
  hasAside: true
}, React.createElement(Aside, {
  p: "u5",
  width: "200px"
}, React.createElement(ItemsFiller, {
  count: 20
})), React.createElement(Section, {
  main: true,
  p: "u10"
}, React.createElement(Heading, null, "Page title"), React.createElement(Constitution, null))), React.createElement(Footer, {
  height: "3rem",
  px: "large"
}, "I'm a footer")));
export const ScrollIndependently = () => React.createElement(Highlighter, null, React.createElement(Page, {
  fixed: true
}, React.createElement(Layout, {
  hasAside: true
}, React.createElement(Aside, {
  p: "u5"
}, React.createElement(Constitution, null)), React.createElement(Section, {
  main: true,
  p: "u10"
}, React.createElement(Heading, null, "Page title"), React.createElement(Constitution, null)), React.createElement(AsideAlt, {
  p: "u10",
  width: "navigation"
}, React.createElement(ConstitutionShort, null)))));
ScrollIndependently.parameters = {
  storyshots: {
    disable: true
  }
};
export const ScrollSelectedAreas = () => React.createElement(Highlighter, null, React.createElement(Page, {
  fixed: true
}, React.createElement(Layout, {
  hasAside: true
}, React.createElement(Aside, {
  p: "u5",
  width: "200px"
}, React.createElement(ConstitutionShort, null)), React.createElement(Layout, {
  hasAside: true
}, React.createElement(Section, {
  main: true,
  scrollWithin: true,
  p: "u10"
}, React.createElement(Heading, null, "Page title"), React.createElement(Constitution, null)), React.createElement(AsideAlt, {
  scrollWithin: true,
  p: "u10"
}, React.createElement(ConstitutionShort, null))))));
ScrollSelectedAreas.parameters = {
  storyshots: {
    disable: true
  }
};
export const ScrollAllAreasTogetherDefault = () => React.createElement(Highlighter, null, React.createElement(Page, null, React.createElement(Layout, {
  hasAside: true
}, React.createElement(Aside, {
  p: "u5",
  width: "200px"
}, React.createElement(ConstitutionShort, null)), React.createElement(Section, {
  main: true,
  p: "u10"
}, React.createElement(Heading, null, "Page title"), React.createElement(Constitution, null)), React.createElement(AsideAlt, {
  p: "u10",
  width: "10rem"
}, React.createElement(ConstitutionShort, null)))));
ScrollAllAreasTogetherDefault.parameters = {
  storyshots: {
    disable: true
  }
};
export const WhitespaceRepro = () => React.createElement(Highlighter, null, React.createElement(Page, {
  fixed: true
}, React.createElement(Header, {
  height: "4rem",
  px: "large"
}, "I'm the header"), React.createElement(Layout, {
  hasAside: true
}, React.createElement(Aside, {
  p: "u5",
  width: "200px"
}, React.createElement(ItemsFiller, {
  count: 20
})), React.createElement(Section, {
  main: true,
  p: "u10"
}, React.createElement(Heading, null, "Page title"), React.createElement(Constitution, null), React.createElement(IconButton, {
  icon: React.createElement(Info, null),
  label: "Info"
})))));
WhitespaceRepro.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Layout.stories.js.map