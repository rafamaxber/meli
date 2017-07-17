import Head from 'next/head'
import Header from '../Header/Header'
import { ResetCss } from '../Reset/style'
import { MainLayoutStyleGlobal } from './styleGlobal'

const MainLayout = (props) => (
  <div>
    <Head>
      <title>Mercado Libre</title>
    </Head>

    <div className="container-site">
      <Header />
      {props.breadCrumb}
      <div className="content">
        {props.children}
      </div>
      <style jsx global>{ ResetCss }</style>
      <style jsx global>{ MainLayoutStyleGlobal }</style>
    </div>
  </div>
)

export default MainLayout
