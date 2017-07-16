import Header from './Header'

const MainLayout = (props) => (
  <div className="container-site">
    <Header />
    <div className="content">
      {props.children}
    </div>    
  </div>
)

export default MainLayout