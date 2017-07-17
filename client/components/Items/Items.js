import { PureComponent } from 'react'
import Link from 'next/link'
import { ItemsStyle } from './style'
import NotFound from './NotFound'
import Loading from '../Loading/Loading'
import { searchItems } from '../../Resources/Resources'

const FreeShipingIco = (props) => {
  if (props.free_shipping) {
    return (
      <img src="/static/img/ic_shipping.png" alt="Free Shipping" title="Free Shipping"/>
    )
  }
  return (<span></span>)
}

class Items extends PureComponent {

  constructor (props) {
    super(props)
    this.state = {
      items: [],
      loading: true
    }
  }
  
  componentDidMount() {
    this.setState({ loading: true })
    searchItems(this.props.searchText)
      .then(res => {
        this.props.breadCrumbs(res.data.categories)
        this.setState({ items: res.data.items, loading: false })
      })
  }

  render() {
    if (this.state.loading) return <Loading />
    if (this.state.items.length === 0) return <NotFound />
    let cardList = this.state.items.map(( item ) => (
        <div className="card-item" key={item.id}>
          <figure className="card-item-image">
            <Link role="link" as={`/items/${item.id}`} href={`/items?id=${item.id}`}>
              <img src={item.picture} alt={item.title} title={item.title} />
            </Link>
          </figure>
          <div className="card-item-description">
            <div className="card-item-price">
              $ {item.price.decimals} <FreeShipingIco free_shipping={item.free_shipping}/>
            </div>
            <h2 className="card-item-title" aria-label={item.title}>
              <Link role="link" as={`/items/${item.id}`} href={`/items?id=${item.id}`}>
                <a className="card-item-title__link">
                  {item.title}
                </a>
              </Link>
            </h2>
          </div>
          <div className="card-item-location">
            <div className="card-item-location-name">{item.address.state_name}</div>
          </div>
          <style jsx>{ ItemsStyle }</style>
        </div>
    ))
    return (<div>{ cardList }</div>)
  }
}


export default Items