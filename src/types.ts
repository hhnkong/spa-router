export interface RouterState {
  pathname: string
  push: (to: string) => void
}

export interface RouteObject {
  path: string
  component: React.ReactElement
}
