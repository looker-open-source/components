/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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
import React from 'react'
import { render } from 'react-dom'
import {
  ComponentsProvider,
  ActionList,
  ActionListItem,
  ActionListItemColumn,
  ActionListColumns,
} from '@looker/components'
import 'core-js/stable'

const people: any[] = []

for (let i = 0; i < 100; i++) {
  people.push({ name: 'Person_' + i })
}

const columns: ActionListColumns = [
  {
    id: 'name',
    primaryKey: true,
    title: 'Name',
    type: 'string',
    widthPercent: 100,
  },
]

/*
class AppClassComponent extends Component {
  render = () => {
    return (
      <ComponentsProvider>
        <ActionList columns={columns}>
          {people.map((person) => (
            <ActionListItem id={person.name} key={person.name}>
              <ActionListItemColumn>{person.name}</ActionListItemColumn>
            </ActionListItem>
          ))}
        </ActionList>
      </ComponentsProvider>
    )
  }
}
*/

const App = () => (
  <ComponentsProvider>
    <ActionList columns={columns}>
      {people.map((person) => (
        <ActionListItem id={person.name} key={person.name}>
          <ActionListItemColumn>{person.name}</ActionListItemColumn>
        </ActionListItem>
      ))}
    </ActionList>
  </ComponentsProvider>
)

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('container'))
})
