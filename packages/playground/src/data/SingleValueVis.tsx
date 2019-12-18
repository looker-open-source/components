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

const fetchLook = async (id: number, setLookValue: any) => {
  const lookResponse = await fetch(`/api/looks/${id}`)
  const lookJSON = await lookResponse.json()
  setLookValue(lookJSON)
}

export const SingleValueVis: FC<SingleValueVisProps> = ({ lookID }) => {
  const [lookValue, setLookValue] = useState({})

  useEffect(() => {
    fetchLook(lookID, setLookValue)
  }, [lookID])

  console.log(lookValue) // eslint-disable-line no-console

  return <div>Render Single Value Look</div>
}
