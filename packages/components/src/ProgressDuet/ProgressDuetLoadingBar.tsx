/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ANIMATION_DURATION } from './utils/constants';

type ProgressDuetLoadingBarProps = {
  animationDelay: number;
};

export const ProgressDuetLoadingBar = ({
  animationDelay,
}: ProgressDuetLoadingBarProps) => {
  return (
    <Wrapper animationDelay={animationDelay}>
      <LoadingBar />
    </Wrapper>
  );
};

const widthTransition = keyframes`
  0% {  width: 0%;}
  100% {  width: 100%;}
`;

const Wrapper = styled.div<Pick<ProgressDuetLoadingBarProps, 'animationDelay'>>`
  width: 100%;
  animation-name: ${widthTransition};
  animation-duration: ${ANIMATION_DURATION}s;
  animation-delay: ${({ animationDelay }) =>
    css`
      ${animationDelay}s
    `};
  animation-timing-function: ease-out;
  animation-iteration-count: once;
  animation-fill-mode: backwards;
`;

const gradientWipeTransition = keyframes`
  0% {  background-position: 100% 100%;}
  100% {  background-position: 37.5% 37.5%;}
`;

const LoadingBar = styled.div`
  height: ${({ theme }) => theme.space.xsmall};
  width: 100%;
  border-radius: ${({ theme }) => theme.space.small};
  background: linear-gradient(
    135deg,
    #d3e3fd,
    #d0f8ff,
    #a8c7fa,
    #99f0ff,
    #d3e3fd,
    #d3e3fd,
    #d0f8ff,
    #a8c7fa,
    #99f0ff,
    #d3e3fd
  );
  background-size: 800% 800%;
  background-attachment: fixed;
  animation-name: ${gradientWipeTransition};
  animation-duration: 6s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  padding: 0;
`;
