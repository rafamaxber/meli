import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import axios from 'axios'

const Items = (props) => (
  <MainLayout>
    <p>ITEMS</p>
    <Link href="/about">
      <a>{props.data.author.name}</a>
    </Link>
  </MainLayout>
)

Items.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await axios.get(`http://localhost:4040/api/items/${id}`);
  // Return properties
  return { data: res.data }
}

export default Items