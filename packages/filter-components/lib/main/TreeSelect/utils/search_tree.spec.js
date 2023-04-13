"use strict";

var _testUtils = require("@looker/test-utils");
var _examples = require("../stories/examples");
var _search_tree = require("./search_tree");

describe('searchTree tests', function () {
  it('should return multiple results', function () {
    var _tree$0$children, _tree$0$children2, _tree$0$children2$0$c, _tree$0$children3, _tree$0$children3$0$c, _tree$0$children4;
    var tree = (0, _search_tree.searchTree)(_examples.mockTreeData, 'leaf node');
    expect(tree[0].isOpen).toBeTruthy();
    expect((_tree$0$children = tree[0].children) === null || _tree$0$children === void 0 ? void 0 : _tree$0$children[0].isOpen).toBeTruthy();
    expect((_tree$0$children2 = tree[0].children) === null || _tree$0$children2 === void 0 ? void 0 : (_tree$0$children2$0$c = _tree$0$children2[0].children) === null || _tree$0$children2$0$c === void 0 ? void 0 : _tree$0$children2$0$c[0].isOpen).toBeTruthy();
    expect((_tree$0$children3 = tree[0].children) === null || _tree$0$children3 === void 0 ? void 0 : (_tree$0$children3$0$c = _tree$0$children3[0].children) === null || _tree$0$children3$0$c === void 0 ? void 0 : _tree$0$children3$0$c[1].isOpen).toBeTruthy();
    expect((_tree$0$children4 = tree[0].children) === null || _tree$0$children4 === void 0 ? void 0 : _tree$0$children4[1].isOpen).toBeFalsy();
  });
  it('should return two matched results', function () {
    var _tree$0$children5, _tree$0$children6, _tree$0$children6$0$c, _tree$0$children7, _tree$0$children7$0$c, _tree$0$children8, _tree$1$children, _tree$1$children$0$ch;
    var tree = (0, _search_tree.searchTree)(_examples.mockTreeData, 'another leaf node');
    expect(tree[0].isOpen).toBeTruthy();
    expect((_tree$0$children5 = tree[0].children) === null || _tree$0$children5 === void 0 ? void 0 : _tree$0$children5[0].isOpen).toBeTruthy();
    expect((_tree$0$children6 = tree[0].children) === null || _tree$0$children6 === void 0 ? void 0 : (_tree$0$children6$0$c = _tree$0$children6[0].children) === null || _tree$0$children6$0$c === void 0 ? void 0 : _tree$0$children6$0$c[0].isOpen).toBeFalsy();
    expect((_tree$0$children7 = tree[0].children) === null || _tree$0$children7 === void 0 ? void 0 : (_tree$0$children7$0$c = _tree$0$children7[0].children) === null || _tree$0$children7$0$c === void 0 ? void 0 : _tree$0$children7$0$c[1].isOpen).toBeTruthy();
    expect((_tree$0$children8 = tree[0].children) === null || _tree$0$children8 === void 0 ? void 0 : _tree$0$children8[1].isOpen).toBeFalsy();
    expect(tree[1].isOpen).toBeTruthy();
    expect((_tree$1$children = tree[1].children) === null || _tree$1$children === void 0 ? void 0 : (_tree$1$children$0$ch = _tree$1$children[0].children) === null || _tree$1$children$0$ch === void 0 ? void 0 : _tree$1$children$0$ch[1].isOpen).toBeTruthy();
  });
  it('should return all the results under the searched section', function () {
    var _tree$0$children9;
    var tree = (0, _search_tree.searchTree)(_examples.mockTreeData, 'some section');
    expect(tree[0].isOpen).toBeTruthy();
    expect((_tree$0$children9 = tree[0].children) === null || _tree$0$children9 === void 0 ? void 0 : _tree$0$children9[0].isOpen).toBeTruthy();
  });
  it('should close all sections', function () {
    var tree = (0, _search_tree.searchTree)(_examples.mockTreeData, 'asldkfjsldfjsdkf');
    expect(tree[0].isOpen).toBeFalsy();
    expect(tree[1].isOpen).toBeFalsy();
  });
  it('should handle dangerous characters', function () {
    var tree = (0, _search_tree.searchTree)(_examples.mockTreeData, 'anotha one!~()[]@&=\\');
    expect(tree[0].isOpen).toBeFalsy();
    expect(tree[1].isOpen).toBeFalsy();
  });
});
describe('containsString tests', function () {
  it('should contain the inner string', function () {
    var tree = {
      value: 'The fOx jUmped oVer the bench'
    };
    expect((0, _search_tree.containsString)(tree, 'jumped ov')).toBeTruthy();
  });
  it('should return false if it doesnt contain the string', function () {
    var tree = {
      value: 'The fOx jUmped oVer the bench'
    };
    expect((0, _search_tree.containsString)(tree, 'fox leapt over the')).toBeFalsy();
  });
});
describe('open/close tests', function () {
  it('should return multiple results', function () {
    var _tree$0$children10, _tree$0$children11, _tree$0$children11$0$, _tree$0$children12, _tree$0$children12$0$, _tree$0$children13;
    var tree = (0, _search_tree.searchTree)(_examples.mockTreeData, 'leaf node');
    expect(tree[0].isOpen).toBeTruthy();
    expect((_tree$0$children10 = tree[0].children) === null || _tree$0$children10 === void 0 ? void 0 : _tree$0$children10[0].isOpen).toBeTruthy();
    expect((_tree$0$children11 = tree[0].children) === null || _tree$0$children11 === void 0 ? void 0 : (_tree$0$children11$0$ = _tree$0$children11[0].children) === null || _tree$0$children11$0$ === void 0 ? void 0 : _tree$0$children11$0$[0].isOpen).toBeTruthy();
    expect((_tree$0$children12 = tree[0].children) === null || _tree$0$children12 === void 0 ? void 0 : (_tree$0$children12$0$ = _tree$0$children12[0].children) === null || _tree$0$children12$0$ === void 0 ? void 0 : _tree$0$children12$0$[1].isOpen).toBeTruthy();
    expect((_tree$0$children13 = tree[0].children) === null || _tree$0$children13 === void 0 ? void 0 : _tree$0$children13[1].isOpen).toBeFalsy();
  });
  it('should return two matched results', function () {
    var _tree$0$children14, _tree$0$children15, _tree$0$children15$0$, _tree$0$children16, _tree$0$children16$0$, _tree$0$children17, _tree$1$children2, _tree$1$children2$0$c;
    var tree = (0, _search_tree.searchTree)(_examples.mockTreeData, 'another leaf node');
    expect(tree[0].isOpen).toBeTruthy();
    expect((_tree$0$children14 = tree[0].children) === null || _tree$0$children14 === void 0 ? void 0 : _tree$0$children14[0].isOpen).toBeTruthy();
    expect((_tree$0$children15 = tree[0].children) === null || _tree$0$children15 === void 0 ? void 0 : (_tree$0$children15$0$ = _tree$0$children15[0].children) === null || _tree$0$children15$0$ === void 0 ? void 0 : _tree$0$children15$0$[0].isOpen).toBeFalsy();
    expect((_tree$0$children16 = tree[0].children) === null || _tree$0$children16 === void 0 ? void 0 : (_tree$0$children16$0$ = _tree$0$children16[0].children) === null || _tree$0$children16$0$ === void 0 ? void 0 : _tree$0$children16$0$[1].isOpen).toBeTruthy();
    expect((_tree$0$children17 = tree[0].children) === null || _tree$0$children17 === void 0 ? void 0 : _tree$0$children17[1].isOpen).toBeFalsy();
    expect(tree[1].isOpen).toBeTruthy();
    expect((_tree$1$children2 = tree[1].children) === null || _tree$1$children2 === void 0 ? void 0 : (_tree$1$children2$0$c = _tree$1$children2[0].children) === null || _tree$1$children2$0$c === void 0 ? void 0 : _tree$1$children2$0$c[1].isOpen).toBeTruthy();
  });
  it('should return all the results under the searched section', function () {
    var _tree$0$children18;
    var tree = (0, _search_tree.searchTree)(_examples.mockTreeData, 'some section');
    expect(tree[0].isOpen).toBeTruthy();
    expect((_tree$0$children18 = tree[0].children) === null || _tree$0$children18 === void 0 ? void 0 : _tree$0$children18[0].isOpen).toBeTruthy();
  });
  it('should close all sections', function () {
    var tree = (0, _search_tree.searchTree)(_examples.mockTreeData, 'asldkfjsldfjsdkf');
    expect(tree[0].isOpen).toBeFalsy();
    expect(tree[1].isOpen).toBeFalsy();
  });
  it('should handle dangerous characters', function () {
    var tree = (0, _search_tree.searchTree)(_examples.mockTreeData, 'anotha one!~()[]@&=\\');
    expect(tree[0].isOpen).toBeFalsy();
    expect(tree[1].isOpen).toBeFalsy();
  });
});
describe('filtering tests', function () {
  var searchValueWithoutMatch = 'zero';
  describe('when the tree is empty', function () {
    it('should return an empty tree', function () {
      expect((0, _search_tree.searchTree)([], searchValueWithoutMatch)).toMatchObject([]);
    });
  });
  describe('when the tree is not empty', function () {
    describe('and it contains only root elements', function () {
      var trees = [{
        value: 'firstbranch'
      }, {
        value: 'secondbranch'
      }];
      describe('and the search value is not found', function () {
        var updatedTrees;
        beforeAll(function () {
          updatedTrees = (0, _search_tree.searchTree)(trees, searchValueWithoutMatch);
        });
        trees.forEach(function (tree, idx) {
          it("should not highlight the '".concat(tree.value, "' leaf"), function () {
            var _renderWithTheme = (0, _testUtils.renderWithTheme)(updatedTrees[idx].label),
              container = _renderWithTheme.container;
            expectedContainerToContainString(tree.value, container);
            expectTreeToBeHiddenAndClosed(updatedTrees[idx]);
          });
        });
      });
      describe('and the search value is found', function () {
        var updatedTrees;
        var notSearchableTrees = [{
          value: 'firstbranch',
          isNotHighlightable: true
        }, {
          value: 'secondbranch'
        }];
        describe('and some first-level values are not highlightable', function () {
          beforeAll(function () {
            updatedTrees = (0, _search_tree.searchTree)(notSearchableTrees, 'first');
          });
          it('should not highlight the leaf and hide it', function () {
            var _renderWithTheme2 = (0, _testUtils.renderWithTheme)(updatedTrees[0].label),
              container = _renderWithTheme2.container;
            expectedContainerToContainString('firstbranch', container);
            expectTreeToBeHiddenAndClosed(updatedTrees[0]);
          });
        });
        describe('and all values are searchable', function () {
          beforeAll(function () {
            updatedTrees = (0, _search_tree.searchTree)(trees, 'first');
          });
          it('should highlight one leaf and leave it open', function () {
            var _renderWithTheme3 = (0, _testUtils.renderWithTheme)(updatedTrees[0].label),
              container = _renderWithTheme3.container;
            expectedContainerToContainString('<b>first</b>branch', container);
            expectTreeToBeVisibleAndOpen(updatedTrees[0]);
          });
          it('should not highlight any leaves', function () {
            var _renderWithTheme4 = (0, _testUtils.renderWithTheme)(updatedTrees[1].label),
              container = _renderWithTheme4.container;
            expectedContainerToContainString('secondbranch', container);
            expectTreeToBeHiddenAndClosed(updatedTrees[1]);
          });
        });
      });
    });
    describe('and it contains elements with children', function () {
      var trees = [{
        children: [{
          value: 'firstbranch firstleaf'
        }],
        value: 'firstbranch'
      }, {
        children: [{
          value: 'secondbranch firstleaf'
        }, {
          value: 'secondbranch secondleaf'
        }],
        value: 'secondbranch'
      }];
      describe('and the search value is not found', function () {
        var _trees$1$children;
        var updatedTrees;
        beforeAll(function () {
          updatedTrees = (0, _search_tree.searchTree)(trees, searchValueWithoutMatch);
        });
        trees.forEach(function (tree, idx) {
          it("should not highlight the branch ".concat(idx), function () {
            var _renderWithTheme5 = (0, _testUtils.renderWithTheme)(updatedTrees[idx].label),
              container = _renderWithTheme5.container;
            expectedContainerToContainString(tree.value, container);
            expectTreeToBeHiddenAndClosed(updatedTrees[idx]);
          });
        });
        it("should not highlight the first child of the first branch", function () {
          var _updatedTrees$0$child, _trees$0$children, _updatedTrees$0$child2;
          var _renderWithTheme6 = (0, _testUtils.renderWithTheme)((_updatedTrees$0$child = updatedTrees[0].children) === null || _updatedTrees$0$child === void 0 ? void 0 : _updatedTrees$0$child[0].label),
            container = _renderWithTheme6.container;
          expectedContainerToContainString((_trees$0$children = trees[0].children) === null || _trees$0$children === void 0 ? void 0 : _trees$0$children[0].value, container);
          expectTreeToBeHiddenAndClosed((_updatedTrees$0$child2 = updatedTrees[0].children) === null || _updatedTrees$0$child2 === void 0 ? void 0 : _updatedTrees$0$child2[0]);
        });
        (_trees$1$children = trees[1].children) === null || _trees$1$children === void 0 ? void 0 : _trees$1$children.forEach(function (tree, idx) {
          it("should not highlight the child ".concat(idx, " of the second branch"), function () {
            var _updatedTrees$1$child, _updatedTrees$1$child2;
            var _renderWithTheme7 = (0, _testUtils.renderWithTheme)((_updatedTrees$1$child = updatedTrees[1].children) === null || _updatedTrees$1$child === void 0 ? void 0 : _updatedTrees$1$child[idx].label),
              container = _renderWithTheme7.container;
            expectedContainerToContainString(tree.value, container);
            expectTreeToBeHiddenAndClosed((_updatedTrees$1$child2 = updatedTrees[1].children) === null || _updatedTrees$1$child2 === void 0 ? void 0 : _updatedTrees$1$child2[idx]);
          });
        });
      });
      describe('and the search value is found in children', function () {
        var updatedTrees;
        beforeAll(function () {
          updatedTrees = (0, _search_tree.searchTree)(trees, 'secondleaf');
        });
        it("should not highlight the first branch", function () {
          var _renderWithTheme8 = (0, _testUtils.renderWithTheme)(updatedTrees[0].label),
            container = _renderWithTheme8.container;
          expectedContainerToContainString(updatedTrees[0].value, container);
          expectTreeToBeHiddenAndClosed(updatedTrees[0]);
        });
        it("should not highlight the second branch but it should be open", function () {
          var _renderWithTheme9 = (0, _testUtils.renderWithTheme)(updatedTrees[1].label),
            container = _renderWithTheme9.container;
          expectedContainerToContainString(updatedTrees[1].value, container);
          expectTreeToBeVisibleAndOpen(updatedTrees[1]);
        });
        it("should not highlight the first child of the first branch", function () {
          var _updatedTrees$0$child3, _trees$0$children2, _updatedTrees$0$child4;
          var _renderWithTheme10 = (0, _testUtils.renderWithTheme)((_updatedTrees$0$child3 = updatedTrees[0].children) === null || _updatedTrees$0$child3 === void 0 ? void 0 : _updatedTrees$0$child3[0].label),
            container = _renderWithTheme10.container;
          expectedContainerToContainString((_trees$0$children2 = trees[0].children) === null || _trees$0$children2 === void 0 ? void 0 : _trees$0$children2[0].value, container);
          expectTreeToBeHiddenAndClosed((_updatedTrees$0$child4 = updatedTrees[0].children) === null || _updatedTrees$0$child4 === void 0 ? void 0 : _updatedTrees$0$child4[0]);
        });
        it("should not highlight the first child of the second branch", function () {
          var _updatedTrees$1$child3, _trees$1$children2, _updatedTrees$1$child4;
          var _renderWithTheme11 = (0, _testUtils.renderWithTheme)((_updatedTrees$1$child3 = updatedTrees[1].children) === null || _updatedTrees$1$child3 === void 0 ? void 0 : _updatedTrees$1$child3[0].label),
            container = _renderWithTheme11.container;
          expectedContainerToContainString((_trees$1$children2 = trees[1].children) === null || _trees$1$children2 === void 0 ? void 0 : _trees$1$children2[0].value, container);
          expectTreeToBeHiddenAndClosed((_updatedTrees$1$child4 = updatedTrees[1].children) === null || _updatedTrees$1$child4 === void 0 ? void 0 : _updatedTrees$1$child4[0]);
        });
        it("should highlight the second child of the second branch", function () {
          var _updatedTrees$1$child5, _updatedTrees$1$child6;
          var _renderWithTheme12 = (0, _testUtils.renderWithTheme)((_updatedTrees$1$child5 = updatedTrees[1].children) === null || _updatedTrees$1$child5 === void 0 ? void 0 : _updatedTrees$1$child5[1].label),
            container = _renderWithTheme12.container;
          expectedContainerToContainString('secondbranch <b>secondleaf</b>', container);
          expectTreeToBeVisibleAndOpen((_updatedTrees$1$child6 = updatedTrees[1].children) === null || _updatedTrees$1$child6 === void 0 ? void 0 : _updatedTrees$1$child6[1]);
        });
      });
    });
    describe('and it contains malicious content', function () {
      var trees = [{
        children: [{
          value: 'firstbranch firstleaf <img src="foo" onerror="window.alert(1)" />'
        }],
        value: 'firstbranch <img src="foo" onerror="window.alert(1)" />'
      }];
      describe('and the search value is not found', function () {
        var updatedTrees;
        beforeAll(function () {
          updatedTrees = (0, _search_tree.searchTree)(trees, searchValueWithoutMatch);
        });
        it("should sanitize dangerous HTML on the branch", function () {
          var _renderWithTheme13 = (0, _testUtils.renderWithTheme)(updatedTrees[0].label),
            container = _renderWithTheme13.container;
          expectedContainerToContainString('firstbranch <img src="foo">', container);
        });
        it("should sanitize dangerous HTML on the child of the branch", function () {
          var _updatedTrees$0$child5;
          var _renderWithTheme14 = (0, _testUtils.renderWithTheme)((_updatedTrees$0$child5 = updatedTrees[0].children) === null || _updatedTrees$0$child5 === void 0 ? void 0 : _updatedTrees$0$child5[0].label),
            container = _renderWithTheme14.container;
          expectedContainerToContainString('firstbranch firstleaf <img src="foo">', container);
        });
      });
      describe('and the search value is found in children', function () {
        var updatedTrees;
        beforeAll(function () {
          updatedTrees = (0, _search_tree.searchTree)(trees, 'firstbranch');
        });
        it("should highlight and sanitize dangerous HTML on the branch", function () {
          var _renderWithTheme15 = (0, _testUtils.renderWithTheme)(updatedTrees[0].label),
            container = _renderWithTheme15.container;
          expectedContainerToContainString('<b>firstbranch</b> <img src="foo">', container);
        });
        it("should highlight and sanitize dangerous HTML on the child of the branch", function () {
          var _updatedTrees$0$child6;
          var _renderWithTheme16 = (0, _testUtils.renderWithTheme)((_updatedTrees$0$child6 = updatedTrees[0].children) === null || _updatedTrees$0$child6 === void 0 ? void 0 : _updatedTrees$0$child6[0].label),
            container = _renderWithTheme16.container;
          expectedContainerToContainString('<b>firstbranch</b> firstleaf <img src="foo">', container);
        });
      });
    });
  });
  describe('hasAnyVisibleEntry', function () {
    var allHiddenTrees = [{
      hide: true,
      value: 'firstbranch <img src="foo" onerror="window.alert(1)" />'
    }];
    var allHiddenTreesButOne = [{
      hide: false,
      value: 'firstbranch <img src="foo" onerror="window.alert(1)" />'
    }, {
      hide: true,
      value: 'secondbranch <img src="foo" onerror="window.alert(1)" />'
    }];
    describe('when one entry is not hidden', function () {
      it('should return true', function () {
        expect((0, _search_tree.hasAnyVisibleEntry)(allHiddenTreesButOne)).toBe(true);
      });
    });
    describe('when all entries are hidden', function () {
      it('should return true', function () {
        expect((0, _search_tree.hasAnyVisibleEntry)()).toBe(false);
        expect((0, _search_tree.hasAnyVisibleEntry)([])).toBe(false);
        expect((0, _search_tree.hasAnyVisibleEntry)(allHiddenTrees)).toBe(false);
      });
    });
  });
  var expectedContainerToContainString = function expectedContainerToContainString(substring, container) {
    return function () {
      var _container$querySelec;
      expect((_container$querySelec = container.querySelector('div')) === null || _container$querySelec === void 0 ? void 0 : _container$querySelec.innerHTML).toEqual(substring);
    };
  };
  var expectTreeToBeVisibleAndOpen = function expectTreeToBeVisibleAndOpen(tree) {
    expect(tree === null || tree === void 0 ? void 0 : tree.hide).toBe(false);
    expect(tree === null || tree === void 0 ? void 0 : tree.isOpen).toBe(true);
  };
  var expectTreeToBeHiddenAndClosed = function expectTreeToBeHiddenAndClosed(tree) {
    expect(tree === null || tree === void 0 ? void 0 : tree.hide).toBe(true);
    expect(tree === null || tree === void 0 ? void 0 : tree.isOpen).toBe(false);
  };
});
//# sourceMappingURL=search_tree.spec.js.map