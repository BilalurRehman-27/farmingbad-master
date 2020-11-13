import React from 'react'
import styled from 'styled-components'
import uniswap from '../../../../assets/images/UniSwap.png'
import sushi from '../../../../assets/images/SushiSwap.png'
import pickle from '../../../../assets/images/Pickle.png'
import sashimi from '../../../../assets/images/SashimiSwap.png'
import yfvalue from '../../../../assets/images/YFValue.png'
import lunaswap from '../../../../assets/images/lunaswap 1.png'
import dodo from '../../../../assets/images/dodo 1.png'

const ButtonsBarContainer = styled.section`
  display: flex;
  flex-direction: row;
`

const ButtonsContainer = styled.div`
  float: left;
  width: 14%;
  padding: 0 10px;
`

const BoxContainer = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 160px;
  height: 45px;
  background: #91ac62;
  box-shadow: inset 4px 6px 6px rgba(0, 0, 0, 0.5);
  border-radius: 27px;
`

const ButtonsBar = () => (
  <ButtonsBarContainer>
    <ButtonsContainer>
      <BoxContainer>
        <img className="uniswap" src={uniswap} />
      </BoxContainer>
    </ButtonsContainer>
    <ButtonsContainer>
      <BoxContainer>
        <img className="sushi" src={sushi} />
      </BoxContainer>
    </ButtonsContainer>
    <ButtonsContainer>
      <BoxContainer>
        <img className="pickle" src={pickle} />
      </BoxContainer>
    </ButtonsContainer>
    <ButtonsContainer>
      <BoxContainer>
        <img className="sashimi" src={sashimi} />
      </BoxContainer>
    </ButtonsContainer>
    <ButtonsContainer>
      <BoxContainer>
        <img className="yfvalue" src={yfvalue} />
      </BoxContainer>
    </ButtonsContainer>
    <ButtonsContainer>
      <BoxContainer>
        <img className="lunaswap" src={lunaswap} />
      </BoxContainer>
    </ButtonsContainer>
    <ButtonsContainer>
      <BoxContainer>
        <img className="dodo" src={dodo} />
      </BoxContainer>
    </ButtonsContainer>
  </ButtonsBarContainer>
)

export default ButtonsBar
