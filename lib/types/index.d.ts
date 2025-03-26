import { ComponentType, ReactNode, FC } from 'react';
export type ProviderWithProps<P = any> = [ComponentType<P>, P?];
export declare const buildProvidersTree: <P extends ProviderWithProps<any>[]>(providers: [...P]) => FC<{
    children: ReactNode;
}>;
