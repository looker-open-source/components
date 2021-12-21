import React from 'react'
import type { Story } from '@storybook/react/types-6-0'
import {
  mockSdkConfigResponse,
  mockSdkFieldsResponse,
  mockSdkDataResponse,
  QueryContext,
} from '@looker/visualizations-adapters'
import { Fields, tabularResponse } from '@looker/visualizations'

export const QueryDecorator = (Story: Story) => {
  return (
    <QueryContext.Provider
      value={{
        config: { ...mockSdkConfigResponse },
        ok: true,
        loading: false,
        data: tabularResponse([...mockSdkDataResponse]),
        fields: { ...mockSdkFieldsResponse } as Fields,
      }}
    >
      <Story />
    </QueryContext.Provider>
  )
}
