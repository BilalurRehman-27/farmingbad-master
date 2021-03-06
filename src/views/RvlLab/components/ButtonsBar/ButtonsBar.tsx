import React, { useContext } from 'react'
import styled from 'styled-components'
import uniswap from '../../../../assets/images/UniSwap.png'
import sushi from '../../../../assets/images/SushiSwap.png'
import pickle from '../../../../assets/images/Pickle.png'
import sashimi from '../../../../assets/images/SashimiSwap.png'
import yfvalue from '../../../../assets/images/YFValue.png'
import lunaswap from '../../../../assets/images/lunaswap 1.png'
import dodo from '../../../../assets/images/dodo 1.png'
import { RVLContext } from '../../../../contexts/rvlLab/rvlContex'

const ButtonsBarContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
  flex-wrap: wrap;
`

const ColumnSection = styled.div`
  margin: 0 0.5rem;
  cursor: pointer;
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

const UniSwapImg = styled.img`
  &.uniswap {
    position: relative;
    left: 18px;
    bottom: 36px;
  }
`
const SushiImg = styled.img`
  &.sushi {
    position: relative;
    bottom: 38px;
    width: 155px;
    left: 7px;
  }
`
const PickleImg = styled.img`
  &.pickle {
    position: relative;
    bottom: 36px;
    left: 40px;
  }
`
const SashimiImg = styled.img`
  &.sashimi {
    position: relative;
    bottom: 35px;
    width: 156px;
    left: 6px;
  }
`
const YFValue = styled.img`
  &.yfvalue {
    position: relative;
    bottom: 35px;
    left: 16px;
  }
`
const Dodo = styled.img`
  &.dodo {
    position: relative;
    bottom: 42px;
    right: 15px;
  }
`

const LunaSwap = styled.img`
  &.lunaswap {
    position: relative;
    bottom: 40px;
    width: 160px;
    left: 6px;
  }
`

const ButtonsBar = () => {
  const context = useContext(RVLContext)

  const changeImage = React.useCallback(
    (name: any) => {
      context.setCurrentImage(name)
    },
    [context.setCurrentImage],
  )
  return (
    <ButtonsBarContainer>
      <ColumnSection>
        <BoxContainer />
        <UniSwapImg
          onClick={() => changeImage('blue')}
          className="uniswap"
          src={uniswap}
          alt=""
        />
      </ColumnSection>
      <ColumnSection>
        <BoxContainer />
        <SushiImg
          onClick={() => changeImage('sushiSwap')}
          className="sushi"
          src={sushi}
          alt=""
        />
      </ColumnSection>
      <ColumnSection>
        <BoxContainer />
        <PickleImg
          onClick={() => changeImage('pickle')}
          className="pickle"
          src={pickle}
          alt=""
        />
      </ColumnSection>
      <ColumnSection>
        <BoxContainer />
        <SashimiImg
          onClick={() => changeImage('sushi')}
          className="sashimi"
          src={sashimi}
          alt=""
        />
      </ColumnSection>
      <ColumnSection>
        <BoxContainer />
        <YFValue
          onClick={() => changeImage('valueVfv')}
          className="yfvalue"
          src={yfvalue}
          alt=""
        />
      </ColumnSection>
      <ColumnSection>
        <BoxContainer />
        <LunaSwap
          onClick={() => changeImage('luna')}
          className="lunaswap"
          src={lunaswap}
        />
      </ColumnSection>
      <ColumnSection>
        <BoxContainer />
        <Dodo onClick={() => changeImage('dodo')} className="dodo" src={dodo} />
      </ColumnSection>
    </ButtonsBarContainer>
  )
}

export default ButtonsBar
