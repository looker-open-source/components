import styled from 'styled-components'
import { Slider } from '../../../Inputs/Slider'

export const LuminositySlider = styled(Slider)`
  appearance: none;
  background: transparent;
  width: 100%;

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
