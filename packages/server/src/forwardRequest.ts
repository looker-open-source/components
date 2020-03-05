/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2020 Looker Data Sciences, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import { NodeSettingsIniFile, NodeSession } from '@looker/sdk'
import { Request } from 'express'
import fetch, { Headers } from 'node-fetch'

/**
 *
 * @type {string} Local configuration file name, one directory above
 */
const localConfig = 'looker.ini'

/**
 *
 * @type {NodeSettingsIniFile} Settings retrieved from the configuration file
 */
const settings = new NodeSettingsIniFile(localConfig, 'Looker')

/**
 * Automatic authentication support for the Node SDK
 * @type {NodeSession} Initialized node-based session manager
 */
const session = new NodeSession(settings)

const forwardRequest = async (req: Request) => {
  const endpoint = req.url.replace('/api/', '')
  const apiUrl = `${settings.base_url}/api/${settings.api_version}/${endpoint}`
  const sessionHeaders = await session.login()

  const response = await fetch(apiUrl, {
    headers: new Headers({
      Authorization: `${sessionHeaders.token_type} ${sessionHeaders.access_token}`,
    }),
  })

  const json = await response.json()

  return json
}

export default forwardRequest
