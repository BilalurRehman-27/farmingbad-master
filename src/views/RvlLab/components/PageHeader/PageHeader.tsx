import React from 'react'
import styled from 'styled-components'
import logoImage from '../../../../assets/images/Blue1 1.png'

const PageHeaderContainer = styled.div`
  //   margin-bottom: -30px;
  display: flex;
  flex-direction: column;
  justifycontent: center;
`
const Eclipse = styled.div`
  position: absolute;
  align-self: center;
  margin-top: 2rem;
  width: 124.67px;
  height: 128.82px;
  background: #91ac62;
  border: 3px solid #ffffff;
  box-shadow: inset 8px 8px 8px 4px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
`
const LogoAdjustment = styled.img`
  position: absolute;
  display: block;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 150px;
  height: 147px;
  left: 0px;
  filter: drop-shadow(6px 8px 8px rgba(0, 0, 0, 0.35));
`

const TextContent = styled.div`
  position: relative;
  width: 311px;
  height: 66px;
  font-family: 'Cooper Md BT' !important;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 66px;
  text-align: center;
  color: #ffffff;
  text-shadow: 8px 6px 6px rgba(0, 0, 0, 0.4);
`

const PageHeader = () => (
  <PageHeaderContainer>
    <Eclipse />
    <LogoAdjustment src={logoImage} alt="logo" />
    <TextContent>Los Farminos Hermanos</TextContent>
  </PageHeaderContainer>
)

export default PageHeader
