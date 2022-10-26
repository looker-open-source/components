import type { FC, ReactNode } from 'react';
import type { DialogRenderProp } from '../Dialog/DialogRender';
import type { UseDrawerProps } from './useDrawer';
export interface DrawerProps extends UseDrawerProps {
    children?: DialogRenderProp | ReactNode;
}
export declare const Drawer: FC<DrawerProps>;
