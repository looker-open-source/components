import type { UsePanelProps, UsePanelResponse } from './types';
export declare const usePanel: ({ canClose, content, defaultOpen, direction, isOpen: controlledIsOpen, onAfterClose, onAfterOpen, onClose, setOpen: controlledSetOpen, disableAnimation, ...headerProps }: UsePanelProps) => UsePanelResponse;
