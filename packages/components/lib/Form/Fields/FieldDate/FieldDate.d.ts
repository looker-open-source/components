/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import type { FieldProps, FloatingLabelFieldProps } from '../Field/types';
import type { InputDateProps } from '../../Inputs/InputDate';
export interface FieldDateProps extends FieldProps, FloatingLabelFieldProps, InputDateProps {
}
export declare const FieldDate: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<Pick<FieldDateProps, "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "width" | "border" | "borderBottom" | "borderColor" | "borderLeft" | "borderRadius" | "borderRight" | "borderTop" | "margin" | "padding" | "value" | "label" | "p" | "pt" | "pb" | "pl" | "pr" | "py" | "paddingY" | "px" | "paddingX" | "borderX" | "borderY" | "inline" | "disabled" | "className" | "id" | "aria-describedby" | "aria-labelledby" | "children" | "onChange" | "defaultValue" | "readOnly" | "required" | "description" | "externalLabel" | "validationMessage" | "detail" | "locale" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "marginX" | "my" | "marginY" | "validationType" | "ariaLabelOnly" | "hideLabel" | "autoResize" | "onValidationFail" | "dateStringFormat"> & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {}, never>;
