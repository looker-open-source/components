/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import styled from 'styled-components';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';
import type { Language } from 'prism-react-renderer';

type PrismCodeBlockProps = {
  code: string;
  language: Language;
};

export const PrismCodeBlock = ({ code, language }: PrismCodeBlockProps) => {
  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ key: i, line })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ key, token })} />
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
  border: none;
  border-radius: ${({ theme }) => theme.radii.medium};
  text-align: left;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  opacity: 0.5;
  padding-right: ${({ theme }) => theme.sizes.small};
  text-align: right;
  user-select: none;
`;

const LineContent = styled.span`
  display: table-cell;
`;
