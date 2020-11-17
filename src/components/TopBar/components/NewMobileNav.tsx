import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Home from '../../../assets/images/Home.png'
import RVLab from '../../../assets/images/rv-lab.png'
import SuperLab from '../../../assets/images/Superlab.png'
import Nft from '../../../assets/images/Nft.png'

const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #0d6e31;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  text-align: left;
  z-index: 1;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
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
  color: ${props => props.theme.color.grey[400]};
  padding-left: ${props => props.theme.spacing[3]}px;
  padding-right: ${props => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.color.grey[500]};
  }
  &.active {
    color: ${props => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${props => props.theme.spacing[2]}px;
    padding-right: ${props => props.theme.spacing[2]}px;
  }
`

const handleClick = (open: boolean, setOpen: any) => {
  setOpen(false)
}

const Menu = (props: any) => {
  const { open, setOpen } = props
  return (
    <StyledMenu open={open}>
      <StyledLink
        exact
        activeClassName="active"
        to="/"
        onClick={() => handleClick(open, setOpen)}
      >
        <HomeImage src={Home}></HomeImage>
      </StyledLink>
      <StyledLink exact to="/rvlLab" onClick={() => handleClick(open, setOpen)}>
        <RVImage src={RVLab}></RVImage>
      </StyledLink>
      <StyledLink exact to="/farms1" onClick={() => handleClick(open, setOpen)}>
        <SuperImage src={SuperLab}></SuperImage>
      </StyledLink>
      <StyledLink exact to="/farms2" onClick={() => handleClick(open, setOpen)}>
        <NftImage src={Nft}></NftImage>
      </StyledLink>
    </StyledMenu>
  )
}

const StyledBurger = styled.button<{ open: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  float: right;

  @media (min-width: 777px) {
    display: none;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? '#0D0C1D' : '#EFFFFA')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
const MenuWrap = styled.div`
  @media only screen and (max-width: 767px) {
    display: flex;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const MobileNavBarConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`

const Burger = (props: any) => {
  const { open, setOpen } = props
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const MobileNavBar = () => {
  const [open, setOpen] = React.useState(false)
  const node = React.useRef()
  return (
    <MobileNavBarConatiner ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </MobileNavBarConatiner>
  )
}

export default MobileNavBar
