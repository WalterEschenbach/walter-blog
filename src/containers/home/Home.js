import React from 'react'
import Container from '@mui/material/Container'
import NavBar from '../../components/nav/NavBar'
import Panels from '../../components/panels/Panels'
import Footer from '../../components/footer/Footer'

const Home = () => {

    return (
        <Container maxWidth="md">
            <NavBar />
            <Panels />
            <Footer />
        </Container>
    )
}

export default Home