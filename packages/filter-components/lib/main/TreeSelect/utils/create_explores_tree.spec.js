"use strict";

var _create_explores_tree = require("./create_explores_tree");

describe('createExploresTree tests', function () {
  it('should return empty array given empty explores', function () {
    expect((0, _create_explores_tree.createExploresTree)([])).toEqual([]);
  });
  it('should mark explore-level entries as not highlightable', function () {
    var _trees$0$children, _trees$0$children$0$c;
    var explore = [{
      label: 'explore-a',
      model_name: 'model-a',
      name: 'explore-a',
      fields: {
        dimensions: [{
          can_filter: true,
          name: 'explore-a.dim-1',
          label_short: 'dim-1',
          view_label: 'view-a'
        }, {
          can_filter: true,
          name: 'explore-a.dim-2',
          label_short: 'dim-2',
          view_label: 'view-b'
        }],
        measures: [{
          can_filter: true,
          measure: true,
          name: 'explore-a.measure-1',
          label_short: 'measure-1',
          view_label: 'view-a'
        }, {
          can_filter: true,
          measure: true,
          name: 'explore-a.measure-2',
          label_short: 'measure-2',
          view_label: 'view-b'
        }]
      }
    }];
    var trees = (0, _create_explores_tree.createExploresTree)(explore);
    expect(trees).toMatchSnapshot();
    expect(trees[0].isNotHighlightable).toBe(true);
    expect((_trees$0$children = trees[0].children) === null || _trees$0$children === void 0 ? void 0 : (_trees$0$children$0$c = _trees$0$children[0].children) === null || _trees$0$children$0$c === void 0 ? void 0 : _trees$0$children$0$c[0].isNotHighlightable).toBeUndefined();
  });
});
//# sourceMappingURL=create_explores_tree.spec.js.map