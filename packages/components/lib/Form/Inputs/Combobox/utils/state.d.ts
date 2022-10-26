import type { Reducer } from 'react';
import type { ComboboxOptionObject } from '../types';
declare enum ComboboxState {
    IDLE = "IDLE",
    SUGGESTING = "SUGGESTING",
    NAVIGATING = "NAVIGATING",
    INTERACTING = "INTERACTING"
}
declare enum ComboboxActionType {
    CLEAR = "CLEAR",
    CHANGE = "CHANGE",
    CHANGE_SILENT = "CHANGE_SILENT",
    CHANGE_VALUES = "CHANGE_VALUES",
    NAVIGATE = "NAVIGATE",
    SELECT_WITH_KEYBOARD = "SELECT_WITH_KEYBOARD",
    SELECT_WITH_CLICK = "SELECT_WITH_CLICK",
    SELECT_SILENT = "SELECT_SILENT",
    ESCAPE = "ESCAPE",
    BLUR = "BLUR",
    INTERACT = "INTERACT",
    FOCUS = "FOCUS"
}
export { ComboboxActionType, ComboboxState };
export interface ComboboxData {
    inputValue?: string;
    option?: ComboboxOptionObject;
    navigationOption?: ComboboxOptionObject;
    lastActionType?: ComboboxActionType;
}
export interface ComboboxMultiData extends Omit<ComboboxData, 'option'> {
    /**
     * Multi uses both inputValue (typed) and inputValues  (entered chips)
     */
    options: ComboboxOptionObject[];
}
export interface ComboboxAction {
    type: ComboboxActionType;
    state: ComboboxState;
}
export interface ComboboxActionPayload {
    option?: ComboboxOptionObject;
    persistSelection?: boolean;
    inputValue?: string;
}
export interface ComboboxMultiActionPayload extends ComboboxActionPayload {
    inputValues?: string[];
    options?: ComboboxOptionObject[];
}
export declare type ComboboxActionWithPayload = ComboboxAction & ComboboxActionPayload;
export declare type ComboboxMultiActionWithPayload = ComboboxAction & ComboboxMultiActionPayload;
export interface StateChart {
    initial: ComboboxState;
    states: {
        [key in ComboboxState]: {
            on: {
                [key in ComboboxActionType]?: ComboboxState;
            };
        };
    };
}
export declare type ComboboxTransition<TPayload = ComboboxActionPayload> = (action: ComboboxActionType, payload?: TPayload) => void;
export declare const stateChart: StateChart;
export declare const reducer: Reducer<ComboboxData, ComboboxActionWithPayload>;
export declare function getOptionsFromValues(currentOptions: ComboboxOptionObject[], newValues?: string[]): ComboboxOptionObject[];
export declare const reducerMulti: Reducer<ComboboxMultiData, ComboboxMultiActionWithPayload>;
export declare function useReducerMachine<TData = ComboboxData, TPayload = ComboboxActionPayload>(reducerFn: Reducer<TData, ComboboxAction & TPayload>, initialData: TData, defaultPayload: TPayload): [ComboboxState, TData, ComboboxTransition<TPayload>];
