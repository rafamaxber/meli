import Link from 'next/link'
import MainLayout from '../components/MainLayout'

const Index = (props) => (
  <MainLayout>
    <p>ITEMS</p>
    <Link href="/about">
      <a>ITEMS</a>
    </Link>
      {console.log(props.url.query.id)}
  </MainLayout>
)

export default Index