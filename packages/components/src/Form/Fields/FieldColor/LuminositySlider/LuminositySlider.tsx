/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import styled from 'styled-components'

export const LuminositySlider = styled.input.attrs({ type: 'range' })`
  appearance: none;
  background: transparent;
  width: ${props => props.width};

  :focus {
    outline: none;
  }

  /* Webkit Styling */
  &::-webkit-slider-thumb {
    appearance: none;
    background: #fff;
    border: 1px solid ${props => props.theme.colors.palette.charcoal300};
    border-radius: 50%;
    cursor: pointer;
    height: 14px;
    margin-top: -4px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
    width: 14px;
  }

  &::-webkit-slider-runnable-track {
    background-image: linear-gradient(to right, #000, #fff);
    border: 1px solid ${props => props.theme.colors.palette.charcoal200};
    cursor: pointer;
    height: 8px;
    width: 100%;
  }

  /* Mozilla Styling */
  &::-moz-range-thumb {
    background: #fff;
    border: 1px solid ${props => props.theme.colors.palette.charcoal300};
    border-radius: 50%;
    cursor: pointer;
    height: 12px;
    width: 12px;
  }

  &::-moz-range-track {
    background-image: linear-gradient(to right, #000, #fff);
    border: 1px solid ${props => props.theme.colors.palette.charcoal200};
    cursor: pointer;
    height: 6px;
    width: 100%;
  }

  /* IE / Edge Styling */
  &::-ms-thumb {
    background: #fff;
    border: 1px solid ${props => props.theme.colors.palette.charcoal300};
    border-radius: 50%;
    cursor: pointer;
    height: 12px;
    width: 12px;
  }

  &::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
    cursor: pointer;
    height: 6px;
    width: 100%;
  }

  &::-ms-fill-lower {
    background-image: linear-gradient(to right, #000, #fff);
    border: 1px solid ${props => props.theme.colors.palette.charcoal200};
  }

  &::-ms-fill-upper {
    background-image: linear-gradient(to right, #000, #fff);
    border: 1px solid ${props => props.theme.colors.palette.charcoal200};
  }

  &:focus::-webkit-slider-runnable-track {
    background-image: linear-gradient(to right, #000, #fff);
  }

  &:focus::-ms-fill-lower {
    background-image: linear-gradient(to right, #000, #fff);
  }

  &:focus::-ms-fill-upper {
    background-image: linear-gradient(to right, #000, #fff);
  }
`

LuminositySlider.defaultProps = { width: '100%' }
