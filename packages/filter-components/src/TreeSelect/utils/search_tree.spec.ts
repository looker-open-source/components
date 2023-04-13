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
import { renderWithTheme } from '@looker/test-utils'
import type React from 'react'
import { mockTreeData } from '../stories/examples'
import type { TreeModel } from '../types'
import { containsString, searchTree, hasAnyVisibleEntry } from './search_tree'

describe('searchTree tests', () => {
  it('should return multiple results', () => {
    const tree = searchTree(mockTreeData, 'leaf node')
    expect(tree[0].isOpen).toBeTruthy()
    expect(tree[0].children?.[0].isOpen).toBeTruthy()
    expect(tree[0].children?.[0].children?.[0].isOpen).toBeTruthy()
    expect(tree[0].children?.[0].children?.[1].isOpen).toBeTruthy()
    expect(tree[0].children?.[1].isOpen).toBeFalsy()
  })

  it('should return two matched results', () => {
    const tree = searchTree(mockTreeData, 'another leaf node')
    expect(tree[0].isOpen).toBeTruthy()
    expect(tree[0].children?.[0].isOpen).toBeTruthy()
    expect(tree[0].children?.[0].children?.[0].isOpen).toBeFalsy()
    expect(tree[0].children?.[0].children?.[1].isOpen).toBeTruthy()
    expect(tree[0].children?.[1].isOpen).toBeFalsy()
    expect(tree[1].isOpen).toBeTruthy()
    expect(tree[1].children?.[0].children?.[1].isOpen).toBeTruthy()
  })

  it('should return all the results under the searched section', () => {
    const tree = searchTree(mockTreeData, 'some section')
    expect(tree[0].isOpen).toBeTruthy()
    expect(tree[0].children?.[0].isOpen).toBeTruthy()
  })

  it('should close all sections', () => {
    const tree = searchTree(mockTreeData, 'asldkfjsldfjsdkf')
    expect(tree[0].isOpen).toBeFalsy()
    expect(tree[1].isOpen).toBeFalsy()
  })

  it('should handle dangerous characters', () => {
    const tree = searchTree(mockTreeData, 'anotha one!~()[]@&=\\')
    expect(tree[0].isOpen).toBeFalsy()
    expect(tree[1].isOpen).toBeFalsy()
  })
})

describe('containsString tests', () => {
  it('should contain the inner string', () => {
    const tree = { value: 'The fOx jUmped oVer the bench' } as TreeModel

    expect(containsString(tree, 'jumped ov')).toBeTruthy()
  })

  it('should return false if it doesnt contain the string', () => {
    const tree = { value: 'The fOx jUmped oVer the bench' } as TreeModel

    expect(containsString(tree, 'fox leapt over the')).toBeFalsy()
  })
})

describe('open/close tests', () => {
  it('should return multiple results', () => {
    const tree = searchTree(mockTreeData, 'leaf node')
    expect(tree[0].isOpen).toBeTruthy()
    expect(tree[0].children?.[0].isOpen).toBeTruthy()
    expect(tree[0].children?.[0].children?.[0].isOpen).toBeTruthy()
    expect(tree[0].children?.[0].children?.[1].isOpen).toBeTruthy()
    expect(tree[0].children?.[1].isOpen).toBeFalsy()
  })

  it('should return two matched results', () => {
    const tree = searchTree(mockTreeData, 'another leaf node')
    expect(tree[0].isOpen).toBeTruthy()
    expect(tree[0].children?.[0].isOpen).toBeTruthy()
    expect(tree[0].children?.[0].children?.[0].isOpen).toBeFalsy()
    expect(tree[0].children?.[0].children?.[1].isOpen).toBeTruthy()
    expect(tree[0].children?.[1].isOpen).toBeFalsy()
    expect(tree[1].isOpen).toBeTruthy()
    expect(tree[1].children?.[0].children?.[1].isOpen).toBeTruthy()
  })

  it('should return all the results under the searched section', () => {
    const tree = searchTree(mockTreeData, 'some section')
    expect(tree[0].isOpen).toBeTruthy()
    expect(tree[0].children?.[0].isOpen).toBeTruthy()
  })

  it('should close all sections', () => {
    const tree = searchTree(mockTreeData, 'asldkfjsldfjsdkf')
    expect(tree[0].isOpen).toBeFalsy()
    expect(tree[1].isOpen).toBeFalsy()
  })

  it('should handle dangerous characters', () => {
    const tree = searchTree(mockTreeData, 'anotha one!~()[]@&=\\')
    expect(tree[0].isOpen).toBeFalsy()
    expect(tree[1].isOpen).toBeFalsy()
  })
})

