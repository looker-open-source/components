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
import { Info } from '@styled-icons/material'
import {
  Explore,
  TableChart,
  Visibility,
} from '@styled-icons/material-outlined'

import { Tree, TreeCollection, TreeItem, IconButton } from '../..'

export default function LongLabels() {
  return (
    <TreeCollection>
      <Tree
        label={<strong>Tree with long labels</strong>}
        icon={<Explore />}
        defaultOpen
      >
        <Tree
          label={<strong>Wrapping next</strong>}
          icon={<Visibility />}
          defaultOpen
        >
          <Tree
            label={
              <strong>
                Orders Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated Lorem Ipsum is therefore always free from repetition,
                injected humour, or non-characteristic words etc.
              </strong>
            }
            icon={<TableChart />}
            defaultOpen
          >
            <TreeItem icon={<Info />}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TreeItem>
            <TreeItem icon={<Info />}>
              Nam sit amet imperdiet lacus, eget ullamcorper nunc. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.
            </TreeItem>
            <TreeItem
              icon={<Info />}
              detail={{
                content: (
                  <IconButton
                    icon={<Info />}
                    label="Get Info"
                    onClick={() => alert("You've got info!")}
                  />
                ),
                options: {
                  accessory: true,
                },
              }}
            >
              Nunc convallis justo sed turpis interdum rutrum ac a neque.
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </TreeItem>
          </Tree>
        </Tree>
        <Tree
          label={<strong>Truncated text</strong>}
          icon={<Visibility />}
          defaultOpen
        >
          <Tree
            label={
              <strong>
                Users Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </strong>
            }
            icon={<TableChart />}
            truncate
            defaultOpen
          >
            <TreeItem icon={<Info />} truncate>
              Very long text renders a tooltip. Vivamus vitae mauris et erat
              sagittis tempus. Mauris euismod aliquet arcu ut viverra. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source.
            </TreeItem>
            <TreeItem
              icon={<Info />}
              truncate
              detail={{
                content: (
                  <IconButton
                    icon={<Info />}
                    label="Get Info"
                    onClick={() => alert("You've got info!")}
                  />
                ),
                options: {
                  accessory: true,
                },
              }}
            >
              Quisque euismod risus quis sapien luctus rutrum. Cras a dui
              luctus, dictum elit vel, pellentesque nisl. Contrary to popular
              belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over
              2000 years old.
            </TreeItem>
            <TreeItem icon={<Info />} truncate>
              This short text should not render a tooltip
            </TreeItem>
          </Tree>
        </Tree>
      </Tree>
    </TreeCollection>
  )
}
