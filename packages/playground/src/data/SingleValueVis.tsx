/*
 MIT License
 Copyright (c) 2019 Looker Data Sciences, Inc.
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

import React, { FC, useEffect, useState } from 'react'

interface SingleValueVisProps {
  lookID: number
}

const fetchLook = async (id: number, fetchJson?: boolean) => {
  const jsonArgs =
    '/run/json_detail?server_table_calcs=true&apply_formatting=true'

  const lookResponse = await fetch(
    `/api/looks/${id}${fetchJson ? jsonArgs : ''}`
  )
  const formattedResponse = await lookResponse.json()
  return formattedResponse
}

interface LookMeta {
  title: string
}

interface LookData {
  'product.title': { value: string }
  'product.count': { value: number }
}

export const SingleValueVis: FC<SingleValueVisProps> = ({ lookID }) => {
  const [lookMeta, setLookMeta] = useState<LookMeta>()
  const [lookValue, setLookValue] = useState<LookData>()

  useEffect(() => {
    const getData = async () => {
      const metadata = await fetchLook(lookID)
      const data = await fetchLook(lookID, true)

      setLookMeta(metadata)
      setLookValue(data.data[0])
    }
    getData()
  }, [lookID])

  if (!lookMeta || !lookValue) {
    return null
  }

  return (
    <div>
      <h1>Render Single Value Look</h1>
      <div>Title: {lookMeta.title}</div>
      <div>Value: {lookValue['product.count'].value}</div>
    </div>
  )
}
