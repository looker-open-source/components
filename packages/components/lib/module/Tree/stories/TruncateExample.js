

import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { TreeItem, Tree, TreeCollection } from '..';
import { Heading } from '../../Text';
export default function TruncateExample() {
  return React.createElement(React.Fragment, null, React.createElement(Heading, null, "Default Text Wrapping Layout"), React.createElement(TreeCollection, null, React.createElement(Tree, {
    border: true,
    label: "A very long label that wraps to a second line. Both the label and the tree item will wrap to two or more lines because there is just too much text.",
    icon: React.createElement(MaterialIcons.TableChart, null),
    defaultOpen: true
  }, React.createElement(TreeItem, {
    icon: React.createElement(MaterialIcons.Tag, null)
  }, "Cheese is a dairy product, derived from milk and produced in wide ranges of flavours, textures and forms by coagulation of the milk protein casein. It comprises proteins and fat from milk, usually the milk of cows, buffalo, goats, or sheep."))), React.createElement(Heading, null, "Truncated Text"), React.createElement(TreeCollection, null, React.createElement(Tree, {
    border: true,
    label: "A very label that wraps to a second line. Sometimes you don't want to take up extra vertical space, and instead it will cut off the text.",
    truncate: true,
    icon: React.createElement(MaterialIcons.TableChart, null),
    defaultOpen: true
  }, React.createElement(TreeItem, {
    icon: React.createElement(MaterialIcons.Tag, null),
    truncate: true
  }, "Hover over me for a tooltip of the full content. Cheese is a dairy product, derived from milk and produced in wide ranges of flavours, textures and forms by coagulation of the milk protein casein. It comprises proteins and fat from milk, usually the milk of cows, buffalo, goats, or sheep."))));
}
//# sourceMappingURL=TruncateExample.js.map