import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { usePanels } from '../../contexts/PanelContext'
import '../../styles.css'

const NavBar = () => {
    const { panel, setPanel } = usePanels();

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleChange = (event, newValue) => {
        setPanel(newValue)
    };

    return (
        <div className='navbar'>
            <div className="title">
                <Typography variant='h4'>Walter Eschenbach</Typography>
            </div>
            <div className="links">
                <Tabs value={panel} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="blog" {...a11yProps(0)} />
                    <Tab label="projects" {...a11yProps(1)} />
                    <Tab label="about" {...a11yProps(2)} />
                </Tabs>
            </div>
        </div>
    )
}

export default NavBar