import { Dashboard } from 'src/pages/dashboard'
import { Theme } from 'src/styles/theme'

export const App = () => {
  return (
    <>
      <Theme theme="light">
        <Dashboard />
      </Theme>
    </>
  )
}
