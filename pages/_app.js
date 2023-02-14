import Head from 'next/head';
import email_page from './email_page';
import '../styles/globals.css';
import emails_xmp from './emails_xmp';
import { Navbar } from '../components';
const MyApp = ({ Component, pageProps }) => (
  <>
    <div className="bg-primary-black overflow-hidden">
    <Navbar/>
    </div>
    <Head>
      <title>Sukhpal</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <email_page />
    <emails_xmp/>
    <Component {...pageProps} />
  </>
);

export default MyApp;
