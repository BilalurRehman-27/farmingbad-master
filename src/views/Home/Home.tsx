import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/logo1.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'
import Cards from './components/Cards'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={logo} height={120} alt="" />}
        title=""
        subtitle=""
      />
      <Cards />
      <Spacer size="lg" />
      {/* <div
        style={{
          margin: '0 auto',
        }}
      >
        <Button text="⚗️ Let's Cook" to="/farms" variant="secondary" /> */}
      {/* </div> */}
    </Page>
  )
}

export default Home
