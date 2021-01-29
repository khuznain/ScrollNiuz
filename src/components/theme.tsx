import {createTheme, createBox, createText} from '@shopify/restyle';

const theme = createTheme({
  colors: {
    primary: '#418B86',
    transparent: 'transparent',
    body: '#9C9C9C',
    bodyLight: '#AAAAA9',
    grey: '#F4F0EF',
    grey2: '#EFEFEF',
    danger: '#FF0058',
    darkGrey: '#8A8D90',
    shadow: '#00000029',
    borderBlack: '#4A4A48',
    shadow2: '#00000029',
    teamCard: '#FCFCFC',
    black: '#171717',
    white: '#fff',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 150,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
      color: 'primary',
    },
    subheader: {
      fontWeight: '600',
      fontSize: 28,
      lineHeight: 36,
      color: 'primary',
    },
    body: {
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
      color: 'body',
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();

export default theme;
