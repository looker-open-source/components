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

import React, { useState } from 'react'
import { Button, List, ListItem, Heading } from '@looker/components'
import styled from 'styled-components'

export const GetMe = () => {
  const [user, setUser] = useState<any>({})

  function fetchUser() {
    fetch('/api/user')
      .then(response => response.json())
      .then(state => setUser(state))
  }

  return (
    <TestWrapper>
      <div>
        <Button onClick={fetchUser}>Get User Data</Button>
      </div>
      <div>
        <Heading mb="large">User</Heading>
        <List>
          {user && (
            <>
              <ListItem>
                <strong>ID:</strong> {user.id}
              </ListItem>
              <ListItem>
                <strong>Name:</strong> {user.display_name}
              </ListItem>
              <ListItem>
                <strong>Email:</strong> {user.email}
              </ListItem>
              <ListItem>
                <strong>Home Space:</strong> {user.home_space_id}
              </ListItem>
              <ListItem>
                <strong>Role IDs:</strong> {JSON.stringify(user.role_ids)}
              </ListItem>
            </>
          )}
        </List>
      </div>
    </TestWrapper>
  )
}

const TestWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding: 3rem;
  justify-items: left;
  text-align: left;
`
