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
import { Icon, Space, SpaceVertical } from '@looker/components'

export default {
  title: 'Icons',
}

export const Sizes = () => (
  <SpaceVertical>
    <Space>
      <Icon name="Trash" size="xxsmall" />
      <Icon name="Trash" size="xsmall" />
      <Icon name="Trash" size="small" />
      <Icon name="Trash" size="medium" />
      <Icon name="Trash" size="large" />
      <Icon name="Trash" />
    </Space>
  </SpaceVertical>
)

export const Artwork = () => (
  <>
    <Space around>
      <Icon name="GearOutline" size="xxsmall" />
      <Icon name="GearOutline" size="xsmall" />
      <Icon name="GearOutline" size="small" />
      <Icon name="GearOutline" size="medium" />
      <Icon name="GearOutline" size="large" />
    </Space>
    <Space around>
      <Icon
        artwork={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
              fill="#1C2125"
            />
          </svg>
        }
        name="GearOutline"
        size="xxsmall"
      />
      <Icon name="GearOutline" size="xxsmall" />
      <Icon
        artwork={
          <svg>
            <rect
              width="100"
              height="100"
              fill="rgb(0,0,255)"
              strokeWidth="3"
              stroke="rgb(0,0,0)"
            />
          </svg>
        }
      />
      <Icon
        size="large"
        artwork={
          <svg viewBox="0 0 104 97" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14,85l3,9h72c0,0,5-9,4-10c-2-2-79,0-79,1"
              fill="#7C4E32"
            />
            <path
              d="M19,47c0,0-9,7-13,14c-5,6,3,7,3,7l1,14c0,0,10,8,23,8c14,0,26,1,28,0c2-1,9-2,9-4c1-1,27,1,27-9c0-10,7-20-11-29c-17-9-67-1-67-1"
              fill="#E30000"
            />
            <path d="M17,32c-3,48,80,43,71-3 l-35-15" fill="#FFE1C4" />
            <path d="M17,32c9-36,61-32,71-3c-20-9-40-9-71,3" fill="#8ED8F8" />
            <path
              d="M54,35a10 8 60 1 1 0,0.1zM37,38a10 8 -60 1 1 0,0.1z"
              fill="#FFF"
            />
            <path
              d="M41,6c1-1,4-3,8-3c3-0,9-1,14,3l-1,2h-2h-2c0,0-3,1-5,0c-2-1-1-1-1-1l-3,1l-2-1h-1c0,0-1,2-3,2c0,0-2-1-2-3M17,34l0-2c0,0,35-20,71-3v2c0,0-35-17-71,3M5,62c3-2,5-2,8,0c3,2,13,6,8,11c-2,2-6,0-8,0c-1,1-4,2-6,1c-4-3-6-8-2-12M99,59c0,0-9-2-11,4l-3,5c0,1-2,3,3,3c5,0,5,2,7,2c3,0,7-1,7-4c0-4-1-11-3-10"
              fill="#FFF200"
            />
            <path
              d="M56,78v1M55,69v1M55,87v1"
              stroke="#000"
              strokeLinecap="round"
            />
            <path d="M60,36a1 1 0 1 1 0-0.1M49,36a1 1 0 1 1 0-0.1M57,55a2 3 0 1 1 0-0.1M12,94c0,0,20-4,42,0c0,0,27-4,39,0z" />
            <path
              d="M50,59c0,0,4,3,10,0M56,66l2,12l-2,12M25,50c0,0,10,12,23,12c13,0,24,0,35-15"
              fill="none"
              stroke="#000"
              strokeWidth="0.5"
            />
          </svg>
        }
      />
    </Space>
  </>
)
