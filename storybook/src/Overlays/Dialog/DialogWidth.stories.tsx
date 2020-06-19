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

import React, { useState } from 'react'
import {
  Button,
  DialogContent,
  Dialog,
  DialogManager,
  Confirm,
  Space,
} from '@looker/components'

export const All = () => (
  <Space>
    <DialogFixedWidth />
    <DialogResponsiveWidth />
    <DialogManagerWidth />
    <ConfirmWidth />
  </Space>
)

export default {
  component: All,
  title: 'Overlays/Dialog/MaxWidth',
}

export const DialogFixedWidth = () => {
  const [isOpen, setOpen] = useState(false)
  const handleClick = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Dialog isOpen={isOpen} onClose={handleClose} maxWidth="300px">
        <DialogContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et eros
          sed nisi pellentesque vulputate ac eu augue. Sed commodo sagittis
          neque, vel vulputate massa. Sed a velit nec ligula maximus lacinia.
          Morbi congue imperdiet sem, rhoncus convallis enim bibendum et. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </DialogContent>
      </Dialog>
      <Button onClick={handleClick}>Open fixed max width dialog</Button>
    </>
  )
}

export const DialogResponsiveWidth = () => {
  const [isOpen, setOpen] = useState(false)
  const handleClick = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Dialog
        isOpen={isOpen}
        onClose={handleClose}
        maxWidth={['90vw', '50vw', '500px']}
      >
        <DialogContent>
          Sed a velit nec ligula maximus lacinia. Morbi congue imperdiet sem,
          rhoncus convallis enim bibendum et. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos.
        </DialogContent>
      </Dialog>
      <Button onClick={handleClick}>Open dynamic max width dialog</Button>
    </>
  )
}

export const DialogManagerWidth = () => {
  return (
    <DialogManager
      content={
        <DialogContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et eros
          sed nisi pellentesque vulputate ac eu augue. Sed commodo sagittis
          neque, vel vulputate massa.
        </DialogContent>
      }
      maxWidth="200px"
    >
      {(open) => (
        <Button onClick={open}>Open static width DialogManager</Button>
      )}
    </DialogManager>
  )
}

export const ConfirmWidth = () => {
  return (
    <Confirm
      title="Confirm Something"
      message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      onConfirm={(close) => {
        alert('You did something')
        close()
      }}
      maxWidth={['10rem', '20rem', '30rem', '40rem']}
    >
      {(open) => (
        <Button onClick={open} mr="small">
          Open responsive width Confirm dialog
        </Button>
      )}
    </Confirm>
  )
}
