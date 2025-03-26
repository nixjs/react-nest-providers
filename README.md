# @nixjs23n6/react-nest-providers

A lightweight, type-safe utility for composing multiple React providers into a single, nested tree. Simplify your provider setup with a clean, declarative API that supports optional props and seamless integration with TypeScript. Perfect for managing context providers in large-scale React applications. 

## Features:  
- Effortlessly nest multiple providers with a single function  

- Full TypeScript support with automatic prop inference  

- Flexible API for providers with or without props  

- Zero dependencies, minimal footprint



## Install

```shell [npm]
npm install @nixjs23n6/react-nest-providers
```

```shell [pnpm]
pnpm add @nixjs23n6/react-nest-providers
```

```shell [yarn]
yarn add @nixjs23n6/react-nest-providers
```

```shell [bun]
bun add @nixjs23n6/react-nest-providers
```

## Example

```typescript
import { buildProvidersTree } from '@nixjs23n6/react-nest-providers';

const ProviderTree = buildProvidersTree([
  [AuthProvider],
  [ThemeProvider, { theme: 'dark' }],
  [ValueProvider, { value: 10 }],
]);

function App() {
  return <ProviderTree><YourApp /></ProviderTree>;
}
```
