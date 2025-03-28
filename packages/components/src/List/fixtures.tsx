/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
// eslint-disable-next-line no-restricted-imports
import * as MaterialIcons from '@styled-icons/material';
import { IconButton } from '../Button';
import { ListItem } from '../ListItem';
import { List } from '.';

export function Basic() {
  return (
    <List>
      <ListItem
        icon={<MaterialIcons.SportsSoccer />}
        description="Orange-y"
        detail="England"
      >
        Cheddar
      </ListItem>
      <ListItem icon={<MaterialIcons.DirectionsBoat />} detail="Netherlands">
        Gouda
      </ListItem>
      <ListItem icon={<MaterialIcons.LocalPizza />} detail="Italy">
        Mozzarella
      </ListItem>
      <ListItem icon={<MaterialIcons.BubbleChart />} detail="Switzerland">
        Swiss
      </ListItem>
    </List>
  );
}

export function KeyboardNavigation() {
  return (
    <List>
      <ListItem
        itemRole="none"
        detail={{
          content: (
            <IconButton
              label="cheddar-button"
              icon={<MaterialIcons.DateRange />}
              tooltipDisabled
            />
          ),
          options: { hoverDisclosure: true },
        }}
      >
        Cheddar
      </ListItem>
      <ListItem
        itemRole="none"
        detail={
          <IconButton
            label="gouda-button"
            icon={<MaterialIcons.DateRange />}
            tooltipDisabled
          />
        }
      >
        Gouda
      </ListItem>
    </List>
  );
}

const array3000 = Array.from(Array(3000), (_, i) => String(i));
export function LongList() {
  return (
    <>
      <List width={200}>
        {array3000.map((item, i) => (
          <ListItem key={i}>
            {i > 0 && i % 30 === 0
              ? 'Longlonglonglonglonglonglonglonglonglonglong'
              : item}
          </ListItem>
        ))}
      </List>
      <div>
        Without width on List, windowing plus variable item widths causes the
        layout to be unstable.
      </div>
    </>
  );
}
