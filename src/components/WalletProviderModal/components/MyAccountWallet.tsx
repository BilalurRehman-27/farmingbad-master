import React from 'react'
import styled from 'styled-components'
import Modal from '../../Modal'
import Signout from '../../../assets/images/SignOut.png'
import EtherScreen from '../../../assets/images/View on etherscan.png'
import Logo from '../../../assets/images/Blue.png'
import ModalActions from '../../ModalActions'
import ModalContent from '../../ModalContent'
import ModalTitle from '../../ModalTitle'
import Cancel from '../../../assets/images/Cancel.png'

type MyAccountWalletProps = {
  onHandle(isVisible: boolean): void
}
const MyAccountWalletPopup: React.FC<MyAccountWalletProps> = props => {
  const { onHandle } = props
  const handleDismiss = () => {
    onHandle(false)
  }
  return (
    <Modal>
      <ModalTitle text="My Account" />
      <ModalContent>
        <EclipseCenter />
        <LogoImg src={Logo} alt="" />
        <Balance>0.000 METH Balance</Balance>
        <ConnectButton>
          <EtherScreenImg src={EtherScreen} />
        </ConnectButton>
        <ConnectButton>
          <ConnectImg src={Signout} />
        </ConnectButton>
      </ModalContent>

      <CloseButton onClick={handleDismiss}>
        <ConnectImg src={Cancel}></ConnectImg>
      </CloseButton>
    </Modal>
  )
}

const EclipseCenter = styled.div`
@media (max-width: 767px) {
  left: 90px;
  top: 4px;
}
  position: relative;
  left: 270px;
  top: 22px;
  width: 124.67px;
  height: 128.82px;
  background: #91ac62;
  border: 3px solid #ffffff;
  box-shadow: inset 8px 8px 8px 4px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
`
const LogoImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 150px;
  height: 147px;
  left: 0px;
  top: -92px;
  filter: drop-shadow(6px 8px 8px rgba(0, 0, 0, 0.35));
  top: -140px;
`
const Balance = styled.p`
@media (max-width: 767px) {
  left: 35px;
  top: 225px;
  font-size:30px;
}
  position: absolute;
  left: 181px;
  top: 225px;
  font-family: Cooper Md BT;
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  /* line-height: 54px; */
  text-align: center;
  color: #ffffff;
`

const ConnectButton = styled.button`
@media (max-size = 767px) {
  padding:0px!important;
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
  width: 100%;
  margin-bottom: 10px;
`
const ConnectImg = styled.img``
const EtherScreenImg = styled.img`
  position: relative;
  right: 58px;
`
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
export default MyAccountWalletPopup
