/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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
import { Tree, TreeGroup, TreeItem, IconButton } from '../..'

export const LongLabels = () => (
  <Tree label="Tree with long labels " icon="ExploreOutline" defaultOpen>
    <Tree label="Wrapping next" icon="VisibilityOutline" defaultOpen>
      <TreeGroup label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus, nulla vitae aliquam placerat, magna quam suscipit sapien, in pretium tellus dolor in nisi. Cras auctor scelerisque ipsum, sit amet faucibus magna bibendum eu. Sed sed tristique nisl, fermentum ultricies libero. Duis non ex nec felis mattis accumsan sed non.">
        <Tree
          label="Orders Lorem ipsum dolor sit amet, consectetur adipiscing elit. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
          icon="Table"
          defaultOpen
        >
          <TreeItem icon="IdeDimension">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </TreeItem>
          <TreeItem icon="IdeDimension">
            Nam sit amet imperdiet lacus, eget ullamcorper nunc. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy.
          </TreeItem>
          <TreeItem
            icon="IdeDimensionGroup"
            detail={
              <IconButton
                icon="CircleInfo"
                label="Get Info"
                onClick={() => alert("You've got info!")}
              />
            }
          >
            Nunc convallis justo sed turpis interdum rutrum ac a neque. Contrary
            to popular belief, Lorem Ipsum is not simply random text. It has
            roots in a piece of classical Latin literature from 45 BC, making it
            over 2000 years old.
          </TreeItem>
        </Tree>
      </TreeGroup>
    </Tree>
    <Tree label="Truncated text" icon="VisibilityOutline" defaultOpen>
      <TreeGroup
        truncate
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus, nulla vitae aliquam placerat, magna quam suscipit sapien, in pretium tellus dolor in nisi. Cras auctor scelerisque ipsum, sit amet faucibus magna bibendum eu. Sed sed tristique nisl, fermentum ultricies libero. Duis non ex nec felis mattis accumsan sed non."
      >
        <Tree
          label="Users Lorem ipsum dolor sit amet, consectetur adipiscing elit. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
          icon="Table"
          truncate
          defaultOpen
        >
          <TreeItem icon="IdeDimension" truncate>
            Very long text renders a tooltip. Vivamus vitae mauris et erat
            sagittis tempus. Mauris euismod aliquet arcu ut viverra. It has
            roots in a piece of classical Latin literature from 45 BC, making it
            over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </TreeItem>
          <TreeItem
            icon="IdeDimension"
            truncate
            detail={
              <IconButton
                icon="CircleInfo"
                label="Get Info"
                onClick={() => alert("You've got info!")}
              />
            }
          >
            Quisque euismod risus quis sapien luctus rutrum. Cras a dui luctus,
            dictum elit vel, pellentesque nisl. Contrary to popular belief,
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old.
          </TreeItem>
          <TreeItem icon="IdeDimensionGroup" truncate>
            This short text should not render a tooltip
          </TreeItem>
        </Tree>
      </TreeGroup>
    </Tree>
  </Tree>
)
