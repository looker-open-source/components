import React from 'react';
import { Box2, AvatarIcon, AvatarUser } from '../..';
export default function Color() {
  const data = {
    avatar_url: 'https://www.fillmurray.com/150/150',
    first_name: 'Bill',
    last_name: 'Murray'
  };
  return React.createElement(Box2, {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  }, React.createElement(AvatarUser, {
    user: data
  }), React.createElement(AvatarIcon, null), React.createElement(AvatarUser, {
    color: "inform",
    user: data
  }), React.createElement(AvatarIcon, {
    color: "inform"
  }), React.createElement(AvatarUser, {
    color: "positive",
    user: data
  }), React.createElement(AvatarIcon, {
    color: "positive"
  }), React.createElement(AvatarIcon, {
    color: "inverseOn",
    bg: "positive"
  }));
}
//# sourceMappingURL=Color.js.map