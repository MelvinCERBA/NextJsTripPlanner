import { SeoMeta } from '../components'
import { TripSearchBar } from '../components'

export default function Page() {
  return (
    <>
      <SeoMeta title="Test page !" description="Quelle description" />
      <main>
        <TripSearchBar />
      </main>
    </>
  )
}
