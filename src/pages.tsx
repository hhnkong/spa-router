import { useRouter } from './context'

export function Home() {
  const { push } = useRouter()

  return (
    <main>
      <h2>Home</h2>
      <button onClick={() => push('/about')}>About</button>
    </main>
  )
}

export function About() {
  const { push } = useRouter()

  return (
    <main>
      <h2>About</h2>
      <button onClick={() => push('/')}>Go Home</button>
    </main>
  )
}
