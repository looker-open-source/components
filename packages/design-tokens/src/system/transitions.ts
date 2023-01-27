/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

export type TransitionNone = 'none'
export type TransitionRapid = 'rapid'
export type TransitionQuick = 'quick'
export type TransitionSimple = 'simple'
export type TransitionModerate = 'moderate'
export type TransitionComplex = 'complex'
export type TransitionIntricate = 'intricate'

export type Transitions =
  | TransitionNone
  | TransitionRapid
  | TransitionQuick
  | TransitionSimple
  | TransitionModerate
  | TransitionComplex
  | TransitionIntricate

export type TransitionRamp = Record<Transitions, number>
