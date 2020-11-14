import React from 'react'
import styled from 'styled-components'

const ParentContainer = styled.div`
  width: 100%;
`
const Container = styled.section`
  display: flex;
  flex-direction: row;
  padding-left: 60px;
  padding-right: 60px;
  margin-bottom: 25px;
`
const Column1 = styled.div`
  float: left;
  width: 343px;
  height: 180px;
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
const APY = styled.p`
  position: absolute;
  width: 22.19px;
  height: 20.08px;
  left: 336.26px;
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  color: #ffffff;
`
const VAL = styled.p`
  /* 235.6% */
  position: absolute;
  width: 78.89px;
  height: 27.94px;
  left: 370.84px;
  top: 465.24px;
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 28px;
  /* identical to box height */
  color: #ffffff;
`
const Meth = styled.p`
  position: absolute;
  width: 199.43px;
  height: 16.59px;
  left: 125.68px;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
`
const Rect = styled.div`
  position: absolute;
  width: 300.05px;
  height: 27.94px;
  left: 132.22px;
  top: 565.47px;
  background: rgba(169, 186, 105, 0.85);
  box-shadow: inset 0px 3px 3px #06443c;
  border-radius: 13px;
`

const TextAdjust = styled.span`
  position: relative;
  width: 92px;
  height: 20px;
  left: 12px;
  top: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  color: #ffffff;
`
const Button1 = styled.div`
  /* Rectangle 15 */
  position: absolute;
  width: 128.19px;
  height: 34.92px;
  left: 130.01px;
  top: 617.74px;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
`

const ButtonText = styled.span`
  position: relative;
  width: 49.3px;
  height: 27.07px;
  left: 40px;
  top: 3px;
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
`

const Button2 = styled.div`
  position: absolute;
  width: 128.19px;
  height: 34.92px;
  left: 295.28px;
  top: 617.74px;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
`

const Button2Text = styled.span`
  position: relative;
  width: 49.3px;
  height: 27.07px;
  left: 35px;
  top: 4px;
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
`

const Column2 = styled.div`
  float: left;
  width: 343px;
  height: 180px;
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
  margin-right: 50px;
`
const Meth1 = styled.p`
  position: absolute;
  width: 199.43px;
  height: 16.59px;
  left: 515.68px;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
`
const Apy1 = styled.p`
  position: absolute;
  width: 22.19px;
  height: 20.08px;
  left: 725.26px;
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  color: #ffffff;
`
const Val1 = styled.p`
  position: absolute;
  width: 78.89px;
  height: 27.94px;
  left: 760.84px;
  top: 465.24px;
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 28px;
  /* identical to box height */
  color: #ffffff;
`
const MethEth = styled.h2`
  position: absolute;
  width: 190.91px;
  height: 42.78px;
  left: 180px;
  top: 500.37px;
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 45px;
  color: #ffffff;
`
const React1 = styled.div`
  position: absolute;
  width: 300.05px;
  height: 27.94px;
  left: 525.22px;
  top: 565.47px;
  background: rgba(169, 186, 105, 0.85);
  box-shadow: inset 0px 3px 3px #06443c;
  border-radius: 13px;
`
const MethEth1 = styled.h2`
  position: absolute;
  width: 190.91px;
  height: 42.78px;
  left: 580px;
  top: 500.37px;
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 45px;
  color: #ffffff;
`
const TextAdjust1 = styled.span`
  position: relative;
  width: 92px;
  height: 20px;
  left: 12px;
  top: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  color: #ffffff;
`
const Button11 = styled.div`
  position: absolute;
  width: 128.19px;
  height: 34.92px;
  left: 530.01px;
  top: 617.74px;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
`
const Button11Text = styled.span`
  position: relative;
  width: 49.3px;
  height: 27.07px;
  left: 40px;
  top: 3px;
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
`
const Button12 = styled.div`
  position: absolute;
  width: 128.19px;
  height: 34.92px;
  left: 690.28px;
  top: 617.74px;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
`
const Button12Text = styled.span`
  position: relative;
  width: 49.3px;
  height: 27.07px;
  left: 35px;
  top: 4px;
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
`
const Column3 = styled.div`
  float: left;
  width: 343px;
  height: 180px;
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
  margin-right: 50px;
`
const Meth3 = styled.p`
  position: absolute;
  width: 199.43px;
  height: 16.59px;
  left: 910.68px;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
`
const Apy3 = styled.p`
  position: absolute;
  width: 22.19px;
  height: 20.08px;
  left: 1125.26px;
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  color: #ffffff;
`
const Val3 = styled.p`
  position: absolute;
  width: 78.89px;
  height: 27.94px;
  left: 1160.84px;
  top: 465.24px;
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 28px;
  color: #ffffff;
`
const React3 = styled.div`
  position: absolute;
  width: 300.05px;
  height: 27.94px;
  left: 920.22px;
  top: 565.47px;
  background: rgba(169, 186, 105, 0.85);
  box-shadow: inset 0px 3px 3px #06443c;
  border-radius: 13px;
`
const MethEth3 = styled.h2`
  position: absolute;
  width: 190.91px;
  height: 42.78px;
  left: 965px;
  top: 500.37px;
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 45px;
  color: #ffffff;
`
const TextAdjust3 = styled.span`
  position: relative;
  width: 92px;
  height: 20px;
  left: 12px;
  top: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  color: #ffffff;
`
const Button13 = styled.div`
  position: absolute;
  width: 128.19px;
  height: 34.92px;
  left: 925.01px;
  top: 617.74px;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
`
const Button13Text = styled.span`
  position: relative;
  width: 49.3px;
  height: 27.07px;
  left: 40px;
  top: 3px;
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: white;
  line-height: 23px;
`

const Button113 = styled.div`
  position: absolute;
  width: 128.19px;
  height: 34.92px;
  left: 1085.28px;
  top: 617.74px;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
`

const Button113Text = styled.span`
  position: relative;
  width: 49.3px;
  height: 27.07px;
  left: 35px;
  top: 4px;
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
`
function Cards() {
  return (
    <ParentContainer>
      <Container>
        <Column1>
          <Meth>METH-ETH UNI-V2 LP</Meth>
          <APY>APY</APY>
          <VAL>235.6%</VAL>
          <MethEth>METH-ETH</MethEth>
          <Rect>
            <TextAdjust>Harvest (METH)</TextAdjust>
          </Rect>
          <Button1>
            <ButtonText>Select</ButtonText>
          </Button1>
          <Button2>
            <Button2Text>Get LP</Button2Text>
          </Button2>
        </Column1>
        <Column2>
          <Meth1>METH-ETH UNI-V2 LP</Meth1>
          <Apy1>APY</Apy1>
          <Val1>235.6%</Val1>
          <MethEth1>METH-ETH</MethEth1>
          <React1>
            <TextAdjust1>Harvest (METH)</TextAdjust1>
          </React1>
          <Button11>
            <Button11Text>Select</Button11Text>
          </Button11>
          <Button12>
            <Button12Text>Get LP</Button12Text>
          </Button12>
        </Column2>
        <Column3>
          <Meth3>METH-ETH UNI-V2 LP</Meth3>
          <Apy3>APY</Apy3>
          <Val3>235.6%</Val3>
          <MethEth3>METH-ETH</MethEth3>
          <React3>
            <TextAdjust3>Harvest (METH)</TextAdjust3>
          </React3>
          <Button13>
            <Button13Text>Select</Button13Text>
          </Button13>
          <Button113>
            <Button113Text>Get LP</Button113Text>
          </Button113>
        </Column3>
      </Container>
    </ParentContainer>
  )
}

export default Cards
