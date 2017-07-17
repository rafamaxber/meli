import { BreadCrumbsStyle } from './style'

const Arrow = () => (
  <svg width="15" height="15" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <g fill="#999999" fillRule="evenodd">
      <path d="M6.646 5.354l4 4 .354.353.707-.707-.353-.354-4-4L7 4.293 6.293 5z"></path>
      <path d="M7.354 13.354l4-4L11.707 9 11 8.293l-.354.353-4 4-.353.354.707.707z"></path>
    </g>
  </svg>
)

const BreadCrumbs = (props) => {
  let steps = props.steps.map((item, index, array) => {
    if ((index + 1) >= array.length) return (<li className="breadcrumb-item" key={index}>{item}</li>)
    return (<li className="breadcrumb-item" key={index}>{item} <Arrow /></li>)
  })
  return (
    <div className="limits">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ul className="breadcrumb-list">
          { steps }
        </ul>
      </nav>
      <style jsx global>{ BreadCrumbsStyle }</style>
    </div>
  )
}

export default BreadCrumbs