import React, { useContext } from 'react'
import styled from 'styled-components'
import logoImage from '../../../../assets/images/Blue.png'
import { RVLContext } from '../../../../contexts/rvlLab/rvlContex'

const PageHeaderContainer = styled.div``
const Eclipse = styled.div`
  position: relative;
  //left: 622px;
  margin: auto;
  top: 22px;
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
const LogoAdjustment = styled.img`
  display: block;
  margin: auto;
  /* Blue1 1 */
  position: relative;
  width: 150px;
  height: 147px;
  left: 15px;
  top: -116px;
  filter: drop-shadow(6px 8px 8px rgba(0, 0, 0, 0.35));
  margin-bottom: 10px;
`

const TextContent = styled.div`
  width: 622px;
  height: 66px;

  @media (max-width: 767px) {
    font-size: 35px;
  }

  font-family: 'Cooper Md BT' !important;
  font-style: normal;
  font-weight: normal;
  font-size: 55px;
  line-height: 66px;
  text-align: center;
  color: #ffffff;
  text-shadow: 8px 6px 6px rgba(0, 0, 0, 0.4);
`

const EclipseContainer = styled.div`
  height: 200px;
`

const PageHeader = () => {
  const contexext = useContext(RVLContext)
  return (
    <PageHeaderContainer>
      <EclipseContainer>
        <Eclipse />
        <LogoAdjustment src={contexext.currentImage} alt="logo" />
      </EclipseContainer>

      <TextContent>Los Farminos Hermanos</TextContent>
    </PageHeaderContainer>
  )
}

export default PageHeader
