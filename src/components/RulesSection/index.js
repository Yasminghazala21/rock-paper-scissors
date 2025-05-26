import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  RuleButton,
  PopupMainContainer,
  PopupRulesContainer,
  RulesCloseButton,
  RulesImage,
} from './styledComponent'

const RulesSection = () => (
  <PopupMainContainer>
    <Popup modal trigger={<RuleButton>Rules</RuleButton>}>
      {close => (
        <PopupRulesContainer>
          <RulesCloseButton type="button" onClick={() => close()}>
            <RiCloseLine />
          </RulesCloseButton>
          <RulesImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </PopupRulesContainer>
      )}
    </Popup>
  </PopupMainContainer>
)

export default RulesSection
