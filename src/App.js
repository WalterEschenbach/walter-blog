import React from 'react'
import Home from './containers/home/Home'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { PanelProvider } from './contexts/PanelContext'

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#B53F53',
        },
        secondary: {
            main: '#f50057',
        },
    },
})

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