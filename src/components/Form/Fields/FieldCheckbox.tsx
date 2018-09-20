import * as React from 'react'
import { ValidationState } from '../Form'
import { FormControlDirections } from '../FormGroup/FormGroup'
import { Checkbox } from '../Inputs/Checkbox'
import { Field, FieldProps } from './Field'

export class FieldCheckbox extends Field {
  public render() {
    return super.render()
  }

  protected setLabelAlignment(): FormControlDirections | undefined {
    return this.props.alignLabel ? this.props.alignLabel : 'left'
  }

  protected setValidationMethodAlignment(): FormControlDirections | undefined {
    return this.props.alignValidationMessage
      ? this.props.alignValidationMessage
      : 'bottom'
  }

  protected setInput() {
    const {
      id,
      label,
      name,
      alignLabel,
      validationState,
      alignValidationMessage,
      ...props
    } = this.props
    return (
      <Checkbox
        validationType={validationState ? validationState.type : undefined}
        id={id}
        name={name}
        {...props}
      />
    )
  }
}

// export const FieldText: React.SFC<FieldProps> = ({
//   id,
//   label,
//   name,
//   alignLabel,
//   validationState,
//   alignValidationMessage,
//   ...props
// }) => {
//   return FieldJSX<typeof props>(
//     'FieldText',
//     id,
//     label,
//     name,
//     alignLabel,
//     validationState,
//     alignValidationMessage,
//     props
//   )
// }

//       return (
//         <FormControl alignLabel={alignLabel}>
//           <Label htmlFor={id}>
//             {label}
//             {props.required ? <Span> *</Span> : undefined}
//           </Label>
//           {validationState ? (
//             <FormControl
//               alignLabel={
//                 alignValidationMessage ? alignValidationMessage : 'bottom'
//               }
//             >
//               <ValidationMessage type={validationState.type}>
//                 {validationState.message}
//               </ValidationMessage>
//               <InputText
//                 validationType={validationState.type}
//                 id={id}
//                 name={name}
//                 {...props}
//               />
//             </FormControl>
//           ) : (
//             <InputText id={id} name={name} {...props} />
//           )}
//         </FormControl>
//       )
