import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import useModal from '../../../hooks/useModal'
import Button from '../../Button'
import WalletProviderModal from '../../WalletProviderModal'
import AccountModal from './AccountModal'
import Wallet from '../../../assets/images/Rectangle.png'
interface AccountButtonProps {}

const AccountButton: React.FC<AccountButtonProps> = (props) => {
  const [onPresentAccountModal] = useModal(<AccountModal />)
  const [onPresentWalletProviderModal] = useModal(
    <WalletProviderModal />,
    'provider',
  )

  const { account } = useWallet()

  const handleUnlockClick = useCallback(() => {
    onPresentWalletProviderModal()
  }, [onPresentWalletProviderModal])

  return (
    <StyledAccountButton>
      {!account ? (
        <StyledLink onClick={handleUnlockClick}>
          <NavImage src={Wallet}></NavImage>
        </StyledLink>
      ) : (
        <Button onClick={onPresentAccountModal} size="sm" text="My Wallet" />
      )}
    </StyledAccountButton>
  )
}

const NavImage = styled.img`
  height: 47px;
  position: relative;
  bottom: 5px;
`
const StyledLink = styled.nav`
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
  cursor: pointer;
`

const StyledAccountButton = styled.div``

export default AccountButton
