// Write your code here
const LanguageFilterItem = props => {
  const {eachLanguageItem, updateActiveLanguageId} = props
  const {id, language} = eachLanguageItem

  const onClickChangeLanguage = () => {
    updateActiveLanguageId(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickChangeLanguage}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
