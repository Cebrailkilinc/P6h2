'use client'
import React, { createContext, PropsWithChildren, useContext } from 'react'

export namespace $context {
  export const buildContext = <P extends PropsWithChildren<any>, T>(
    useInitialHook: (props: P) => T = () => ({}) as T
  ) => {
    const Context = createContext(null as T)

    const useContextHook = () => {
      const ctx = useContext(Context)

      if (ctx === null) {
        throw new Error('useContext() must be called under an appropriate Provider')
      }

      return ctx as T
    }

    const ProviderComponent = (props: P) => {
      const { children } = props as PropsWithChildren<P>
      const state = useInitialHook(props)

      return <Context.Provider value={state}>{children}</Context.Provider>
    }

    return {
      Provider: ProviderComponent,
      useContext: useContextHook,
      Consumer: Context.Consumer,
    }
  }
}
