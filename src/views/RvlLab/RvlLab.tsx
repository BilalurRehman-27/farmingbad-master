import React, { useCallback } from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/Blue.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from './components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from '../Home/components/Balances'
import Footer from '../../components/Footer'
import ButtonsBar from './components/ButtonsBar'
import Cards from './components/Cards'
import RVLCOntextProvider from '../../contexts/rvlLab'

const Home: React.FC = () => {
  return (
    <Page>
      <RVLCOntextProvider>
        <PageHeader />
        <ButtonsBar />
        <Cards />
      </RVLCOntextProvider>

      <Footer />
    </Page>
  )
}

export default Home
