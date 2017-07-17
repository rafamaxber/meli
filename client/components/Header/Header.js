import Link from 'next/link'
import SearchBar from '../SearchBar/SearchBar'
import { HeaderStyle, LogoStyle } from './style'

const Header = () => (
  <div className="main_header">
    <div className="limits">
      <Logo />
      <SearchBar />
    </div>
    <style jsx>{ HeaderStyle }</style>
  </div>
)

const Logo = () => (
  <Link href="/">
    <a className="logo" role="link">
      <img src="/static/img/Logo_ML.png" alt="Mercado Livre" title="Mercado Livre" />
      <style jsx>{ LogoStyle }</style>
    </a>
  </Link>
)

export default Header