import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/Blue1 1.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from './components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from '../Home/components/Balances'
import Cards from '../Home/components/Cards'
import Footer from '../../components/Footer'
import ButtonsBar from './components/ButtonsBar'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader />

      <ButtonsBar />
      <Footer />
    </Page>
  )
}

export default Home
