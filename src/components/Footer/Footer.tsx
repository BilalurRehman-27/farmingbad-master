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
      <FooterImage src={Discord}></FooterImage>
    </ColumnFooter>
    <ColumnFooter>
      <FooterImage src={Telegram}></FooterImage>
    </ColumnFooter>
    <ColumnFooter>
      <FooterImage src={Twitter}></FooterImage>
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
`
const ColumnFooter = styled.div`
  width: 122px;
  padding: 1rem;
  align-items: center;
`
const FooterImage = styled.img`
  margin: 1rem;
`

export default Footer
