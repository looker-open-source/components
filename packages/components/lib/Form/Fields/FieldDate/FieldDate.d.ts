/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import type { FieldProps, FloatingLabelFieldProps } from '../Field/types';
import type { InputDateProps } from '../../Inputs/InputDate';
export interface FieldDateProps extends FieldProps, FloatingLabelFieldProps, InputDateProps {
}
export declare const FieldDate: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<Pick<FieldDateProps, "width" | "label" | "p" | "children" | "value" | "aria-describedby" | "aria-labelledby" | "disabled" | "readOnly" | "required" | "defaultValue" | "className" | "id" | "onChange" | "locale" | "border" | "borderBottom" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderColor" | "borderLeft" | "borderRadius" | "borderRight" | "borderTop" | "borderTopLeftRadius" | "borderTopRightRadius" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "inline" | "detail" | "pt" | "pb" | "pl" | "pr" | "py" | "paddingY" | "px" | "paddingX" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "marginX" | "my" | "marginY" | "description" | "borderX" | "borderY" | "validationMessage" | "validationType" | "ariaLabelOnly" | "hideLabel" | "autoResize" | "externalLabel" | "onValidationFail" | "dateStringFormat"> & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {}, never>;
