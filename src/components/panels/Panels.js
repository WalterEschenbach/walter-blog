import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { usePanels } from '../../contexts/PanelContext'
import Tags from '../tags/Tags'

const Panels = () => {
    const { panel, setPanel } = usePanels();

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 0 }}>
                        <Typography component={'span'} >{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    return (
        <>
            <TabPanel value={panel} index={0}>
                <Tags />
                <Typography variant='h1' component={'span'} >All Posts</Typography>

            </TabPanel>
            <TabPanel value={panel} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={panel} index={2}>
                Item Three
            </TabPanel>
        </>
    )
}

export default Panels