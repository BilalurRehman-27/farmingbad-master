import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import metamaskLogo from '../../assets/images/Blue.png'
import Heisenberg from '../../assets/images/Heisenberg.png'
import Harvest from '../../assets/images/Harvest.png'
import Button from '../Button'
import Modal, { ModalProps } from '../Modal'
import ModalActions from '../ModalActions'
import ModalContent from '../ModalContent'
import ModalTitle from '../ModalTitle'
import aPprove from '../../assets/images/aPprove METH-ETH.png'
import Unstake from '../../assets/images/Unstake.png'
import plus from '../../assets/images/+.png'
import MyAccountWalletPopup from './components/MyAccountWallet'
import DepositModal from '../../views/Farm/components/DepositModal'

const WalletProviderModal: React.FC<any> = ({ onDismiss, currentLogo }) => {
  const { account } = useWallet()

  const [showMyAccountPopup, setMyAccountPopup] = useState(false)
  useEffect(() => {
    if (account) {
      onDismiss()
    }
  }, [account, onDismiss])
  const showMyAccountModal = () => {
    setMyAccountPopup(true)
  }

  const onHandleChildModal = (isVisible: boolean) => {
    setMyAccountPopup(isVisible)
  }
  return (
    <>
      {showMyAccountPopup ? (
        <MyAccountWalletPopup onHandle={onHandleChildModal} />
      ) : (
        <Modal>
          <ModalContent>
            <ImageContainer>
              <LogoImage src={Heisenberg} />
              <BalanceForming>
                Deposit METH-ETH UNI-V2 LP Tokens and earn METH
              </BalanceForming>
            </ImageContainer>

            <Elipse className="eclipse_center">
              <img
                className="logo_adjustment logo_adjustment2_farming"
                src={currentLogo}
                alt="logo"
              />
            </Elipse>
          </ModalContent>
          <ModelFooter>
            <ButtonContainerLeft>
              <Earned>Meth Earned</Earned>
              <ButtonCanceled>
                <ButtonImage src={Harvest} />
              </ButtonCanceled>
            </ButtonContainerLeft>
            <ButtonContainerRight>
              <TokenStaked>METH-ETH Tokens Staked</TokenStaked>
              <ButtonContainer>
                <ButtonCanceled>
                  <ButtonImage src={aPprove} />
                </ButtonCanceled>
                <ButtonCanceled>
                  <ButtonImage src={Unstake} />
                </ButtonCanceled>
                <PlusImagedButton>
                  <ButtonImage src={plus} />
                </PlusImagedButton>
              </ButtonContainer>
            </ButtonContainerRight>
          </ModelFooter>
          <BalanceFarming>
            Every time you stake and unstake tokens, the contract will
            automagically harvest METH rewards for you!
          </BalanceFarming>
        </Modal>
      )}
    </>
  )
}

const Elipse = styled.div`
  position: relative;
  //left: 622px;
  margin: auto;
  padding-bottom: 1rem;
  margin-bottom: 4rem;
  margin-top: 2rem;
  width: 124.67px;
  height: 128.82px;
  background: #91ac62;
  border: 3px solid #ffffff;
  box-shadow: inset 8px 8px 8px 4px rgba(0, 0, 0, 0.5);
  border-radius: 50%;

  @media (max-width: 767px) {
    font-size: 35px;
  }
`

const ButtonImage = styled.img`
  margin: auto;
`

const PlusImagedButton = styled.button`
  ]cursor: pointer;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    116.22deg,
    #06443c 30.25%,
    #0a4f3d 48.61%,
    #0d6e31 96.75%
  );
  border: 3px solid #ffffff;

  box-sizing: border-box;
  position: relative;
`

const TokenStaked = styled.p`
  position: relative;
  text-align: center;
  font-family: Cooper Md BT;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`

const LogoImage = styled.img`
  padding-left: 10rem;
  @media (max-width: 737px) {
    padding-left: 1rem;
    // width: 100px;
  }
`

const ButtonContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`

const ButtonContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 737px) {
    padding: 1rem;
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  margin: auto;
`
const BalanceForming = styled.p`
  padding-top: 3rem;
  font-family: Cooper Md BT;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 31px;
  color: #ffffff;
  width: 80%;
  justify-content: center;
  text-align: center;
  margin: auto;
  @media (max-width: 737px) {
    font-size: 18px;
  }
`
const ButtonCanceled = styled.button`
  cursor: pointer;
  border-radius: 14px;
  display: flex;
  margin: 0 0.5rem;
  flex-direction: column;
  background: linear-gradient(
    116.22deg,
    #06443c 30.25%,
    #0a4f3d 48.61%,
    #0d6e31 96.75%
  );
  border: 3px solid #ffffff;
  width: 115px;
  height: 55px;
  box-sizing: border-box;
  position: relative;
`
const Earned = styled.p`
  font-family: Cooper Md BT;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`
const ModelFooter = styled.div`
  display: flex;
  justy-content: space-around;
  @media (max-width: 767px) {
    flex-direction: column;
  }
  color: white;
`
const BalanceFarming = styled.p`
  font-size: 15px;
  padding-top: 1rem;
  font-family: Cooper Md BT;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  width: 80%;
  margin: auto;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
`
export default WalletProviderModal
