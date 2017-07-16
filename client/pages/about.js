import Link from 'next/link'
import MainLayout from '../components/MainLayout'

const About = () => (
  <MainLayout>
    <p>Pagina about</p>
    <Link href="/">
      <a style={{ fontSize: 20 }}>Volta pra index</a>
    </Link>
  </MainLayout>
)

export default About