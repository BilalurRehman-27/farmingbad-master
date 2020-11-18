import React from 'react'
import styled from 'styled-components'

import Container from '../Container'
import Logo from '../Logo'

import AccountButton from './components/AccountButton'
import Nav from './components/Nav'
import NewNav from './components/NewMobileNav'
import NavMobile from './components/NavMobile'

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
        <NewNav />
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
  margin-top: -1.5rem;
`

const StyledTopBar = styled.header`
  height: 40px;
  background: rgba(76, 255, 183, 0.5);
  padding: 10px 0;
`

const StyledTopBarInner = styled.div`
  display: flex;
  justify-content: space-between;
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

  margin-bottom: auto;
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
