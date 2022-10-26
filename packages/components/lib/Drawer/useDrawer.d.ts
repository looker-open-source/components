import type { UseDialogBaseProps } from '../Dialog/useDialog';
import type { DrawerSurfaceProps } from './DrawerSurface';
export interface UseDrawerProps extends UseDialogBaseProps, DrawerSurfaceProps {
}
export declare const useDrawer: ({ ...props }: UseDrawerProps) => import("../Dialog/useDialog").UseDialogResponse;
