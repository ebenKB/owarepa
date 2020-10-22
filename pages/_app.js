// import "tailwindcss/tailwind.css";
import 'antd/dist/antd.css';
import 'animate.css';
import "../styles/tailwind.css";
import '../styles/globals.css'

import AppContextProvider from '../context/app.context';

function MyApp({ Component, pageProps }) {
  return (
  <AppContextProvider>
    <Component {...pageProps} />
  </AppContextProvider>
  )
}

export default MyApp
