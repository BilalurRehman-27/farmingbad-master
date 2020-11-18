import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import metamaskLogo from '../../assets/images/meta.png'
import walletConnectLogo from '../../assets/images/Connect.png'
import CaptureLogo from '../../assets/images/Capture-removebg-preview 1.png'
import Button from '../Button'
import Modal, { ModalProps } from '../Modal'
import ModalActions from '../ModalActions'
import ModalContent from '../ModalContent'
import ModalTitle from '../ModalTitle'
import Cancel from '../../assets/images/Cancel.png'
import MyAccountWalletPopup from './components/MyAccountWallet'

const WalletProviderModal: React.FC<ModalProps> = ({ onDismiss }) => {
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
          <ModalTitle text="Select a wallet provider." />
          <ModalContent>
            <Row>
              <ColumnPopup>
                <MetaImg src={metamaskLogo}></MetaImg>
                <ConnectButton onClick={showMyAccountModal}>
                  <ConnectImg src={walletConnectLogo} />
                </ConnectButton>
              </ColumnPopup>
              <ColumnPopup>
                <MetaImg src={CaptureLogo}></MetaImg>
                <ConnectButton>
                  <ConnectImg src={walletConnectLogo} />
                </ConnectButton>
              </ColumnPopup>
            </Row>
          </ModalContent>

          <ModalActions>
            <CloseButton onClick={onDismiss}>
              <ConnectImg src={Cancel}></ConnectImg>
            </CloseButton>
          </ModalActions>
        </Modal>
      )}
    </>
  )
}

const Row = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: row;
  }
`
const ColumnPopup = styled.div`
@media (max-width: 767px) {
  height: 180px;
}
  float: left;
  width: 50%;
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
`
const MetaImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
`

const ConnectButton = styled.button`
@media (max-width: 767px) {
  padding:5px 5px 5px 5px;
  border: 2px solid #ffffff;
  left:-14px;
}
  padding: 5px 60px 5px 60px;
  border-radius: 14px;
  background: linear-gradient(
    116.22deg,
    #06443c 30.25%,
    #0a4f3d 48.61%,
    #0d6e31 96.75%
  );
  border: 3px solid #ffffff;
  box-sizing: border-box;
  position: relative;
  top: 35px;
  left: 15px;
  cursor: pointer;
`
const ConnectImg = styled.img``
const CloseButton = styled.button`
  padding: 5px 60px 5px 60px;
  border-radius: 14px;
  background: linear-gradient(
    116.22deg,
    #06443c 30.25%,
    #0a4f3d 48.61%,
    #0d6e31 96.75%
  );
  border: 3px solid #ffffff;
  width: 100%;
`

export default WalletProviderModal
