// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props

  const {imgUrl, name} = destinationDetails

  return (
    <li className="destination-item">
      <div>
        <img src={imgUrl} className="app-img" alt={name} />
        <p className="name">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
