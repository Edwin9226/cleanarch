import { Layout } from '@/styled-components';
import { CreateHomeButton } from './components';
import { HomeTitle } from './styled-components';
export default function Home() {
    return (
    <Layout>
        <HomeTitle> Hola Home</HomeTitle>
        <CreateHomeButton/>
    </Layout>
  )
}
