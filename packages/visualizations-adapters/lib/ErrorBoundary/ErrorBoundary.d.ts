/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { Component } from 'react';
import type { ReactNode, ErrorInfo } from 'react';
import type { SDKRecord, Fields, CAll } from '../types';
interface ErrorBoundaryProps {
    children: ReactNode;
    data?: SDKRecord[];
    config?: CAll;
    fields?: Fields;
}
interface ErrorBoundaryState {
    hasError: boolean;
    errorMessage: Error;
    stackTrace?: ErrorInfo;
}
export declare class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): {
        errorMessage: Error;
        hasError: boolean;
    };
    componentDidCatch(errorMessage: Error, stackTrace: ErrorInfo): void;
    render(): React.ReactNode;
}
export {};
