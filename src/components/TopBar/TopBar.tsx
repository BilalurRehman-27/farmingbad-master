import React from 'react'
import styled from 'styled-components'

import Container from '../Container'
import Logo from '../Logo'

import AccountButton from './components/AccountButton'
import Nav from './components/Nav'

interface TopBarProps {
  onPresentMobileMenu: () => void
}

const TopBar: React.FC<TopBarProps> = ({ onPresentMobileMenu }) => {
  return (
    <StyledTopBar>
      <StyledTopBarInner>
        <StyledLogoWrapper>
          <Logo />
        </StyledLogoWrapper>
        <Nav />
        <StyledAccountButtonWrapper>
          <AccountButton />
        </StyledAccountButtonWrapper>
      </StyledTopBarInner>
    </StyledTopBar>
  )
}

const StyledLogoWrapper = styled.div`
  @media (max-width: 400px) {
    width: auto;
  }
`

const StyledTopBar = styled.header`
  height: 80px;
  background: rgba(76, 255, 183, 0.5);
  padding: 10px 0;
`

const StyledTopBarInner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
`
const StyledNavWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  @media (max-width: 400px) {
    display: none;
  }
`

const StyledAccountButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 156px;
  @media (max-width: 400px) {
    justify-content: center;
    width: auto;
  }
`

const StyledMenuButton = styled.button`
  background: none;
  border: 0;
  margin: 0;
  outline: 0;
  padding: 0;
  display: none;
  @media (max-width: 400px) {
    align-items: center;
    display: flex;
    height: 44px;
    justify-content: center;
    width: 44px;
  }
`

export default TopBar