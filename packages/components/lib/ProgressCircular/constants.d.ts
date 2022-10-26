interface ProgressConstants {
    /**
     * Amount of the circle the arc takes up
     */
    arcSize: number;
    /**
     * How much the start location of the arc should rotate each time
     */
    arcStartRotationInterval: number;
    /**
     * Amount of time it takes to expand and contract arc
     */
    arcTime: number;
    /**
     * Rotation position of the arcs that correspond to their fully contracted state
     */
    baseAngle: number;
    /**
     * Amount of time for indicator to disappear
     */
    shrinkTime: number;
    /**
     * Animation timing for CircularProgress
     */
    timingFunction: string;
}
export declare const progressCircularConstants: ProgressConstants;
export {};
