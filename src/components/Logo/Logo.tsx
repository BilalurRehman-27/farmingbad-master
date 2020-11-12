import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import chef from '../../assets/images/logo2.png'

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <img src={chef} alt="" style={{ marginTop: -4 }} />
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  height: 100px;
  align-items: center;
  display: flex;
  justify-content: start;
  margin: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
`

export default Logo
