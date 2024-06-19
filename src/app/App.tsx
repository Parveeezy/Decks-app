import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from './GlobalError/GlobalError.tsx'
import { useAppSelector } from './store.ts'
import { appStatusSelector } from './app-selectors.ts'
import { LinearLoader } from '../common/components/Loader/LinearLoader.tsx'

export const App = () => {
  const status = useAppSelector(appStatusSelector)

  return (
    <div>
      {status === 'loading' && <LinearLoader />}
      <Decks />
      <GlobalError />
      <footer>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi culpa dignissimos eveniet in itaque labore
        necessitatibus nesciunt recusandae sed voluptas.
      </footer>
    </div>
  )
}