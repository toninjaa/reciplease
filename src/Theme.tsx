import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      main: '#ffddb0',
      dark: '#fa8100',
      light: '#fff2df',
    },
    secondary: {
      main: '#2d65d0',
      dark: '#282387',
      light: '#b0d2ff'
    },
  },
  typography: {
    fontFamily: [
      'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', 'Verdana', 'sans-serif'].join(','),
  }
})

export default Theme;