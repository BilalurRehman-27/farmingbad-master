import React, { useCallback, useContext } from 'react'
import styled from 'styled-components'

import useModal from '../../../../hooks/useModal'

import DepositMethModal from '../../../../components/DepositMethModal'
import { RVLContext } from '../../../../contexts/rvlLab/rvlContex'

const Container = styled.section`
  display: flex;
  flex-direction: row;
  padding-bottom: 5rem;
  width: 100%;
  justify-content: space-evenly;
  @media (max-width: 767px) {
    flex-direction: column;
    padding-bottom: 0;
    align-items: center;
  }
`
const Column = styled.div`
  width: 343px;
  padding: 0.5rem;
  background: linear-gradient(
    116.22deg,
    #06443c 33.5%,
    #0a4f3d 51.86%,
    #0d6e31 100%
  );
  border: 3px solid #ffffff;
  box-shadow: 6px 8px 8px #052524;
  @media (max-width: 767px) {
    margin: 1rem;
  }
`
const APY = styled.p`
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  color: #ffffff;
  margin-left: auto;
  padding-right: 0.4rem;
`
const VAL = styled.p`
  /* 235.6% */
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 28px;
  /* identical to box height */
  color: #ffffff;
  padding: 0;
  margin: 0;
  padding-right: 1rem;
`
const Meth = styled.p`
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  margin: 0;
`
const Rect = styled.div`
  background: rgba(169, 186, 105, 0.85);
  box-shadow: inset 0px 3px 3px #06443c;
  border-radius: 13px;
  margin-top: 2rem;
  margin-bottom: 1rem;
`

const TextAdjust = styled.span`
  position: relative;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  color: #ffffff;
  padding-left: 1rem;
`
const Button = styled.div`
  /* Rectangle 15 */
  width: 128.19px;
  height: 34.92px;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  cursor: pointer;
`

const ButtonText = styled.span`
  margin: auto;
  position: relative;
  height: 27.07px;
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
`

const MethEth = styled.h2`
  width: 190.91px;
  height: 42.78px;
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 45px;
  color: #ffffff;
  margin: auto;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`
const rvlLabData = [
  {
    meth: 'METH-ETH UNI-V2 LP',
    apy: 'APY',
    val: '235.6%',
    methEth: 'METH-ETH',
    harvestMeth: 'Harvest (METH)',
  },
  {
    meth: 'METH-ETH UNI-V2 LP',
    apy: 'APY',
    val: '235.6%',
    methEth: 'METH-ETH',
    harvestMeth: 'Harvest (METH)',
  },
  {
    meth: 'METH-ETH UNI-V2 LP',
    apy: 'APY',
    val: '235.6%',
    methEth: 'METH-ETH',
    harvestMeth: 'Harvest (METH)',
  },
]
function Cards() {
  const context = useContext(RVLContext)
  const [onPresentWalletProviderModal] = useModal(
    <DepositMethModal currentLogo={context.currentImage} />,
    'provider',
  )
  const handleUnlockClick = useCallback(() => {
    onPresentWalletProviderModal()
  }, [onPresentWalletProviderModal])

  return (
    <Container>
      {rvlLabData.map((rvl, index) => (
        <Column key={`${rvl.methEth}-${index}`}>
          <Row>
            <Meth>{rvl.meth}</Meth>
            <APY>{rvl.apy}</APY>
            <VAL>{rvl.val}</VAL>
          </Row>

          <MethEth>{rvl.methEth}</MethEth>
          <Rect>
            <TextAdjust>{rvl.harvestMeth}</TextAdjust>
          </Rect>
          <Row>
            <Button onClick={handleUnlockClick}>
              <ButtonText>Select</ButtonText>
            </Button>
            <Button>
              <ButtonText>Get LP</ButtonText>
            </Button>
          </Row>
        </Column>
      ))}
    </Container>
  )
}

export default Cards
