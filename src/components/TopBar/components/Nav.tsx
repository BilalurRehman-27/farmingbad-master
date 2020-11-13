import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Home from '../../../assets/images/Home.png'
import RVLab from '../../../assets/images/rv-lab.png'
import SuperLab from '../../../assets/images/Superlab.png'
import Nft from '../../../assets/images/Nft.png'

const Nav: React.FC = () => {
  return (
    <MenuWrap className="menu-wrap">
      <StyledNav>
        <StyledLink exact activeClassName="active" to="/">
          <HomeImage src={Home}></HomeImage>
        </StyledLink>
        <StyledLink exact to="/farms">
          <RVImage src={RVLab}></RVImage>
        </StyledLink>
        <StyledLink exact to="/farms1">
          <SuperImage src={SuperLab}></SuperImage>
        </StyledLink>
        <StyledLink exact to="/farms2">
          <NftImage src={Nft}></NftImage>
        </StyledLink>
      </StyledNav>
    </MenuWrap>
  )
}

const MenuWrap = styled.div`
@media only screen and (max-width: 767px) {
  display: none;
}
  @media only screen and (min-width: 768px) {
    display:flex
}
`

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const HomeImage = styled.img`
  position: relative;
  bottom: 15px;
`
const RVImage = styled.img`
  position: relative;
  bottom: 10px;
`
const SuperImage = styled.img`
  position: relative;
  bottom: 15px;
`
const NftImage = styled.img`
  position: relative;
  bottom: 15px;
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
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
`

export default Nav
