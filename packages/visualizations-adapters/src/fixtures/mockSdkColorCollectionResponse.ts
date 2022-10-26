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

/*
 * This object represents the color palette data as by the `color_collection` response
 * in our sdk.
 */

export const mockSdkColorCollectionResponse = {
  id: '5591d8d1-6b49-4f8e-bafa-b874d82f8eb7',
  label: 'Vivid',
  categoricalPalettes: [
    {
      id: '18d0c733-1d87-42a9-934f-4ba8ef81d736',
      label: 'Categorical',
      type: 'Categorical',
      colors: [
        '#3D52B9',
        '#08B248',
        '#A918B4',
        '#FC2E31',
        '#FC9200',
        '#2B99F7',
        '#C9DC10',
        '#fa2f90',
        '#FCBF00',
        '#24BED5',
        '#149888',
        '#6F38BB',
      ],
    },
    {
      id: 'b88b6581-484a-4f48-b65b-6631648f867e',
      label: 'Ordered',
      type: 'Categorical',
      colors: [
        '#FCBF00',
        '#FC9200',
        '#FC2E31',
        '#fa2f90',
        '#A918B4',
        '#6F38BB',
        '#3D52B9',
        '#2B99F7',
        '#24BED5',
        '#149888',
        '#08B248',
        '#C9DC10',
      ],
    },
  ],
  sequentialPalettes: [
    {
      id: '97ce1e3f-9504-4d5c-835b-3fbaf78c084a',
      label: 'Sequential',
      type: 'Sequential',
      stops: [
        {
          color: '#FFFFFF',
          offset: 0,
        },
        {
          color: '#3D52B9',
          offset: 100,
        },
      ],
    },
    {
      id: '5378478f-6725-4b04-89cc-75fc42da804e',
      label: 'Sequential',
      type: 'Sequential',
      stops: [
        {
          color: '#ffffff',
          offset: 0,
        },
        {
          color: '#FC2E31',
          offset: 100,
        },
      ],
    },
    {
      id: '0fa90fe5-14a6-47f1-a9e8-4e0d1bd95763',
      label: 'Sequential',
      type: 'Sequential',
      stops: [
        {
          color: '#A918B4',
          offset: 0,
        },
        {
          color: '#3D52B9',
          offset: 50,
        },
        {
          color: '#08B248',
          offset: 100,
        },
      ],
    },
    {
      id: '47dcb9e8-1a4d-43ce-8071-6f4b64d5e85a',
      label: 'Sequential',
      type: 'Sequential',
      stops: [
        {
          color: '#3D52B9',
          offset: 0,
        },
        {
          color: '#08B248',
          offset: 50,
        },
        {
          color: '#C9DC10',
          offset: 100,
        },
      ],
    },
  ],
  divergingPalettes: [
    {
      id: 'a8099e89-1c44-43dd-a3b4-7b76fdc3e338',
      label: 'Diverging',
      type: 'Diverging',
      stops: [
        {
          color: '#FC2E31',
          offset: 0,
        },
        {
          color: '#FFFFFF',
          offset: 50,
        },
        {
          color: '#3D52B9',
          offset: 100,
        },
      ],
    },
    {
      id: '57bef7ef-25c4-448e-83df-9c4de399305d',
      label: 'Diverging',
      type: 'Diverging',
      stops: [
        {
          color: '#FC2E31',
          offset: 0,
        },
        {
          color: '#ffffff',
          offset: 50,
        },
        {
          color: '#08B248',
          offset: 100,
        },
      ],
    },
  ],
}
