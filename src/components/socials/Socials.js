import { Grid } from '@mui/material'
import React from 'react'
import { AiOutlineGithub, AiFillMail, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'

const Socials = () => {
    const ICON_SIZE = '2rem';
    return (
        <>
            <Grid item justifyContent='center' sx={{ lineHeight: '1rem' }}>
                <AiFillMail className='social-icons' size={ICON_SIZE} />
                <AiOutlineGithub className='social-icons' size={ICON_SIZE} />
                <AiFillLinkedin className='social-icons' size={ICON_SIZE} />
                <AiOutlineTwitter className='social-icons' size={ICON_SIZE} />
            </Grid>
            <Grid item justifyContent='center' sx={{ lineHeight: '1rem' }}>
                <p>{"Walter Eschenbach \u2022 \u00A9 \u2022 Web Development Blog"}</p>
            </Grid>
            <Grid item justifyContent='center' sx={{ lineHeight: '1rem' }}>
                <p>{"Thank You"}</p>
            </Grid>
        </>
    )
}

export default Socials