function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import { mockTableConfig } from '@looker/visualizations-adapters';
import { Visualization } from '../';
export default function TruncatedText() {
  return React.createElement(Visualization, {
    config: _objectSpread(_objectSpread({}, mockTableConfig), {}, {
      truncate_text: true,
      truncate_header: true
    }),
    data: [{
      'author.name': 'Henry David Thoreau',
      'author.bio': 'Henry David Thoreau was an American naturalist, essayist, poet, and philosopher. A leading transcendentalist, he is best known for his book Walden, a reflection upon simple living in natural surroundings, and his essay "Civil Disobedience", an argument for disobedience to an unjust state.',
      'author.books_published': 2
    }, {
      'author.name': 'Margaret Atwood',
      'author.bio': "Margaret Eleanor Atwood (born November 18, 1939) is a Canadian poet, novelist, literary critic, essayist, teacher, environmental activist, and inventor. Since 1961, she has published 18 books of poetry, 18 novels, 11 books of non-fiction, nine collections of short fiction, eight children's books, and two graphic novels, and a number of small press editions of both poetry and fiction. Atwood has won numerous awards and honors for her writing, including two Booker Prizes, the Arthur C. Clarke Award, the Governor General's Award, the Franz Kafka Prize, Princess of Asturias Awards, and the National Book Critics and PEN Center USA Lifetime Achievement Awards",
      'author.books_published': 47
    }],
    fields: {
      measures: [{
        is_numeric: true,
        label: 'Books Published',
        label_short: 'Books Published',
        name: 'author.books_published',
        sortable: true,
        sorted: {
          desc: true,
          sort_index: 0
        },
        type: 'count_distinct',
        view: 'author',
        view_label: 'Author',
        value_format: null
      }],
      dimensions: [{
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
        value_format: null
      }, {
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
        value_format: null
      }],
      pivots: []
    }
  });
}
//# sourceMappingURL=TableTruncatedText.js.map