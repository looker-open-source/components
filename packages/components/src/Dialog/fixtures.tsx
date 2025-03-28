/*

 MIT License

 Copyright (c) 2024 Google LLC

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

import React, { useState } from 'react';
import { Button, ButtonTransparent } from '../Button';
import { Dialog, DialogLayout } from '.';
import type { DialogProps } from '.';

export function Controlled(props: DialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Dialog
        {...props}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        content={
          <DialogLayout
            header="Simple header"
            footer={
              <>
                <Button onClick={() => setIsOpen(false)}>Done Reading</Button>
                <ButtonTransparent
                  color="neutral"
                  onClick={() => setIsOpen(false)}
                >
                  Finish Later
                </ButtonTransparent>
              </>
            }
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry\' s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </DialogLayout>
        }
      />
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
    </>
  );
}

export function ControlledLegacy(props: DialogProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Dialog
        {...props}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        content={
          <DialogLayout
            header="Simple header"
            footer={
              <>
                <Button onClick={() => setIsOpen(false)}>Done Reading</Button>
                <ButtonTransparent
                  color="neutral"
                  onClick={() => setIsOpen(false)}
                >
                  Finish Later
                </ButtonTransparent>
              </>
            }
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry\' s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </DialogLayout>
        }
      />
      <button onClick={() => setIsOpen(true)}>Open Dialog</button>
    </>
  );
}

export function ControlledNoChildren(props: DialogProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Dialog
        {...props}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        content={
          <DialogLayout
            header="Simple header"
            footer={
              <>
                <Button onClick={() => setIsOpen(false)}>Done Reading</Button>
                <ButtonTransparent
                  color="neutral"
                  onClick={() => setIsOpen(false)}
                >
                  Finish Later
                </ButtonTransparent>
              </>
            }
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry\' s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </DialogLayout>
        }
      />
      <button onClick={() => setIsOpen(true)}>Open Dialog</button>
    </>
  );
}

export function CloseIconButton(props: DialogProps) {
  return (
    <Dialog
      {...props}
      content={
        <DialogLayout header="Has a close icon button">
          Some content
        </DialogLayout>
      }
    >
      <Button>Open Dialog</Button>
    </Dialog>
  );
}
