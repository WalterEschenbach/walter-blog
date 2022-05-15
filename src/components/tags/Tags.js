import * as React from 'react';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BUTTONS } from '../../components/tags/buttons';

export default function Tags() {



    return (
        <div>
            <Accordion defaultExpanded={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container justifyContent="center">

                        <Grid item lg={6} justifyContent="center">
                            {BUTTONS.map((button, index) => (
                                <Button key={index}>{button}</Button>
                            ))}

                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div >
    );
}
