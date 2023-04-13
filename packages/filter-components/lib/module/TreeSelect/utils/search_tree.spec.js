
import { renderWithTheme } from '@looker/test-utils';
import { mockTreeData } from '../stories/examples';
import { containsString, searchTree, hasAnyVisibleEntry } from './search_tree';
describe('searchTree tests', () => {
  it('should return multiple results', () => {
    var _tree$0$children, _tree$0$children2, _tree$0$children2$0$c, _tree$0$children3, _tree$0$children3$0$c, _tree$0$children4;
    const tree = searchTree(mockTreeData, 'leaf node');
    expect(tree[0].isOpen).toBeTruthy();
    expect((_tree$0$children = tree[0].children) === null || _tree$0$children === void 0 ? void 0 : _tree$0$children[0].isOpen).toBeTruthy();
    expect((_tree$0$children2 = tree[0].children) === null || _tree$0$children2 === void 0 ? void 0 : (_tree$0$children2$0$c = _tree$0$children2[0].children) === null || _tree$0$children2$0$c === void 0 ? void 0 : _tree$0$children2$0$c[0].isOpen).toBeTruthy();
    expect((_tree$0$children3 = tree[0].children) === null || _tree$0$children3 === void 0 ? void 0 : (_tree$0$children3$0$c = _tree$0$children3[0].children) === null || _tree$0$children3$0$c === void 0 ? void 0 : _tree$0$children3$0$c[1].isOpen).toBeTruthy();
    expect((_tree$0$children4 = tree[0].children) === null || _tree$0$children4 === void 0 ? void 0 : _tree$0$children4[1].isOpen).toBeFalsy();
  });
  it('should return two matched results', () => {
    var _tree$0$children5, _tree$0$children6, _tree$0$children6$0$c, _tree$0$children7, _tree$0$children7$0$c, _tree$0$children8, _tree$1$children, _tree$1$children$0$ch;
    const tree = searchTree(mockTreeData, 'another leaf node');
    expect(tree[0].isOpen).toBeTruthy();
    expect((_tree$0$children5 = tree[0].children) === null || _tree$0$children5 === void 0 ? void 0 : _tree$0$children5[0].isOpen).toBeTruthy();
    expect((_tree$0$children6 = tree[0].children) === null || _tree$0$children6 === void 0 ? void 0 : (_tree$0$children6$0$c = _tree$0$children6[0].children) === null || _tree$0$children6$0$c === void 0 ? void 0 : _tree$0$children6$0$c[0].isOpen).toBeFalsy();
    expect((_tree$0$children7 = tree[0].children) === null || _tree$0$children7 === void 0 ? void 0 : (_tree$0$children7$0$c = _tree$0$children7[0].children) === null || _tree$0$children7$0$c === void 0 ? void 0 : _tree$0$children7$0$c[1].isOpen).toBeTruthy();
    expect((_tree$0$children8 = tree[0].children) === null || _tree$0$children8 === void 0 ? void 0 : _tree$0$children8[1].isOpen).toBeFalsy();
    expect(tree[1].isOpen).toBeTruthy();
    expect((_tree$1$children = tree[1].children) === null || _tree$1$children === void 0 ? void 0 : (_tree$1$children$0$ch = _tree$1$children[0].children) === null || _tree$1$children$0$ch === void 0 ? void 0 : _tree$1$children$0$ch[1].isOpen).toBeTruthy();
  });
  it('should return all the results under the searched section', () => {
    var _tree$0$children9;
    const tree = searchTree(mockTreeData, 'some section');
    expect(tree[0].isOpen).toBeTruthy();
    expect((_tree$0$children9 = tree[0].children) === null || _tree$0$children9 === void 0 ? void 0 : _tree$0$children9[0].isOpen).toBeTruthy();
  });
  it('should close all sections', () => {
    const tree = searchTree(mockTreeData, 'asldkfjsldfjsdkf');
    expect(tree[0].isOpen).toBeFalsy();
    expect(tree[1].isOpen).toBeFalsy();
  });
  it('should handle dangerous characters', () => {
    const tree = searchTree(mockTreeData, 'anotha one!~()[]@&=\\');
    expect(tree[0].isOpen).toBeFalsy();
    expect(tree[1].isOpen).toBeFalsy();
  });
});
describe('containsString tests', () => {
  it('should contain the inner string', () => {
    const tree = {
      value: 'The fOx jUmped oVer the bench'
    };
    expect(containsString(tree, 'jumped ov')).toBeTruthy();
  });
  it('should return false if it doesnt contain the string', () => {
    const tree = {
      value: 'The fOx jUmped oVer the bench'
    };
    expect(containsString(tree, 'fox leapt over the')).toBeFalsy();
  });
});
describe('open/close tests', () => {
  it('should return multiple results', () => {
    var _tree$0$children10, _tree$0$children11, _tree$0$children11$0$, _tree$0$children12, _tree$0$children12$0$, _tree$0$children13;
    const tree = searchTree(mockTreeData, 'leaf node');
    expect(tree[0].isOpen).toBeTruthy();
    expect((_tree$0$children10 = tree[0].children) === null || _tree$0$children10 === void 0 ? void 0 : _tree$0$children10[0].isOpen).toBeTruthy();
    expect((_tree$0$children11 = tree[0].children) === null || _tree$0$children11 === void 0 ? void 0 : (_tree$0$children11$0$ = _tree$0$children11[0].children) === null || _tree$0$children11$0$ === void 0 ? void 0 : _tree$0$children11$0$[0].isOpen).toBeTruthy();
    expect((_tree$0$children12 = tree[0].children) === null || _tree$0$children12 === void 0 ? void 0 : (_tree$0$children12$0$ = _tree$0$children12[0].children) === null || _tree$0$children12$0$ === void 0 ? void 0 : _tree$0$children12$0$[1].isOpen).toBeTruthy();
    expect((_tree$0$children13 = tree[0].children) === null || _tree$0$children13 === void 0 ? void 0 : _tree$0$children13[1].isOpen).toBeFalsy();
  });
  it('should return two matched results', () => {
    var _tree$0$children14, _tree$0$children15, _tree$0$children15$0$, _tree$0$children16, _tree$0$children16$0$, _tree$0$children17, _tree$1$children2, _tree$1$children2$0$c;
    const tree = searchTree(mockTreeData, 'another leaf node');
    expect(tree[0].isOpen).toBeTruthy();
    expect((_tree$0$children14 = tree[0].children) === null || _tree$0$children14 === void 0 ? void 0 : _tree$0$children14[0].isOpen).toBeTruthy();
    expect((_tree$0$children15 = tree[0].children) === null || _tree$0$children15 === void 0 ? void 0 : (_tree$0$children15$0$ = _tree$0$children15[0].children) === null || _tree$0$children15$0$ === void 0 ? void 0 : _tree$0$children15$0$[0].isOpen).toBeFalsy();
    expect((_tree$0$children16 = tree[0].children) === null || _tree$0$children16 === void 0 ? void 0 : (_tree$0$children16$0$ = _tree$0$children16[0].children) === null || _tree$0$children16$0$ === void 0 ? void 0 : _tree$0$children16$0$[1].isOpen).toBeTruthy();
    expect((_tree$0$children17 = tree[0].children) === null || _tree$0$children17 === void 0 ? void 0 : _tree$0$children17[1].isOpen).toBeFalsy();
    expect(tree[1].isOpen).toBeTruthy();
    expect((_tree$1$children2 = tree[1].children) === null || _tree$1$children2 === void 0 ? void 0 : (_tree$1$children2$0$c = _tree$1$children2[0].children) === null || _tree$1$children2$0$c === void 0 ? void 0 : _tree$1$children2$0$c[1].isOpen).toBeTruthy();
  });
  it('should return all the results under the searched section', () => {
    var _tree$0$children18;
    const tree = searchTree(mockTreeData, 'some section');
    expect(tree[0].isOpen).toBeTruthy();
    expect((_tree$0$children18 = tree[0].children) === null || _tree$0$children18 === void 0 ? void 0 : _tree$0$children18[0].isOpen).toBeTruthy();
  });
  it('should close all sections', () => {
    const tree = searchTree(mockTreeData, 'asldkfjsldfjsdkf');
    expect(tree[0].isOpen).toBeFalsy();
    expect(tree[1].isOpen).toBeFalsy();
  });
  it('should handle dangerous characters', () => {
    const tree = searchTree(mockTreeData, 'anotha one!~()[]@&=\\');
    expect(tree[0].isOpen).toBeFalsy();
    expect(tree[1].isOpen).toBeFalsy();
  });
});
describe('filtering tests', () => {
  const searchValueWithoutMatch = 'zero';
  describe('when the tree is empty', () => {
    it('should return an empty tree', () => {
      expect(searchTree([], searchValueWithoutMatch)).toMatchObject([]);
    });
  });
  describe('when the tree is not empty', () => {
    describe('and it contains only root elements', () => {
      const trees = [{
        value: 'firstbranch'
      }, {
        value: 'secondbranch'
      }];
      describe('and the search value is not found', () => {
        let updatedTrees;
        beforeAll(() => {
          updatedTrees = searchTree(trees, searchValueWithoutMatch);
        });
        trees.forEach((tree, idx) => {
          it(`should not highlight the '${tree.value}' leaf`, () => {
            const {
              container
            } = renderWithTheme(updatedTrees[idx].label);
            expectedContainerToContainString(tree.value, container);
            expectTreeToBeHiddenAndClosed(updatedTrees[idx]);
          });
        });
      });
      describe('and the search value is found', () => {
        let updatedTrees;
        const notSearchableTrees = [{
          value: 'firstbranch',
          isNotHighlightable: true
        }, {
          value: 'secondbranch'
        }];
        describe('and some first-level values are not highlightable', () => {
          beforeAll(() => {
            updatedTrees = searchTree(notSearchableTrees, 'first');
          });
          it('should not highlight the leaf and hide it', () => {
            const {
              container
            } = renderWithTheme(updatedTrees[0].label);
            expectedContainerToContainString('firstbranch', container);
            expectTreeToBeHiddenAndClosed(updatedTrees[0]);
          });
        });
        describe('and all values are searchable', () => {
          beforeAll(() => {
            updatedTrees = searchTree(trees, 'first');
          });
          it('should highlight one leaf and leave it open', () => {
            const {
              container
            } = renderWithTheme(updatedTrees[0].label);
            expectedContainerToContainString('<b>first</b>branch', container);
            expectTreeToBeVisibleAndOpen(updatedTrees[0]);
          });
          it('should not highlight any leaves', () => {
            const {
              container
            } = renderWithTheme(updatedTrees[1].label);
            expectedContainerToContainString('secondbranch', container);
            expectTreeToBeHiddenAndClosed(updatedTrees[1]);
          });
        });
      });
    });
    describe('and it contains elements with children', () => {
      const trees = [{
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
      describe('and the search value is not found', () => {
        var _trees$1$children;
        let updatedTrees;
        beforeAll(() => {
          updatedTrees = searchTree(trees, searchValueWithoutMatch);
        });
        trees.forEach((tree, idx) => {
          it(`should not highlight the branch ${idx}`, () => {
            const {
              container
            } = renderWithTheme(updatedTrees[idx].label);
            expectedContainerToContainString(tree.value, container);
            expectTreeToBeHiddenAndClosed(updatedTrees[idx]);
          });
        });
        it(`should not highlight the first child of the first branch`, () => {
          var _updatedTrees$0$child, _trees$0$children, _updatedTrees$0$child2;
          const {
            container
          } = renderWithTheme((_updatedTrees$0$child = updatedTrees[0].children) === null || _updatedTrees$0$child === void 0 ? void 0 : _updatedTrees$0$child[0].label);
          expectedContainerToContainString((_trees$0$children = trees[0].children) === null || _trees$0$children === void 0 ? void 0 : _trees$0$children[0].value, container);
          expectTreeToBeHiddenAndClosed((_updatedTrees$0$child2 = updatedTrees[0].children) === null || _updatedTrees$0$child2 === void 0 ? void 0 : _updatedTrees$0$child2[0]);
        });
        (_trees$1$children = trees[1].children) === null || _trees$1$children === void 0 ? void 0 : _trees$1$children.forEach((tree, idx) => {
          it(`should not highlight the child ${idx} of the second branch`, () => {
            var _updatedTrees$1$child, _updatedTrees$1$child2;
            const {
              container
            } = renderWithTheme((_updatedTrees$1$child = updatedTrees[1].children) === null || _updatedTrees$1$child === void 0 ? void 0 : _updatedTrees$1$child[idx].label);
            expectedContainerToContainString(tree.value, container);
            expectTreeToBeHiddenAndClosed((_updatedTrees$1$child2 = updatedTrees[1].children) === null || _updatedTrees$1$child2 === void 0 ? void 0 : _updatedTrees$1$child2[idx]);
          });
        });
      });
      describe('and the search value is found in children', () => {
        let updatedTrees;
        beforeAll(() => {
          updatedTrees = searchTree(trees, 'secondleaf');
        });
        it(`should not highlight the first branch`, () => {
          const {
            container
          } = renderWithTheme(updatedTrees[0].label);
          expectedContainerToContainString(updatedTrees[0].value, container);
          expectTreeToBeHiddenAndClosed(updatedTrees[0]);
        });
        it(`should not highlight the second branch but it should be open`, () => {
          const {
            container
          } = renderWithTheme(updatedTrees[1].label);
          expectedContainerToContainString(updatedTrees[1].value, container);
          expectTreeToBeVisibleAndOpen(updatedTrees[1]);
        });
        it(`should not highlight the first child of the first branch`, () => {
          var _updatedTrees$0$child3, _trees$0$children2, _updatedTrees$0$child4;
          const {
            container
          } = renderWithTheme((_updatedTrees$0$child3 = updatedTrees[0].children) === null || _updatedTrees$0$child3 === void 0 ? void 0 : _updatedTrees$0$child3[0].label);
          expectedContainerToContainString((_trees$0$children2 = trees[0].children) === null || _trees$0$children2 === void 0 ? void 0 : _trees$0$children2[0].value, container);
          expectTreeToBeHiddenAndClosed((_updatedTrees$0$child4 = updatedTrees[0].children) === null || _updatedTrees$0$child4 === void 0 ? void 0 : _updatedTrees$0$child4[0]);
        });
        it(`should not highlight the first child of the second branch`, () => {
          var _updatedTrees$1$child3, _trees$1$children2, _updatedTrees$1$child4;
          const {
            container
          } = renderWithTheme((_updatedTrees$1$child3 = updatedTrees[1].children) === null || _updatedTrees$1$child3 === void 0 ? void 0 : _updatedTrees$1$child3[0].label);
          expectedContainerToContainString((_trees$1$children2 = trees[1].children) === null || _trees$1$children2 === void 0 ? void 0 : _trees$1$children2[0].value, container);
          expectTreeToBeHiddenAndClosed((_updatedTrees$1$child4 = updatedTrees[1].children) === null || _updatedTrees$1$child4 === void 0 ? void 0 : _updatedTrees$1$child4[0]);
        });
        it(`should highlight the second child of the second branch`, () => {
          var _updatedTrees$1$child5, _updatedTrees$1$child6;
          const {
            container
          } = renderWithTheme((_updatedTrees$1$child5 = updatedTrees[1].children) === null || _updatedTrees$1$child5 === void 0 ? void 0 : _updatedTrees$1$child5[1].label);
          expectedContainerToContainString('secondbranch <b>secondleaf</b>', container);
          expectTreeToBeVisibleAndOpen((_updatedTrees$1$child6 = updatedTrees[1].children) === null || _updatedTrees$1$child6 === void 0 ? void 0 : _updatedTrees$1$child6[1]);
        });
      });
    });
    describe('and it contains malicious content', () => {
      const trees = [{
        children: [{
          value: 'firstbranch firstleaf <img src="foo" onerror="window.alert(1)" />'
        }],
        value: 'firstbranch <img src="foo" onerror="window.alert(1)" />'
      }];
      describe('and the search value is not found', () => {
        let updatedTrees;
        beforeAll(() => {
          updatedTrees = searchTree(trees, searchValueWithoutMatch);
        });
        it(`should sanitize dangerous HTML on the branch`, () => {
          const {
            container
          } = renderWithTheme(updatedTrees[0].label);
          expectedContainerToContainString('firstbranch <img src="foo">', container);
        });
        it(`should sanitize dangerous HTML on the child of the branch`, () => {
          var _updatedTrees$0$child5;
          const {
            container
          } = renderWithTheme((_updatedTrees$0$child5 = updatedTrees[0].children) === null || _updatedTrees$0$child5 === void 0 ? void 0 : _updatedTrees$0$child5[0].label);
          expectedContainerToContainString('firstbranch firstleaf <img src="foo">', container);
        });
      });
      describe('and the search value is found in children', () => {
        let updatedTrees;
        beforeAll(() => {
          updatedTrees = searchTree(trees, 'firstbranch');
        });
        it(`should highlight and sanitize dangerous HTML on the branch`, () => {
          const {
            container
          } = renderWithTheme(updatedTrees[0].label);
          expectedContainerToContainString('<b>firstbranch</b> <img src="foo">', container);
        });
        it(`should highlight and sanitize dangerous HTML on the child of the branch`, () => {
          var _updatedTrees$0$child6;
          const {
            container
          } = renderWithTheme((_updatedTrees$0$child6 = updatedTrees[0].children) === null || _updatedTrees$0$child6 === void 0 ? void 0 : _updatedTrees$0$child6[0].label);
          expectedContainerToContainString('<b>firstbranch</b> firstleaf <img src="foo">', container);
        });
      });
    });
  });
  describe('hasAnyVisibleEntry', () => {
    const allHiddenTrees = [{
      hide: true,
      value: 'firstbranch <img src="foo" onerror="window.alert(1)" />'
    }];
    const allHiddenTreesButOne = [{
      hide: false,
      value: 'firstbranch <img src="foo" onerror="window.alert(1)" />'
    }, {
      hide: true,
      value: 'secondbranch <img src="foo" onerror="window.alert(1)" />'
    }];
    describe('when one entry is not hidden', () => {
      it('should return true', () => {
        expect(hasAnyVisibleEntry(allHiddenTreesButOne)).toBe(true);
      });
    });
    describe('when all entries are hidden', () => {
      it('should return true', () => {
        expect(hasAnyVisibleEntry()).toBe(false);
        expect(hasAnyVisibleEntry([])).toBe(false);
        expect(hasAnyVisibleEntry(allHiddenTrees)).toBe(false);
      });
    });
  });
  const expectedContainerToContainString = (substring, container) => () => {
    var _container$querySelec;
    expect((_container$querySelec = container.querySelector('div')) === null || _container$querySelec === void 0 ? void 0 : _container$querySelec.innerHTML).toEqual(substring);
  };
  const expectTreeToBeVisibleAndOpen = tree => {
    expect(tree === null || tree === void 0 ? void 0 : tree.hide).toBe(false);
    expect(tree === null || tree === void 0 ? void 0 : tree.isOpen).toBe(true);
  };
  const expectTreeToBeHiddenAndClosed = tree => {
    expect(tree === null || tree === void 0 ? void 0 : tree.hide).toBe(true);
    expect(tree === null || tree === void 0 ? void 0 : tree.isOpen).toBe(false);
  };
});
//# sourceMappingURL=search_tree.spec.js.map