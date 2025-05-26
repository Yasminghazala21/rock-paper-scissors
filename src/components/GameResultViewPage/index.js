import {
  GameResultContainer,
  PlayGameInnerContainer,
  ChoiceImage,
  GameResultTitle,
  PlayAgainButton,
} from './styledComponent'

const GameResultViewPage = props => {
  const {usersChoice, opponentsChoice, gameResult, resetTheGame} = props

  const resetGame = () => {
    resetTheGame()
  }

  return (
    <GameResultContainer>
      <PlayGameInnerContainer>
        <ChoiceImage src={usersChoice.imageUrl} alt="your choice" />
        <ChoiceImage src={opponentsChoice.imageUrl} alt="opponent choice" />
      </PlayGameInnerContainer>
      <GameResultTitle>{gameResult}</GameResultTitle>
      <PlayAgainButton type="button" onClick={resetGame}>
        PLAY AGAIN
      </PlayAgainButton>
    </GameResultContainer>
  )
}

export default GameResultViewPage
