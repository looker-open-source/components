/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { Pagination } from '../..'
import type { PaginationProps } from '../Pagination'

export default function Basic(props: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  return (
    <Pagination
      {...props}
      current={currentPage}
      pages={totalPages}
      onChange={setCurrentPage}
    />
  )
}
