import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00ADB5',
    },
    secondary: {
      main: '#E8F0F2',
    },
    secondary1:{
    main: '#D7E6EA',
},
secondary2:{
    main: '#AAD8D3',
},
text:{
    main: '#FFFFFF',
},

    typography: {
      fontFamily: 'PT Sans',
    },
  },
});

export default theme;