import {Component} from 'react'

import GameSelections from '../GameSelections'
import GameResultViewPage from '../GameResultViewPage'
import RulesSection from '../RulesSection'

import {
  GameHomePageBgContainer,
  GameDetailsContainer,
  TitleAndScoreContainer,
  GameTitleContainer,
  GameTitleHeading,
  ScoreCard,
  ScoreTitle,
  TotalScore,
  PlayGameViewContainer,
  PlayGameInnerContainer,
} from './styledComponent'

class GameHomePage extends Component {
  state = {
    score: 0,
    isGameActive: true,
    usersChoice: '',
    opponentsChoice: '',
    gameResult: '',
  }

  checkSelection = userSelection => {
    const {score} = this.state
    const {choicesList} = this.props

    const getRandomSelection =
      choicesList[Math.floor(Math.random() * choicesList.length)]

    let result
    if (userSelection.id === getRandomSelection.id) {
      result = 'IT IS DRAW'
    } else if (
      (userSelection.id === 'ROCK' && getRandomSelection.id === 'SCISSORS') ||
      (userSelection.id === 'PAPER' && getRandomSelection.id === 'ROCK') ||
      (userSelection.id === 'SCISSORS' && getRandomSelection.id === 'PAPER')
    ) {
      result = 'YOU WON'
    } else {
      result = 'YOU LOSE'
    }

    let newScore = score
    if (result === 'YOU WON') {
      newScore += 1
    } else if (result === 'YOU LOSE') {
      newScore -= 1
    }

    this.setState({
      isGameActive: false,
      score: newScore,
      usersChoice: userSelection,
      opponentsChoice: getRandomSelection,
      gameResult: result,
    })
  }

  resetGame = () => {
    this.setState({
      isGameActive: true,
      usersChoice: '',
      opponentsChoice: '',
      gameResult: '',
    })
  }

  render() {
    const {
      score,
      isGameActive,
      usersChoice,
      opponentsChoice,
      gameResult,
    } = this.state
    const {choicesList} = this.props
    return (
      <GameHomePageBgContainer>
        <GameDetailsContainer>
          <TitleAndScoreContainer>
            <GameTitleContainer>
              <GameTitleHeading>ROCK</GameTitleHeading>
              <GameTitleHeading>PAPER</GameTitleHeading>
              <GameTitleHeading>SCISSORS</GameTitleHeading>
            </GameTitleContainer>
            <ScoreCard>
              <ScoreTitle>Score</ScoreTitle>
              <TotalScore>{score}</TotalScore>
            </ScoreCard>
          </TitleAndScoreContainer>
          <PlayGameViewContainer>
            {isGameActive ? (
              <PlayGameInnerContainer>
                {choicesList.map(eachChoice => (
                  <GameSelections
                    key={eachChoice.id}
                    details={eachChoice}
                    checkSelection={this.checkSelection}
                  />
                ))}
              </PlayGameInnerContainer>
            ) : (
              <GameResultViewPage
                usersChoice={usersChoice}
                opponentsChoice={opponentsChoice}
                gameResult={gameResult}
                resetTheGame={this.resetGame}
              />
            )}
          </PlayGameViewContainer>
        </GameDetailsContainer>
        <RulesSection />
      </GameHomePageBgContainer>
    )
  }
}

export default GameHomePage
