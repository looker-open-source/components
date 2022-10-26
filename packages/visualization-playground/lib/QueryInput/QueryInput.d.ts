/// <reference types="react" />
export declare type InputTypes = 'dashboard' | 'query';
export declare type OnQueryInputArgs = {
    type: InputTypes;
    value?: string | number;
};
declare type QueryInputProps = {
    onChange: (queryInput: OnQueryInputArgs) => void;
    dashboardId?: number;
    queryId?: string | number;
    fetchBy?: InputTypes;
    setFetchBy: (input: InputTypes) => void;
};
export declare const QueryInput: ({ onChange, dashboardId, queryId, fetchBy, setFetchBy, }: QueryInputProps) => JSX.Element;
export {};
