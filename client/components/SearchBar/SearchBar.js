import { SearchBarStyle } from './style'

const SearchIcon = () => (
  <img src="/static/img/ic_Search.png" />
)

const SearchBar = () => (
  <div className="search_bar">
    <form action="/items" method="GET" role="search">
      <input className="search_input" maxLength="120" name="search" aria-required="true" type="search" required placeholder="Buscar Producto" autoFocus autoCapitalize="off" autoCorrect="off" aria-autocomplete="list" />
      <button className="search_button" type="submit" aria-label="Buscar">
        <SearchIcon />
        <span hidden>Buscar</span>
      </button>
    </form>
    <style jsx>{ SearchBarStyle }</style>
  </div>
)

export default SearchBar