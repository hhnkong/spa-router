import React, { useContext } from 'react'

export const initialRouterState = {
  pathname: '/',
  push: (to: string) => {},
}

export const RouterContext = React.createContext(initialRouterState)

export const useRouter = () => {
  const context = useContext(RouterContext)
  return context
}
