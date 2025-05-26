import styled from 'styled-components'

export const GameResultContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PlayGameInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 450px;
  @media screen and (max-width: 575px) {
    width: 300px;
  }
`
export const ChoiceImage = styled.img`
  height: 150px;
  @media screen and (max-width: 575px) {
    height: 80px;
  }
`
export const GameResultTitle = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
`
export const PlayAgainButton = styled.button`
  border-width: 0;
  border-radius: 7px;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-weight: 500;
  padding: 10px 20px;
`
