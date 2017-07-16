import Link from 'next/link'
import MainLayout from '../components/MainLayout'

const Index = (props) => (
  <MainLayout>
    <p>Hello Word</p>
    <Link href="/about">
      <a>About page</a>
    </Link>
  </MainLayout>
)

export default Index