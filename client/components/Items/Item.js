import { PureComponent } from 'react'
import { fetchItemById } from '../../Resources/Resources'
import { ItemStyle } from './style'
import NotFound from './NotFound'
import Loading from '../Loading/Loading'

class Item extends PureComponent {

  constructor (props) {
    super(props)
    this.state = {
      item: {},
      loading: true,
      errors: ''
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetchItemById(this.props.itemId)
      .then(res => {
        this.setState({item: res.data.item, loading: false})
      })
      .catch(err => {
        this.setState({ errors: true, items: [], loading: false })
      })

  }

  render() {
    if (this.state.errors) return <NotFound errors={this.state.errors} />
    if (this.state.loading) return <Loading />
    if (!this.state.item) return <NotFound />
    return (
      <div className="card-hero-item">

        <figure className="card-hero-item-image-container">
          <img className="card-hero-item-image" src={this.state.item.picture} alt={this.state.item.title} title={this.state.item.title} />
        </figure>

        <div className="card-hero-item-info">
          <div className="card-item-sold-info">
            <span className="card-item-condition">{this.state.item.condition}</span>
            <span className="card-item-sold-quantity"> - {this.state.item.sold_quantity}</span>
            <span className="card-item-sold-text"> vendidos</span>
          </div>
          <h1 className="card-hero-item-title">
            {this.state.item.title}
          </h1>
          <div className="card-hero-item-price">
            $ {this.state.item.price && this.state.item.price.decimals}
          </div>
          <div className="card-hero-item-shop-button">
            <a className="shop-button" role="link" aria-label="Comprar">Comprar</a>
          </div>
        </div>

        <div className="card-hero-item-description">
          <h2 className="card-hero-item-description-title">
            Description del producto
          </h2>
          <div className="card-hero-item-description-text" dangerouslySetInnerHTML={{ __html: this.state.item.description }}></div>
        </div>
        <style jsx>{ ItemStyle }</style>
      </div>
    )
  }
}

// const Item = ({props}) => (

// )

export default Item
