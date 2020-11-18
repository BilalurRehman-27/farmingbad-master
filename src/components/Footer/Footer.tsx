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
    <ColumnFooter>
      <FooterImage src={Contract}></FooterImage>
    </ColumnFooter>
    <ColumnFooter>
      <FooterImage src={Uniswap}></FooterImage>
    </ColumnFooter>
    <ColumnFooter>
      <FooterImage src={TimeLock}></FooterImage>
    </ColumnFooter>
    <ColumnFooter>
      <FooterImage className="discord" src={Discord}></FooterImage>
    </ColumnFooter>
    <ColumnFooter>
      <FooterImage src={Telegram}></FooterImage>
    </ColumnFooter>
    <ColumnFooter>
      <FooterImage className="twitter" src={Twitter}></FooterImage>
    </ColumnFooter>
  </SectionRow>
)

const SectionRow = styled.div`
  flex-wrap: wrap;
  justify-content: space-evenly;
  display: flex;
  width: 80%;
  align-items: center;
  margin: auto;
  @media (max-width: 767px) {
    margin-left: 0rem;
  }
`
const ColumnFooter = styled.div`
@media (max-width: 767px) {
  padding: 0rem;
}
  width: 122px;
  height: 100px;
  padding: 1rem;
  align-items: center;
  .discord{
    margin-top:4px;
  }
  .twitter{
    margin-top:10px;
  }
`
const FooterImage = styled.img`
  margin: 1rem;
`

export default Footer
