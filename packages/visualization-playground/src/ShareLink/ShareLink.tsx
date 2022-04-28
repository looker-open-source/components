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
import type { FC } from 'react'
import React, { useContext } from 'react'
import {
  DataState,
  useQueryId,
  useQueryIdFromDashboard,
} from '@looker/components-data'
import { Link } from '@looker/components'
import type { ExtensionContextData } from '@looker/extension-sdk-react'
import type { IQuery } from '@looker/sdk'
import { ExtensionContext } from '@looker/extension-sdk-react'

type ShareLinkProps = {
  slug?: string | number
  dashboard?: number
}

export const ShareLink: FC<ShareLinkProps> = ({ slug, dashboard }) => {
  const { extensionSDK } = useContext<ExtensionContextData>(ExtensionContext)

  const { queryId: dashboardQueryId } = useQueryIdFromDashboard(dashboard)
  const { queryId } = useQueryId(slug)
  const { getById } = DataState.useContainer()

  const { share_url = '' } =
    getById(dashboardQueryId || queryId, 'metadata') || ({} as IQuery)

  if (!extensionSDK) return null

  const handleClick = () => {
    extensionSDK.openBrowserWindow(share_url || '', '_blank')
  }

  if (share_url) {
    return (
      <Link href="#" onClick={handleClick} fontSize="small">
        View query in Explore
      </Link>
    )
  } else {
    return null
  }
}
