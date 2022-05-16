import React from 'react'
import Socials from '../socials/Socials'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material'

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
            <Grid item justifyContent='center' mt={1} sx={{ lineHeight: '1rem' }}>
                <Typography variant="h6">
                    {"Walter Eschenbach \u2022 \u00A9 \u2022 Web Development Blog"}
                </Typography>
            </Grid>
            <Grid item justifyContent='center' sx={{ lineHeight: '1rem' }}>
                <Typography variant="h6">Thank You</Typography>
            </Grid>
        </Grid >
    )
}

export default Footer