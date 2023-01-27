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
import React from 'react'
import { Aside, Layout, Page, Section, SpaceVertical } from '../../Layout'
import { Panel, Panels } from '..'
import { Paragraph } from '../../Text'
import { Button } from '../../Button'

export default function CenterPlacement() {
  return (
    <Page hasAside height="100vh">
      <Aside width="navigation">Left sidebar</Aside>
      <Layout hasAside>
        <Section>
          <Panels>
            <Panel
              title="Some title"
              content={
                <SpaceVertical>
                  <Panel
                    title="Another title"
                    direction="right"
                    content={
                      <SpaceVertical>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                        <Paragraph>Some other text</Paragraph>
                      </SpaceVertical>
                    }
                  >
                    <Button>Open Another Panel</Button>
                  </Panel>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                  <Paragraph>Some text</Paragraph>
                </SpaceVertical>
              }
            >
              <Button>Open Panel</Button>
            </Panel>
            <Paragraph>Content to be covered by the panel</Paragraph>
          </Panels>
        </Section>
        <Aside width="sidebar">Right sidebar</Aside>
      </Layout>
    </Page>
  )
}
