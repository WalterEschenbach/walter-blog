import React from 'react'
import Container from '@mui/material/Container'
import NavBar from '../../components/nav/NavBar'
import Panels from '../../components/panels/Panels'

const Home = () => {


    return (
        <Container className='container border'>
            <NavBar />
            <Panels />
        </Container>
    )
}

export default Home