import { Dashboard } from 'src/pages/dashboard'
import { Theme } from 'src/styles/theme'
import { AssetTreeProvider } from 'src/context/AssetTreeContext'

export const App: React.FC = () => {
  return (
    <>
      <Theme theme="light">
        <AssetTreeProvider>
          <Dashboard />
        </AssetTreeProvider>
      </Theme>
    </>
  )
}
