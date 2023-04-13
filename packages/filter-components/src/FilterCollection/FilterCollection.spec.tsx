/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import type { IAPIMethods } from '@looker/sdk-rtl'
import { fireEvent, screen } from '@testing-library/react'
import { FilterCollection } from './FilterCollection'
import { DashboardFilter } from '../DashboardFilter'

jest.mock('@looker/sdk', () => ({
  ...jest.requireActual('@looker/sdk'),
  model_fieldname_suggestions: jest.fn((sdk: { get: () => any }) => sdk.get()),
}))

// eslint-disable-next-line import/first
import { model_fieldname_suggestions } from '@looker/sdk'

describe('FilterCollection', () => {
  it('shares state for linked filters', async () => {
    const onChangeMock = jest.fn()
    const sdkOkMock = jest.fn(value => Promise.resolve(value))

    const sdkGetMock = jest.fn(() => ({
      suggestions: ['brand1', 'brand2', 'brand3'],
    }))

    const sdkMock = {
      ok: sdkOkMock,
      get: sdkGetMock,
    } as unknown as IAPIMethods

    renderWithTheme(
      <FilterCollection sdk={sdkMock}>
        <DashboardFilter
          filter={{
            dimension: 'products.category',
            name: 'Category',
            title: 'Category',
            field: {
              name: 'products.category',
              suggestions: ['Accessories', 'Home + Garden'],
              project_name: 'testmodel_',
              suggest_dimension: 'products.category',
              view: 'products',
            },
            model: 'testmodel',
            ui_config: { type: 'button_group' },
          }}
          onChange={onChangeMock}
        />
        <DashboardFilter
          filter={{
            name: 'Brand',
            title: 'Brand',
            listens_to_filters: ['Category'],
            field: {
              name: 'products.brand',
              suggestable: true,
              project_name: 'testmodel_',
              suggest_dimension: 'products.brand',
              view: 'products',
            },
            model: 'testmodel',
            ui_config: { type: 'button_group' },
          }}
          onChange={onChangeMock}
        />
      </FilterCollection>
    )

    fireEvent.click(screen.getByText('Home + Garden'))

    await screen.findByText('brand1')

    expect(model_fieldname_suggestions).toHaveBeenCalledTimes(2)
    expect(model_fieldname_suggestions).toHaveBeenLastCalledWith(
      { ok: sdkOkMock, get: sdkGetMock },
      {
        field_name: 'products.brand',
        filters: {
          'products.category': 'Home%20%2B%20Garden',
        },
        model_name: 'testmodel',
        term: '',
        view_name: 'products',
      }
    )
  })
})
