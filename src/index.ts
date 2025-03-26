import { ComponentType, ReactNode, FC, createElement, Fragment } from 'react'

export type ProviderWithProps<P = any> = [ComponentType<P>, P?]

export const buildProvidersTree = <P extends ProviderWithProps[]>(providers: [...P]): FC<{ children: ReactNode }> => {
    return ({ children }) => {
        const normalizedChildren =
            typeof children === 'string' || typeof children === 'number' ? createElement(Fragment, null, children) : children

        const result = providers.reduceRight<ReactNode>((acc: ReactNode, providerPair: ProviderWithProps) => {
            const [Provider, props] = providerPair
            return props ? createElement(Provider, props, acc) : createElement(Provider, null, acc)
        }, normalizedChildren)

        return result as React.ReactElement
    }
}
