import React from 'react'
import styled from 'styled-components'
import YourBalance from '../../../assets/images/YourBalance.png'
import TVL from '../../../assets/images/TVL 1.png'
import Price from '../../../assets/images/Price.png'
import CirculatingSupply from '../../../assets/images/Circulating Supply.png'
import Burned from '../../../assets/images/Burned.png'
import BurnRate from '../../../assets/images/burn rate copy 1.png'
import Footer from '../../../components/Footer'
const Cards: React.FC = () => {
  return (
    <Section>
      <SectionRow>
        <Card>
          <YourBalanceImg src={YourBalance} alt="Your Balance"></YourBalanceImg>
          <BalanceApi></BalanceApi>
          <PendingText>Pending harvest:</PendingText>
        </Card>
        <Card>
          <TVLBalanceImg src={TVL} alt="Your Balance"></TVLBalanceImg>
          <BalanceApi></BalanceApi>
          <ValueText>Total Value Locked</ValueText>
        </Card>
        <Card>
          <PriceImg src={Price} alt="Your Balance"></PriceImg>
          <BalanceApi></BalanceApi>
          <TokenText>Get token price in real time</TokenText>
        </Card>
      </SectionRow>
      <SectionRow>
        <Card>
          <CirculatingImg
            src={CirculatingSupply}
            alt="Your Balance"
          ></CirculatingImg>
          <BalanceApi></BalanceApi>
          <CirculatingText>Reward per block:</CirculatingText>
        </Card>
        <Card>
          <BurnedImg src={Burned} alt="Your Balance"></BurnedImg>
          <BalanceApi></BalanceApi>
          <BurnedText>Amount of tokens burned via Super Lab</BurnedText>
        </Card>
        <Card>
          <BurnedRateImg src={BurnRate} alt="Your Balance"></BurnedRateImg>
          <BalanceApi></BalanceApi>
          <BurnedRateText>Average tokens burned per block (24h)</BurnedRateText>
        </Card>
      </SectionRow>
      <Footer />
    </Section>
  )
}

const Section = styled.div`
@media (max-width: 767px) {
  flex-direction: flex;
}
`
const SectionRow = styled.div`
@media (max-width: 767px) {
  flex-direction: column;
  margin-left: 0px;
}
  display: flex;
  padding-left: 120px;
  padding-right: 120px;
  margin-bottom: 25px;
`
const Card = styled.div`
@media (max-width: 767px) {
  margin-left: 0px;
  margin-bottom: 20px;
}
  float: left;
  width: 268px;
  height: 150px;
  left: 243px;
  top: 426px;
  background: linear-gradient(
    116.22deg,
    #06443c 33.5%,
    #0a4f3d 51.86%,
    #0d6e31 100%
  );
  border: 3px solid #ffffff;

  box-shadow: 6px 8px 8px #052524;
  margin-left: 50px;
`

const YourBalanceImg = styled.img`
  position: relative;
  left: 46px;
  top: 10px;
`
const TVLBalanceImg = styled.img`
  position: relative;
  left: 75px;
  top: 5px;
`
const PriceImg = styled.img`
  position: relative;
  left: 95px;
  top: 10px;
`
const CirculatingImg = styled.img`
  position: relative;
  left: 25px;
  top: 10px;
`
const BurnedImg = styled.img`
  position: relative;
  left: 80px;
  top: 10px;
`
const BurnedRateImg = styled.img`
  position: relative;
  left: 5px;
  top: 2px;
`
const BalanceApi = styled.div`
  position: relative;
  top: 30px;
  left: 85px;
`
const PendingText = styled.p`
  width: 156px;
  height: 20px;
  font-family: 'Fjalla One', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  position: relative;
  top: 75px;
  left: 10px;
`
const ValueText = styled.p`
  width: 156px;
  height: 20px;
  font-family: 'Fjalla One', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  position: relative;
  top: 57px;
  left: 57px;
`
const TokenText = styled.p`
  width: 200px;
  height: 20px;
  font-family: 'Fjalla One', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  position: relative;
  top: 75px;
  left: 35px;
`
const CirculatingText = styled.p`
  width: 156px;
  height: 20px;
  font-family: 'Fjalla One', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  position: relative;
  top: 76px;
  left: 10px;
`
const BurnedText = styled.p`
  width: 296px;
  height: 20px;
  font-family: 'Fjalla One', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  position: relative;
  top: 75px;
  left: 7px;
`
const BurnedRateText = styled.p`
  width: 296px;
  height: 20px;
  font-family: 'Fjalla One', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  position: relative;
  top: 58px;
  left: 12px;
`
export default Cards
