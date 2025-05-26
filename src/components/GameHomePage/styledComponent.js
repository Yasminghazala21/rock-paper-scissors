import styled from 'styled-components'

export const GameHomePageBgContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 767px) {
    padding: 10px;
  }
`
export const GameDetailsContainer = styled.div`
  width: 100%;
`
export const TitleAndScoreContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 50px;
`
export const GameTitleContainer = styled.div``
export const GameTitleHeading = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  margin-top: 3px;
  margin-bottom: 3px;
  font-weight: 400;
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`
export const ScoreCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px 40px;
  @media screen and (max-width: 767px) {
    padding: 15px 15px;
  }
`
export const ScoreTitle = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif';
  margin-top: 0px;
  margin-bottom: 3px;
  font-weight: 400;
  text-align: center;
  font-size: 25px;
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`
export const TotalScore = styled(ScoreTitle)`
  font-family: 'Roboto';
  margin-top: 3px;
  margin-bottom: 0px;
  font-weight: 800;
  font-size: 50px;
  @media screen and (max-width: 767px) {
    font-size: 30px;
  }
`
export const PlayGameViewContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const PlayGameInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`
