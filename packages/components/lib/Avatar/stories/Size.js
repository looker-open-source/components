import React from 'react';
import { Box2, AvatarIcon, AvatarUser } from '../..';
export default function Size() {
  const data = {
    avatar_url: 'https://www.fillmurray.com/150/150',
    first_name: 'Bill',
    last_name: 'Murray'
  };
  return React.createElement(Box2, {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  }, React.createElement(AvatarIcon, {
    size: "xxsmall"
  }), React.createElement(AvatarIcon, {
    size: "xsmall"
  }), React.createElement(AvatarIcon, null), React.createElement(AvatarIcon, {
    size: "medium"
  }), React.createElement(AvatarIcon, {
    size: "large"
  }), React.createElement(AvatarUser, {
    user: data,
    size: "xxsmall"
  }), React.createElement(AvatarUser, {
    user: data,
    size: "xsmall"
  }), React.createElement(AvatarUser, {
    user: data
  }), React.createElement(AvatarUser, {
    user: data,
    size: "medium"
  }), React.createElement(AvatarUser, {
    user: data,
    size: "large"
  }));
}
//# sourceMappingURL=Size.js.map