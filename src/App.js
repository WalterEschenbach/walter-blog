import React from 'react'
import Home from './containers/home/Home'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '././utils/theme'
import { CssBaseline } from '@mui/material'
import { PanelProvider } from './contexts/PanelContext'



const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <PanelProvider>
                <CssBaseline />
                <Home />
            </PanelProvider>
        </ThemeProvider>
    )
}

export default App