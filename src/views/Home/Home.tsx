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
import Footer from '../../components/Footer'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={logo} height={100} alt="" />}
        title=""
        subtitle=""
      />
      <Cards />
      <Spacer size="lg" />
      <Footer />
    </Page>
  )
}

export default Home
