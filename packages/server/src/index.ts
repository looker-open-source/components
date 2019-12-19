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

import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import pino from 'express-pino-logger'
import dotenv from 'dotenv'
import forwardRequest from './forwardRequest'

dotenv.config()

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(pino())

app.get('/api/*', async (req: Request, res: Response) => {
  const response = await forwardRequest(req)
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(response))
})

app.listen(
  3001,
  () => console.log('Express server is running on localhost:3001') // eslint-disable-line no-console
)
