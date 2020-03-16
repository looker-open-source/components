export interface ComboboxOptionObject {
  /**
   * Additional data associated with the option, will be passed to onChange.
   */
  label?: string
  /**
   * The value to match against when suggesting.
   */
  value: string
}

export type MaybeComboboxOptionObject = ComboboxOptionObject | undefined
export type ComboboxOptionType =
  | MaybeComboboxOptionObject
  | ComboboxOptionObject[]

export type ComboboxCallback<
  TOption extends ComboboxOptionType = MaybeComboboxOptionObject
> = (option?: TOption) => void

export type ComboboxMultiCallback = ComboboxCallback<ComboboxOptionObject[]>
