import {GameChoiceButton, ChoiceImage} from './styledComponent'

const GameSelections = props => {
  const {details, checkSelection} = props
  const {imageUrl, id} = details

  const onClickSelection = () => {
    checkSelection(details)
  }

  return (
    <GameChoiceButton
      data-testid={`${id.toLowerCase()}Button`}
      onClick={onClickSelection}
      type="button"
    >
      <ChoiceImage src={imageUrl} alt={id} />
    </GameChoiceButton>
  )
}

export default GameSelections
