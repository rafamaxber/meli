import { PureComponent } from 'react'
import MainLayout from '../components/MainLayout/MainLayout'
import Item from '../components/Items/Item'
import Items from '../components/Items/Items'
import NotFound from '../components/Items/NotFound'
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs'



const SelectComponent = (props) => {
  
  if (props.urlQuery.search) {
    return <Items searchText={props.urlQuery.search} breadCrumbs={props.breadCrumb}/>
  }
  if (props.urlQuery.id) {
    return <Item itemId={props.urlQuery.id} />
  }

  return <NotFound />
}

class Layout extends PureComponent {
  
  constructor(props) {
    super(props)
    this.state = {
      steps: []
    }
  }

  breadCrumbSteps(steps) {
    this.setState({ steps: steps })
  }

  render() {
    return (
      <MainLayout breadCrumb={ <BreadCrumbs steps={this.state.steps}/> }>
        <div className="limits">
          <SelectComponent breadCrumb={this.breadCrumbSteps.bind(this)} urlQuery={this.props.url.query} />
        </div>
      </MainLayout>
    )
  }
}



export default Layout