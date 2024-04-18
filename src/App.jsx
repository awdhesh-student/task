import { Container } from '@mui/material'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Hero from './components/hero/Hero'
import Middle from './components/middle/Middle'
import Cards from './components/cards/Cards'
import FormPage from './components/form/FormPage'
import FooterCont from './components/footer/FooterCont'



function App() {

  return (
    <>
      <NavBar />
      <Container className='main-container'>
        <Hero />
        <Middle />
        <Cards />
        <FormPage />
      </Container>
      <FooterCont />
    </>
  )
}

export default App
