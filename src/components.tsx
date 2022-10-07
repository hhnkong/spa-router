import React, { useEffect, useState } from 'react'
import { RouterContext, useRouter } from './context'
import { RouteObject } from './types'

export function Router({ children }: any): React.ReactElement {
  const [pathname, setPathname] = useState(window.location.pathname)

  const value = {
    pathname,
    push: (to: string) => {
      window.history.pushState({}, '', to)
      setPathname(to)
    },
  }

  useEffect(() => {
    window.addEventListener('popstate', () => {
      setPathname(window.location.pathname)
    })

    return () => {
      window.removeEventListener('popstate', () => {
        setPathname(window.location.pathname)
      })
    }
  }, [])

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  )
}

export function Route({
  path,
  component,
}: RouteObject): React.ReactElement | null {
  const { pathname } = useRouter()

  return path === pathname ? component : null
}
