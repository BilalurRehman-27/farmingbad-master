import React from 'react'
import styled from 'styled-components'
import Contract from '../../assets/images/Contract.png'
import Uniswap from '../../assets/images/UniSwap.png'
import TimeLock from '../../assets/images/Tmelock.png'
import Discord from '../../assets/images/Discord.png'
import Telegram from '../../assets/images/Telegram 1.png'
import Twitter from '../../assets/images/Twitter 1.png'
const Footer: React.FC = () => (
  <SectionRow>
    <ColumnFooter className="column-footer">
      <FooterImage src={Contract}></FooterImage>
    </ColumnFooter>
    <ColumnFooter className="column-footer">
      <FooterImage src={Uniswap}></FooterImage>
    </ColumnFooter>
    <ColumnFooter className="column-footer">
      <FooterImage src={TimeLock}></FooterImage>
    </ColumnFooter>
    <ColumnFooter className="column-footer">
      <FooterImage src={Discord}></FooterImage>
    </ColumnFooter>
    <ColumnFooter className="column-footer">
      <FooterImage src={Telegram}></FooterImage>
    </ColumnFooter>
    <ColumnFooter className="column-footer">
      <FooterImage src={Twitter}></FooterImage>
    </ColumnFooter>
  </SectionRow>
)

const SectionRow = styled.div`
  display: flex;
  padding-left: 170px;
  padding-right: 170px;
  margin-bottom: 25px;
`
const ColumnFooter = styled.div`
  display: flex;
  float: left;
  width: 16%;
  padding: 0 10px;
`
const FooterImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`

export default Footer
