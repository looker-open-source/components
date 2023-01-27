/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import React from 'react'
import { mockTableConfig } from '@looker/visualizations-adapters'
import { Visualization } from '../'

export default function TruncatedText() {
  return (
    <Visualization
      config={{
        ...mockTableConfig,
        truncate_text: true,
        truncate_header: true,
      }}
      data={[
        {
          'author.name': 'Henry David Thoreau',
          'author.bio':
            'Henry David Thoreau was an American naturalist, essayist, poet, and philosopher. A leading transcendentalist, he is best known for his book Walden, a reflection upon simple living in natural surroundings, and his essay "Civil Disobedience", an argument for disobedience to an unjust state.',
          'author.books_published': 2,
        },
        {
          'author.name': 'Margaret Atwood',
          'author.bio':
            "Margaret Eleanor Atwood (born November 18, 1939) is a Canadian poet, novelist, literary critic, essayist, teacher, environmental activist, and inventor. Since 1961, she has published 18 books of poetry, 18 novels, 11 books of non-fiction, nine collections of short fiction, eight children's books, and two graphic novels, and a number of small press editions of both poetry and fiction. Atwood has won numerous awards and honors for her writing, including two Booker Prizes, the Arthur C. Clarke Award, the Governor General's Award, the Franz Kafka Prize, Princess of Asturias Awards, and the National Book Critics and PEN Center USA Lifetime Achievement Awards",
          'author.books_published': 47,
        },
      ]}
      fields={{
        measures: [
          {
            is_numeric: true,
            label: 'Books Published',
            label_short: 'Books Published',
            name: 'author.books_published',
            sortable: true,
            sorted: { desc: true, sort_index: 0 },
            type: 'count_distinct',
            view: 'author',
            view_label: 'Author',
            value_format: null,
          },
        ],
        dimensions: [
          {
            is_filter: false,
            is_fiscal: false,
            is_numeric: false,
            is_timeframe: true,
            label: 'Author Name',
            label_short: 'Author Name',
            name: 'author.name',
            sortable: true,
            type: 'string',
            view: 'author',
            view_label: 'Author',
            value_format: null,
          },
          {
            is_filter: false,
            is_fiscal: false,
            is_numeric: false,
            is_timeframe: true,
            label: 'Author Biography',
            label_short: 'Author Biography',
            name: 'author.bio',
            sortable: true,
            type: 'string',
            view: 'author',
            view_label: 'Author',
            value_format: null,
          },
        ],
        pivots: [],
      }}
    />
  )
}
