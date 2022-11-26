import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Resume from "./PortfolioContainer/Resume/Resume";
import ContantMe from "./PortfolioContainer/ContactMe/ContantMe";
import Home from "./PortfolioContainer/Home/Home";
import i18nConfig from "../../i18n";
export default function App() {
  const router = useRouter();
  const LocaleCookie = router.locale;
  const dir = LocaleCookie === "en" ? "ltr" : "rtl";
  return (
    <div className="App" dir={dir}>
      <Home />
      <AboutMe />
      <Resume />
      <ContantMe />
    </div>
  );
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], i18nConfig)),
  },
});
