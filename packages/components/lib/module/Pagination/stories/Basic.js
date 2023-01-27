import _extends from "@babel/runtime/helpers/extends";

import React, { useState } from 'react';
import { Pagination } from '../..';
export default function Basic(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  return React.createElement(Pagination, _extends({}, props, {
    current: currentPage,
    pages: totalPages,
    onChange: setCurrentPage
  }));
}
//# sourceMappingURL=Basic.js.map