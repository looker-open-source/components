/*

 MIT License

 Copyright (c) 2023 Google LLC

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
import { getUserAttributes } from './get_user_attributes';

const map = {
  datetime: [
    {
      name: 'created_date',
      label: 'Created Date',
      value: '2019-09-15',
    },
  ],
  number: [
    {
      name: 'id',
      label: 'Looker User ID',
      value: '1234',
    },
  ],
  string: [
    {
      name: 'first_name',
      label: 'First Name',
      value: 'Testfirstname',
    },
    {
      name: 'last_name',
      label: 'Last Name',
      value: 'Testlastname',
    },
  ],
};

describe('getUserAttributeType', () => {
  it('works for number', () => {
    expect(getUserAttributes(map, 'number')).toMatchObject([
      {
        label: 'Looker User ID',
        name: 'id',

        value: '1234',
      },
    ]);
  });
  it('works for date', () => {
    expect(getUserAttributes(map, 'date')).toMatchObject([
      {
        label: 'Created Date',
        name: 'created_date',
        value: '2019-09-15',
      },
    ]);
  });
  it('works for date_time', () => {
    expect(getUserAttributes(map, 'date_time')).toMatchObject([
      {
        label: 'Created Date',
        name: 'created_date',
        value: '2019-09-15',
      },
    ]);
  });
  it('works for string', () => {
    expect(getUserAttributes(map, 'string')).toMatchObject([
      {
        label: 'First Name',
        name: 'first_name',
        value: 'Testfirstname',
      },
      {
        label: 'Last Name',
        name: 'last_name',
        value: 'Testlastname',
      },
    ]);
  });
  it('works for tier', () => {
    // falls back to string
    expect(getUserAttributes(map, 'tier')).toMatchObject([
      {
        label: 'First Name',
        name: 'first_name',
        value: 'Testfirstname',
      },
      {
        label: 'Last Name',
        name: 'last_name',
        value: 'Testlastname',
      },
    ]);
  });
});
