import React from 'react'
import { Query, mockSDK } from '@looker/visualizations-adapters'

/* eslint-disable @typescript-eslint/no-explicit-any */

export const QueryDecorator = (Story: any) => {
  return (
    <Query sdk={(mockSDK as unknown) as any} query="12345">
      <Story />
    </Query>
  )
}
