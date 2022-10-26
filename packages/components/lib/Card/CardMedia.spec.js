import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { CardMedia } from './CardMedia';
describe('CardMedia', () => {
  test('default', () => {
    const imgUrl = 'http://faux.com/faux-image.jpg';
    renderWithTheme(React.createElement(CardMedia, {
      "data-testid": "card-media",
      image: imgUrl
    }));
    expect(screen.getByTestId('card-media')).toBeInTheDocument();
    expect(screen.getByTestId('card-media')).toHaveStyle(`background-image: url('${imgUrl}')`);
  });
  test('color', () => {
    renderWithTheme(React.createElement(CardMedia, {
      "data-testid": "card-media",
      backgroundColor: "key"
    }));
    expect(screen.getByTestId('card-media')).toBeInTheDocument();
    expect(screen.getByTestId('card-media')).toHaveStyle('background-color: rgb(108, 67, 224);');
  });
});
//# sourceMappingURL=CardMedia.spec.js.map