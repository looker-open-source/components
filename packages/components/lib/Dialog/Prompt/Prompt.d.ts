import type { FC, ReactNode } from 'react';
import type { PromptBaseProps } from './PromptDialog';
export interface PromptProps extends PromptBaseProps {
    /**
     * Render prop is passed the confirmation opener
     */
    children: (onClick: () => void) => ReactNode;
}
export declare function usePrompt(props: PromptBaseProps): [ReactNode, () => void];
export declare const Prompt: FC<PromptProps>;
