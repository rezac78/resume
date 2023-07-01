import Head from "next/head";
import Script from "next/script";
import { appWithTranslation } from "next-i18next";
import i18nConfig from "../../i18n";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/app.css";
import "../styles/index.css";
import "../pages/PortfolioContainer/Home/Header/Header.css";
import "../pages/PortfolioContainer/Home/Home.css";
import "../pages/PortfolioContainer/Home/Profile/Profile.css";
import "../pages/PortfolioContainer/Home/Footer/Footer.css";
import "../pages/PortfolioContainer/AboutMe/AboutMe.css";
import "../pages/PortfolioContainer/Resume/Resume.css";
import "../pages/PortfolioContainer/ContactMe/ContantMe.css";
import "react-toastify/dist/ReactToastify.css";
// add bootstrap css
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Resume online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
        <title>RezaMehrzad</title>
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
    </>
  );
}
export default appWithTranslation(MyApp, i18nConfig);
