import { Grid } from '@mui/material'
import React from 'react'
import Socials from '../socials/Socials'

const Footer = () => {
    return (
        <Grid
            container
            justifyContent='center'
            alignItems='center'
            display='flex'
            flexDirection='column'
        >
            <br />
            <Socials />
        </Grid >
    )
}

export default Footer