describe('filtering tests', () => {
  const searchValueWithoutMatch = 'zero'

  describe('when the tree is empty', () => {
    it('should return an empty tree', () => {
      expect(searchTree([], searchValueWithoutMatch)).toMatchObject([])
    })
  })

  describe('when the tree is not empty', () => {
    describe('and it contains only root elements', () => {
      const trees = [
        { value: 'firstbranch' } as TreeModel,
        { value: 'secondbranch' } as TreeModel,
      ]

      describe('and the search value is not found', () => {
        let updatedTrees: TreeModel[]

        beforeAll(() => {
          updatedTrees = searchTree(trees, searchValueWithoutMatch)
        })

        trees.forEach((tree, idx) => {
          it(`should not highlight the '${tree.value}' leaf`, () => {
            const { container } = renderWithTheme(
              updatedTrees[idx].label as React.ReactElement
            )
            expectedContainerToContainString(tree.value, container)
            expectTreeToBeHiddenAndClosed(updatedTrees[idx])
          })
        })
      })

      describe('and the search value is found', () => {
        let updatedTrees: TreeModel[]

        const notSearchableTrees = [
          { value: 'firstbranch', isNotHighlightable: true } as TreeModel,
          { value: 'secondbranch' } as TreeModel,
        ]

        describe('and some first-level values are not highlightable', () => {
          beforeAll(() => {
            updatedTrees = searchTree(notSearchableTrees, 'first')
          })

          it('should not highlight the leaf and hide it', () => {
            const { container } = renderWithTheme(
              updatedTrees[0].label as React.ReactElement
            )
            expectedContainerToContainString('firstbranch', container)
            expectTreeToBeHiddenAndClosed(updatedTrees[0])
          })
        })

        describe('and all values are searchable', () => {
          beforeAll(() => {
            updatedTrees = searchTree(trees, 'first')
          })

          it('should highlight one leaf and leave it open', () => {
            const { container } = renderWithTheme(
              updatedTrees[0].label as React.ReactElement
            )
            expectedContainerToContainString('<b>first</b>branch', container)
            expectTreeToBeVisibleAndOpen(updatedTrees[0])
          })

          it('should not highlight any leaves', () => {
            const { container } = renderWithTheme(
              updatedTrees[1].label as React.ReactElement
            )
            expectedContainerToContainString('secondbranch', container)
            expectTreeToBeHiddenAndClosed(updatedTrees[1])
          })
        })
      })
    })

    describe('and it contains elements with children', () => {
      const trees = [
        {
          children: [{ value: 'firstbranch firstleaf' } as TreeModel],
          value: 'firstbranch',
        } as TreeModel,
        {
          children: [
            { value: 'secondbranch firstleaf' } as TreeModel,
            { value: 'secondbranch secondleaf' } as TreeModel,
          ],
          value: 'secondbranch',
        } as TreeModel,
      ]

      describe('and the search value is not found', () => {
        let updatedTrees: TreeModel[]

        beforeAll(() => {
          updatedTrees = searchTree(trees, searchValueWithoutMatch)
        })

        trees.forEach((tree, idx) => {
          it(`should not highlight the branch ${idx}`, () => {
            const { container } = renderWithTheme(
              updatedTrees[idx].label as React.ReactElement
            )
            expectedContainerToContainString(tree.value, container)
            expectTreeToBeHiddenAndClosed(updatedTrees[idx])
          })
        })

        it(`should not highlight the first child of the first branch`, () => {
          const { container } = renderWithTheme(
            updatedTrees[0].children?.[0].label as React.ReactElement
          )
          expectedContainerToContainString(
            trees[0].children?.[0].value,
            container
          )
          expectTreeToBeHiddenAndClosed(updatedTrees[0].children?.[0])
        })

        trees[1].children?.forEach((tree, idx) => {
          it(`should not highlight the child ${idx} of the second branch`, () => {
            const { container } = renderWithTheme(
              updatedTrees[1].children?.[idx].label as React.ReactElement
            )
            expectedContainerToContainString(tree.value, container)
            expectTreeToBeHiddenAndClosed(updatedTrees[1].children?.[idx])
          })
        })
      })

      describe('and the search value is found in children', () => {
        let updatedTrees: TreeModel[]

        beforeAll(() => {
          updatedTrees = searchTree(trees, 'secondleaf')
        })

        it(`should not highlight the first branch`, () => {
          const { container } = renderWithTheme(
            updatedTrees[0].label as React.ReactElement
          )
          expectedContainerToContainString(updatedTrees[0].value, container)
          expectTreeToBeHiddenAndClosed(updatedTrees[0])
        })

        it(`should not highlight the second branch but it should be open`, () => {
          const { container } = renderWithTheme(
            updatedTrees[1].label as React.ReactElement
          )
          expectedContainerToContainString(updatedTrees[1].value, container)
          expectTreeToBeVisibleAndOpen(updatedTrees[1])
        })

        it(`should not highlight the first child of the first branch`, () => {
          const { container } = renderWithTheme(
            updatedTrees[0].children?.[0].label as React.ReactElement
          )
          expectedContainerToContainString(
            trees[0].children?.[0].value,
            container
          )
          expectTreeToBeHiddenAndClosed(updatedTrees[0].children?.[0])
        })

        it(`should not highlight the first child of the second branch`, () => {
          const { container } = renderWithTheme(
            updatedTrees[1].children?.[0].label as React.ReactElement
          )
          expectedContainerToContainString(
            trees[1].children?.[0].value,
            container
          )
          expectTreeToBeHiddenAndClosed(updatedTrees[1].children?.[0])
        })

        it(`should highlight the second child of the second branch`, () => {
          const { container } = renderWithTheme(
            updatedTrees[1].children?.[1].label as React.ReactElement
          )
          expectedContainerToContainString(
            'secondbranch <b>secondleaf</b>',
            container
          )
          expectTreeToBeVisibleAndOpen(updatedTrees[1].children?.[1])
        })
      })
    })

    describe('and it contains malicious content', () => {
      const trees = [
        {
          children: [
            {
              value:
                'firstbranch firstleaf <img src="foo" onerror="window.alert(1)" />',
            } as TreeModel,
          ],
          value: 'firstbranch <img src="foo" onerror="window.alert(1)" />',
        } as TreeModel,
      ]

      describe('and the search value is not found', () => {
        let updatedTrees: TreeModel[]

        beforeAll(() => {
          updatedTrees = searchTree(trees, searchValueWithoutMatch)
        })

        it(`should sanitize dangerous HTML on the branch`, () => {
          const { container } = renderWithTheme(
            updatedTrees[0].label as React.ReactElement
          )
          expectedContainerToContainString(
            'firstbranch <img src="foo">',
            container
          )
        })

        it(`should sanitize dangerous HTML on the child of the branch`, () => {
          const { container } = renderWithTheme(
            updatedTrees[0].children?.[0].label as React.ReactElement
          )
          expectedContainerToContainString(
            'firstbranch firstleaf <img src="foo">',
            container
          )
        })
      })

      describe('and the search value is found in children', () => {
        let updatedTrees: TreeModel[]

        beforeAll(() => {
          updatedTrees = searchTree(trees, 'firstbranch')
        })

        it(`should highlight and sanitize dangerous HTML on the branch`, () => {
          const { container } = renderWithTheme(
            updatedTrees[0].label as React.ReactElement
          )
          expectedContainerToContainString(
            '<b>firstbranch</b> <img src="foo">',
            container
          )
        })

        it(`should highlight and sanitize dangerous HTML on the child of the branch`, () => {
          const { container } = renderWithTheme(
            updatedTrees[0].children?.[0].label as React.ReactElement
          )
          expectedContainerToContainString(
            '<b>firstbranch</b> firstleaf <img src="foo">',
            container
          )
        })
      })
    })
  })

  describe('hasAnyVisibleEntry', () => {
    const allHiddenTrees = [
      {
        hide: true,
        value: 'firstbranch <img src="foo" onerror="window.alert(1)" />',
      } as TreeModel,
    ]

    const allHiddenTreesButOne = [
      {
        hide: false,
        value: 'firstbranch <img src="foo" onerror="window.alert(1)" />',
      } as TreeModel,
      {
        hide: true,
        value: 'secondbranch <img src="foo" onerror="window.alert(1)" />',
      } as TreeModel,
    ]

    describe('when one entry is not hidden', () => {
      it('should return true', () => {
        expect(hasAnyVisibleEntry(allHiddenTreesButOne)).toBe(true)
      })
    })

    describe('when all entries are hidden', () => {
      it('should return true', () => {
        expect(hasAnyVisibleEntry()).toBe(false)
        expect(hasAnyVisibleEntry([])).toBe(false)
        expect(hasAnyVisibleEntry(allHiddenTrees)).toBe(false)
      })
    })
  })

  const expectedContainerToContainString =
    (substring: string | undefined, container: HTMLElement) => () => {
      // eslint-disable-next-line testing-library/no-container
      expect(container.querySelector('div')?.innerHTML).toEqual(substring)
    }

  const expectTreeToBeVisibleAndOpen = (tree?: TreeModel) => {
    expect(tree?.hide).toBe(false)
    expect(tree?.isOpen).toBe(true)
  }

  const expectTreeToBeHiddenAndClosed = (tree?: TreeModel) => {
    expect(tree?.hide).toBe(true)
    expect(tree?.isOpen).toBe(false)
  }
})
