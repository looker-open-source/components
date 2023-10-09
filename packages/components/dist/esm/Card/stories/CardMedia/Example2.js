import React from 'react';
import { Card } from '../../Card';
import { CardContent } from '../../CardContent';
import { CardMedia } from '../../CardMedia';
import { Grid } from '../../../Layout';
import { Paragraph, Heading, Span } from '../../../Text';
export default (() => {
  return React.createElement(Grid, {
    columns: 3
  }, React.createElement(Card, {
    raised: true
  }, React.createElement(CardMedia, {
    image: "https://placeimg.com/640/480/nature",
    title: "Summer Nature"
  }), React.createElement(CardContent, null, React.createElement(Span, {
    fontSize: "xsmall",
    textTransform: "uppercase",
    fontWeight: "semiBold",
    color: "text1"
  }, "Summer"), React.createElement(Heading, {
    as: "h4",
    fontSize: "medium",
    fontWeight: "semiBold",
    truncate: true
  }, "Life in The Great Outdoors"), React.createElement(Paragraph, {
    fontSize: "small"
  }, "10 reasons to get off the couch and head outside this summer."))), React.createElement(Card, {
    raised: true
  }, React.createElement(CardMedia, {
    image: "https://placeimg.com/630/480/nature",
    title: "A Scenic Valley"
  }), React.createElement(CardContent, null, React.createElement(Span, {
    fontSize: "xsmall",
    textTransform: "uppercase",
    fontWeight: "semiBold",
    color: "text1"
  }, "Explore"), React.createElement(Heading, {
    as: "h4",
    fontSize: "medium",
    fontWeight: "semiBold",
    truncate: true
  }, "Best Scenic Hikes"), React.createElement(Paragraph, {
    fontSize: "small"
  }, "Looking for a new place to trailblaze? Make sure it has a great view!"))), React.createElement(Card, {
    raised: true
  }, React.createElement(CardMedia, {
    image: "https://placeimg.com/620/480/nature",
    title: "Relaxing Views"
  }), React.createElement(CardContent, null, React.createElement(Span, {
    fontSize: "xsmall",
    textTransform: "uppercase",
    fontWeight: "semiBold",
    color: "text1"
  }, "Relax"), React.createElement(Heading, {
    as: "h4",
    fontSize: "large",
    fontWeight: "semiBold",
    truncate: true
  }, "Mindfull Wilderness"), React.createElement(Paragraph, {
    fontSize: "small"
  }, "Find a place to find your self."))));
});
//# sourceMappingURL=Example2.js.map