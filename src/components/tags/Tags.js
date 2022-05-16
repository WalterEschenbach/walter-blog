import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { BUTTONS } from '../../components/tags/buttons';

export default function Tags() {

    return (
        <div>
            <Grid container justifyContent="center" >
                <Grid item lg={6} justifyContent="center" align="center">
                    {BUTTONS.map((button, index) => (
                        <Button key={index}>{button}</Button>
                    ))}
                </Grid>
            </Grid>
        </div >
    );
}
