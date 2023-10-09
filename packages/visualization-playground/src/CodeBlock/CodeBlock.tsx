/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import styled from 'styled-components';
import Highlight, { defaultProps } from 'prism-react-renderer';
import type { Language } from 'prism-react-renderer';
import { theme } from '@looker/components';

type CodeBlockProps = {
  code: string;
  language: Language;
};

export const CodeBlock = ({ code, language }: CodeBlockProps) => {
  return (
    <Highlight {...defaultProps} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};
const Pre = styled.pre`
  border-radius: ${theme.radii.large};
  margin: ${theme.sizes.small};
  padding: ${theme.sizes.small};
  text-align: left;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  opacity: 0.5;
  padding-right: ${theme.sizes.small};
  text-align: right;
  user-select: none;
`;

const LineContent = styled.span`
  display: table-cell;
`;
