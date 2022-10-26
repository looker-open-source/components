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
import { Card } from '../../Card'
import { CardContent } from '../../CardContent'
import { CardMedia } from '../../CardMedia'
import { Grid } from '../../../Layout'
import { Paragraph, Heading, Span } from '../../../Text'

export default () => {
  return (
    <Grid columns={3}>
      <Card raised>
        <CardMedia
          image="https://placeimg.com/640/480/nature"
          title="Summer Nature"
        />
        <CardContent>
          <Span
            fontSize="xsmall"
            textTransform="uppercase"
            fontWeight="semiBold"
            color="text1"
          >
            Summer
          </Span>
          <Heading as="h4" fontSize="medium" fontWeight="semiBold" truncate>
            Life in The Great Outdoors
          </Heading>
          <Paragraph fontSize="small">
            10 reasons to get off the couch and head outside this summer.
          </Paragraph>
        </CardContent>
      </Card>
      <Card raised>
        <CardMedia
          image="https://placeimg.com/630/480/nature"
          title="A Scenic Valley"
        />
        <CardContent>
          <Span
            fontSize="xsmall"
            textTransform="uppercase"
            fontWeight="semiBold"
            color="text1"
          >
            Explore
          </Span>
          <Heading as="h4" fontSize="medium" fontWeight="semiBold" truncate>
            Best Scenic Hikes
          </Heading>
          <Paragraph fontSize="small">
            Looking for a new place to trailblaze? Make sure it has a great
            view!
          </Paragraph>
        </CardContent>
      </Card>
      <Card raised>
        <CardMedia
          image="https://placeimg.com/620/480/nature"
          title="Relaxing Views"
        />
        <CardContent>
          <Span
            fontSize="xsmall"
            textTransform="uppercase"
            fontWeight="semiBold"
            color="text1"
          >
            Relax
          </Span>
          <Heading as="h4" fontSize="large" fontWeight="semiBold" truncate>
            Mindfull Wilderness
          </Heading>
          <Paragraph fontSize="small">
            Find a place to find your self.
          </Paragraph>
        </CardContent>
      </Card>
    </Grid>
  )
}
