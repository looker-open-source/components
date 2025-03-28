/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import { List } from '../List';
import { ListItem } from '../ListItem';
import { Aside, Page, Section } from '../Layout';
import { Panel, Panels } from '..';
import { Box } from '../Layout/Box';
import { Button } from '../Button';
import { FieldText } from '../Form/Fields/FieldText';
import { Paragraph } from '../Text';

export function Nested() {
  return (
    <Page hasAside>
      <Aside width="12rem">
        <Button>Before</Button>
        <Panels>
          <List>
            <Panel
              title="Panel Title"
              content={
                <Panel content="Nested Panel content" title="Nested">
                  <Button>Open nested panel</Button>
                </Panel>
              }
            >
              <ListItem>option A</ListItem>
            </Panel>
            <ListItem>option B</ListItem>
            <ListItem>option C</ListItem>
            <ListItem>option D</ListItem>
          </List>
        </Panels>
      </Aside>
      <Section>
        <Paragraph>Main stuff here...</Paragraph>
        <Button>After</Button>
      </Section>
    </Page>
  );
}

export function AnimationCallbacks() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const focusInput = React.useCallback(() => {
    inputRef.current?.focus();
  }, []);
  const [message, setMessage] = React.useState('');
  const showMessage = () => {
    setMessage('Panel closed');
  };
  return (
    <Page hasAside>
      <Aside width="20rem">
        <Panels>
          <Box p="medium" height={300}>
            <Panel
              title="Animation Callbacks"
              onAfterOpen={focusInput}
              onAfterClose={showMessage}
              content={
                <Box px="medium">
                  <FieldText label="Focus onAfterOpen" ref={inputRef} />
                </Box>
              }
            >
              <Button>Open Panel</Button>
            </Panel>
          </Box>
        </Panels>
      </Aside>
      <Section>
        <Paragraph>Main stuff here...</Paragraph>
        <Paragraph>{message}</Paragraph>
      </Section>
    </Page>
  );
}
