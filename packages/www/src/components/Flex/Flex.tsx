import React from 'react'
import {
  Code,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableDataCell,
  Text,
} from '@looker/components'

export const ItemDistribution = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeaderCell width="40%">Justify Property</TableHeaderCell>
        <TableHeaderCell>Behavior</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>center</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">Pack items around the center</Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>flex-start</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">Pack items from the start</Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>flex-end</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">Pack items from the end</Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>space-between</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">
            Distribute items evenly. The first item is flush with the start, the
            last is flush with the end{' '}
          </Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>space-around</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">
            Distribute items evenly. Items have a half-size space on either end
          </Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>space-evenly</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">
            Distribute items evenly. Items have equal space around them
          </Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>stretch</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">
            Distribute items evenly. Items strechted to fit the container
          </Text>
        </TableDataCell>
      </TableRow>
    </TableBody>
  </Table>
)

export const AlignContent = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeaderCell width="40%">AlignContent Property</TableHeaderCell>
        <TableHeaderCell>Behavior</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>center</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">
            Lines are packed to the center of container
          </Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>flex-start</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">
            Lines are packed to the start of the container
          </Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>flex-end</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">
            Lines are packed to the start of the container
          </Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>space-between</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">
            Lines evenly distributed. First line at start of container, last
            line at end of container
          </Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>space-around</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">
            Lines evenly distributed. Even space around each line
          </Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>stretch</Code>
          </span>{' '}
          <Text fontSize="xsmall">(default)</Text>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">Items strechted to fit the container</Text>
        </TableDataCell>
      </TableRow>
    </TableBody>
  </Table>
)

export const AligningItems = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeaderCell width="40%">AlignItems Property</TableHeaderCell>
        <TableHeaderCell>Behavior</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>center</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">Items are aligned center of container</Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>flex-start</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">
            Items are aligned to the start of the container
          </Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>flex-end</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">
            Items are aligned to the start of the container
          </Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>baseline</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">
            All items are aligned so their baselines align
          </Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>stretch</Code>
          </span>
          <Text fontSize="xsmall">(default)</Text>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">Items strechted to fit the container</Text>
        </TableDataCell>
      </TableRow>
    </TableBody>
  </Table>
)

export const AligningContent = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeaderCell width="40%">AlignContent Property</TableHeaderCell>
        <TableHeaderCell>Behavior</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>center</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">
            Lines are packed to the center of container
          </Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>flex-start</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">
            Lines are packed to the start of the container
          </Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>flex-end</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">
            Lines are packed to the start of the container
          </Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>space-between</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">
            Lines evenly distributed. First line at start of container, last
            line at end of container
          </Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>space-around</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">
            Lines evenly distributed. Even space around each line
          </Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>stretch</Code>
          </span>{' '}
          <Text fontSize="xsmall">(default)</Text>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">Items strechted to fit the container</Text>
        </TableDataCell>
      </TableRow>
    </TableBody>
  </Table>
)

// FlexItem

export const AdjustingIndividualAlignment = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeaderCell width="40%">alignSelf Property</TableHeaderCell>
        <TableHeaderCell>Behavior</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>center</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">Pack items around the center</Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>flex-start</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">Pack items from the start</Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>flex-end</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">Pack items from the end</Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>baseline</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">Item aligned to its baseline</Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>stretch</Code>
          </span>{' '}
          <Text fontSize="xsmall">(default)</Text>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">stretch to the container</Text>
        </TableDataCell>
      </TableRow>
    </TableBody>
  </Table>
)

export const FlexItemExample = () => (
  <TableRow>
    <TableHead>
      <TableRow>
        <TableHeaderCell width="20%">flex Property</TableHeaderCell>
        <TableHeaderCell>Behavior</TableHeaderCell>
        <TableHeaderCell>Accepts</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>flex-grow</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">
            Specifies the grow factor of a flex item
          </Text>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">A positive unitless number</Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>flex-shrink</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">
            Specifies the shrink factor of a flex item
          </Text>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">A positive unitless number</Text>
        </TableDataCell>
      </TableRow>
      <TableRow>
        <TableDataCell>
          <span className="prop-code">
            <Code>flex-basis</Code>
          </span>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">Specifies the flex items size</Text>
        </TableDataCell>
        <TableDataCell>
          <Text fontSize="xsmall">A valid width unit</Text>
        </TableDataCell>
      </TableRow>
    </TableBody>
  </TableRow>
)
