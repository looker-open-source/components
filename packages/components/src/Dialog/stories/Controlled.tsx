/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react';
import { Dialog, DialogLayout } from '../../Dialog';
import type { DialogProps } from '../Dialog';
import { Button, ButtonTransparent } from '../../Button';

export default function Controlled(props: DialogProps) {
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
