export interface CheeseData {
    id: string;
    disabled: boolean;
    name: string;
    status: string;
    inventory: number;
    color: string;
    origin: string;
    type?: string;
    calories?: number;
    fat?: number;
    protein?: number;
    calcium?: number;
    description: string;
}
export declare const row: {
    id: string;
    disabled: boolean;
    name: string;
    status: string;
    inventory: number;
    color: string;
    origin: string;
    type: string;
    calories: number;
    fat: number;
    protein: number;
    calcium: number;
    description: string;
};
export declare const data: CheeseData[];
