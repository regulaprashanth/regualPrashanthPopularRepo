// Write your code here

const RepositoryItem = props => {
  const {eachRepositoryItem} = props
  return (
    <li>
      <img src={eachRepositoryItem.imageUrl} alt={eachRepositoryItem.name} />
      <h1>{eachRepositoryItem.name}</h1>
      <div>
        <p>{eachRepositoryItem.starsCount} stars</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
          alt="stars"
        />
      </div>
      <div>
        <p>{eachRepositoryItem.starsCount} forks</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
          alt="forks"
        />
      </div>
      <div>
        <p>{eachRepositoryItem.starsCount} issues</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
          alt="issues"
        />
      </div>
    </li>
  )
}

export default RepositoryItem
