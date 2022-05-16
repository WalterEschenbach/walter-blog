import { createTheme } from '@mui/material/styles'


export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#28d4bf',
        },
        secondary: {
            main: '#f50057',
        },
    },
    typography: {
        h6: {
            color: '#808080',
            fontSize: '1rem',
        }
    }
})