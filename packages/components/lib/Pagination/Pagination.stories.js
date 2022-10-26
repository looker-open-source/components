import React, { useState } from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Paragraph } from '../Text';
import { Pagination } from './Pagination';
export const Basic = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return React.createElement(React.Fragment, null, React.createElement(Paragraph, null, `You're currently viewing page ${currentPage}`), React.createElement(Pagination, {
    current: currentPage,
    pages: 10,
    onChange: setCurrentPage
  }));
};
export default {
  argTypes,
  component: Pagination,
  title: 'Pagination'
};
//# sourceMappingURL=Pagination.stories.js.map