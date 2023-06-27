import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {activeLanguageId: languageFiltersData[0].id, repositoryListData: ''}

  componentDidMount() {
    this.getRepository()
  }

  getRepository = async () => {
    const {activeLanguageId} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${activeLanguageId}`,
    )
    const fetchedData = await response.json()
    const updatedData = fetchedData.popular_repos.map(eachData => ({
      id: eachData.id,
      imageUrl: eachData.avatar_url,
      name: eachData.name,
      starsCount: eachData.stars_count,
      forksCount: eachData.forks_count,
      issuesCount: eachData.issues_count,
    }))
    console.log(updatedData)
    this.setState({repositoryListData: updatedData})
  }

  updateActiveLanguageId = id => {
    this.setState({activeLanguageId: id}, this.getRepository)
  }

  render() {
    const {repositoryListData} = this.state
    return (
      <div className="appContainer">
        <h1>Popular</h1>
        <ul>
          {languageFiltersData.map(eachLanguage => (
            <LanguageFilterItem
              key={eachLanguage.id}
              eachLanguageItem={eachLanguage}
              updateActiveLanguageId={this.updateActiveLanguageId}
            />
          ))}
        </ul>

        <ul>
          {repositoryListData.map(eachRepositoryItem => (
            <RepositoryItem
              key={eachRepositoryItem.id}
              eachRepositoryItem={eachRepositoryItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default GithubPopularRepos
