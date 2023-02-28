import { Layout } from '../components';
import { Button } from '../components';
import { NavBar } from '../components/';

export default function Home() {
  return (
      <>
        <NavBar></NavBar>
        <Layout title="Trip Tise" description="Welcome !">
          <main>
            Coucou
          </main>
          <Button label="Haha" />
        </Layout>
      </>
  )
}
