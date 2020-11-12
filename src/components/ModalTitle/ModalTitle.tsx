import React from 'react'
import styled from 'styled-components'

interface ModalTitleProps {
  text?: string
}

const ModalTitle: React.FC<ModalTitleProps> = ({ text }) => (
  <StyledModalTitle>{text}</StyledModalTitle>
)

const StyledModalTitle = styled.div`
  padding: 20px 16px;
  color: white;
  text-align: center;
  font-family: 'Fjalla One', sans-serif;
  font-weight: 400;
`

export default ModalTitle
