function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useContext } from 'react';
import { Dialog, DialogContext, DialogLayout } from '../../Dialog';
import { Button, ButtonTransparent, ButtonOutline } from '../../Button';
export default function LongContent(props) {
  return React.createElement(Dialog, _extends({}, props, {
    defaultOpen: true,
    content: React.createElement(DialogExampleLayout, null)
  }), React.createElement(ButtonOutline, null, "Open Dialog"));
}
const DialogExampleLayout = () => {
  const {
    closeModal
  } = useContext(DialogContext);
  return React.createElement(DialogLayout, {
    header: "Simple header",
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      onClick: closeModal
    }, "Done Reading"), React.createElement(ButtonTransparent, {
      color: "neutral",
      onClick: closeModal
    }, "Finish Later"))
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus pulvinar elementum integer enim. In aliquam sem fringilla ut. Massa id neque aliquam vestibulum morbi blandit cursus. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Elit ut aliquam purus sit amet luctus. Enim nulla aliquet porttitor lacus luctus accumsan tortor. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Tempus egestas sed sed risus pretium quam. Maecenas accumsan lacus vel facilisis. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Odio facilisis mauris sit amet massa vitae. Suscipit tellus mauris a diam maecenas sed enim ut. Orci dapibus ultrices in iaculis nunc sed. Etiam sit amet nisl purus. Lacus sed viverra tellus in hac habitasse. Libero justo laoreet sit amet cursus sit amet. Mi eget mauris pharetra et ultrices neque. Elit ut aliquam purus sit. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. In hendrerit gravida rutrum quisque non. Quam lacus suspendisse faucibus interdum. Eget arcu dictum varius duis at. Eget aliquet nibh praesent tristique magna sit amet. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Scelerisque eu ultrices vitae auctor eu augue. Amet porttitor eget dolor morbi non arcu risus quis varius. Ut pharetra sit amet aliquam id diam maecenas ultricies. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Enim eu turpis egestas pretium. Volutpat consequat mauris nunc congue. Libero enim sed faucibus turpis in eu mi bibendum. Sed velit dignissim sodales ut eu sem integer vitae justo. Odio pellentesque diam volutpat commodo sed. Non quam lacus suspendisse faucibus interdum posuere lorem. Tristique nulla aliquet enim tortor at auctor urna nunc. Odio pellentesque diam volutpat commodo. Vitae semper quis lectus nulla at volutpat diam. Condimentum lacinia quis vel eros donec. Justo donec enim diam vulputate. Quis varius quam quisque id. In nibh mauris cursus mattis molestie a iaculis. Ac turpis egestas sed tempus urna et. Non consectetur a erat nam at lectus urna duis. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Interdum varius sit amet mattis vulputate enim nulla aliquet. Phasellus faucibus scelerisque eleifend donec pretium. Venenatis urna cursus eget nunc scelerisque viverra mauris. Orci dapibus ultrices in iaculis nunc sed augue. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Donec et odio pellentesque diam. Sit amet est placerat in egestas erat. Arcu non odio euismod lacinia. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Lectus quam id leo in. Ullamcorper a lacus vestibulum sed arcu non odio. Enim nec dui nunc mattis enim ut. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. At augue eget arcu dictum varius duis at. Nibh tortor id aliquet lectus proin nibh nisl. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Leo a diam sollicitudin tempor id eu. Cursus sit amet dictum sit. Laoreet non curabitur gravida arcu ac. Ullamcorper eget nulla facilisi etiam dignissim diam. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Urna nec tincidunt praesent semper feugiat. Velit sed ullamcorper morbi tincidunt.", ' ');
};
//# sourceMappingURL=LongContent.js.map