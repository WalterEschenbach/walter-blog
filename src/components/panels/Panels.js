import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
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
                <Typography variant='h1' component={'span'} >All Posts</Typography>
                <Tags />
                <br />
                <Divider />
                Blog
                <Divider />
            </TabPanel>
            <TabPanel value={panel} index={1}>
                <Typography variant='h1' component={'span'} >All Projects</Typography>
                <br />
                <Divider />
                Projects
                <Divider />
            </TabPanel>
            <TabPanel value={panel} index={2}>
                <Typography variant='h1' component={'span'} >About</Typography>
                <br />
                <Divider />
                About
                <Divider />
            </TabPanel>
        </>
    )
}

export default Panels