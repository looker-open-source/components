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
import {
  Button,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogManager,
  InlineInputText,
  IconButton,
  Paragraph,
} from '@looker/components'

export const DialogInlineEditHeader = () => (
  <>
    <DialogManager
      content={
        <>
          <DialogHeader
            fontWeight="normal"
            fontSize="xxlarge"
            detail={
              <IconButton
                icon="Filter"
                size="small"
                label="Filter your stuff!"
              />
            }
          >
            <InlineInputText placeholder="Name your exciting Dialog" />
          </DialogHeader>
          <DialogContent>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
              eros sed nisi pellentesque vulputate ac eu augue. Sed commodo
              sagittis neque, vel vulputate massa. Sed a velit nec ligula
              maximus lacinia. Morbi congue imperdiet sem, rhoncus convallis
              enim bibendum et. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos.
            </Paragraph>
          </DialogContent>
          <DialogFooter>
            <Button>Thank you!</Button>
          </DialogFooter>
        </>
      }
      maxWidth="36rem"
    >
      <Button>Example Dialog</Button>
    </DialogManager>
  </>
)

export default {
  component: DialogInlineEditHeader,
  title: 'Dialog/InlineEdit',
}
