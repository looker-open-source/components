import { FC } from 'react';

declare enum types {
    TAB = "tab",
    PANEL = "panel",
    TOOL = "tool",
    TOOLEXTRA = "toolextra",
    PREVIEW = "preview",
    NOTES_ELEMENT = "notes-element"
}
declare type Types = types | string;

declare class Provider {
    getElements(_type: Types): void;
    handleAPI(_api: unknown): void;
    getConfig(): {};
}

interface RootProps {
    provider: Provider;
    history?: History;
}
declare const Root: FC<RootProps>;
declare function renderStorybookUI(domNode: HTMLElement, provider: Provider): void;

export { Provider, Root, RootProps, renderStorybookUI };
