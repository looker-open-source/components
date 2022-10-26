export declare const mockData: {
    'orders.count': number;
    'orders.average_total_amount_of_order_usd': number;
    'orders.created_date': string;
    'users.state': string;
}[];
export declare const mockDataWithNull: ({
    'orders.count': number;
    'orders.average_total_amount_of_order_usd': number;
    'orders.created_date': string;
    'users.state': string;
} | {
    'orders.count': null;
    'orders.average_total_amount_of_order_usd': null;
    'orders.created_date': string;
    'users.state': string;
})[];
export declare const mockTotals: {
    'orders.average_total_amount_of_order_usd': number;
    'orders.count': number;
};
export declare const mockRawTotals: {
    'orders.average_total_amount_of_order_usd': {
        value: number;
    };
    'orders.count': {
        value: number;
    };
};
export declare const mockNestedRawTotals: {
    'history.count': {
        '2022-08': {
            value: null;
        };
        '2022-09': {
            value: number;
        };
        '2022-10': {
            value: number;
        };
        $$$_row_total_$$$: {
            value: number;
        };
    };
};
export declare const mockNestedTotals: {
    '2022-08 - history.count': null;
    '2022-09 - history.count': number;
    '2022-10 - history.count': number;
    '$$$_row_total_$$$ - history.count': number;
};
export declare const mockDataWithRowTotals: ({
    'dashboard.title': null;
    '2022-08 - history.count': null;
    '2022-09 - history.count': number;
    '2022-10 - history.count': number;
    '$$$_row_total_$$$ - history.count': number;
} | {
    'dashboard.title': string;
    '2022-08 - history.count': null;
    '2022-09 - history.count': number;
    '2022-10 - history.count': null;
    '$$$_row_total_$$$ - history.count': number;
})[];
export declare const mockPivotedData: {
    'users.city': string;
    'f - orders.count': number;
    'm - orders.count': number;
    'male - orders.count': null;
}[];
