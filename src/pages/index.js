import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { GraphQLClient, gql } from "graphql-request";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Resume from "./PortfolioContainer/Resume/Resume";
import ContantMe from "./PortfolioContainer/ContactMe/ContantMe";
import Home from "./PortfolioContainer/Home/Home";
import i18nConfig from "../../i18n";
import { useState } from "react";

export default function App({
  resumeProfiles,
  resumeAboute,
  resumeEducation,
  resumeWorkHistorie,
  programmingSkillsresume,
  resumeProject,
}) {
  const router = useRouter();
  const LocaleCookie = router.locale;
  const dir = LocaleCookie === "en" ? "ltr" : "rtl";
  const [getTeam, setTeam] = useState(false);

  return (
    <div className={getTeam ?"App" : "App-Dark"} dir={dir}>
      <Home getTeam={getTeam} setTeam={setTeam} Profiles={resumeProfiles} />
      {resumeAboute?.map((About) => {
        return (
          <AboutMe
            key={About.id}
            getTeam={getTeam}
            samaritan={About.samaritan}
            highlights={About.highlights}
            aboutImage={About.aboutImage.url}
            Profiles={resumeProfiles}
          />
        );
      })}

      <Resume
        resumeEducation={resumeEducation}
        resumeWorkHistorie={resumeWorkHistorie}
        programmingSkillsresume={programmingSkillsresume}
        resumeProject={resumeProject}
        getTeam={getTeam}
      />
      <ContantMe getTeam={getTeam} />
    </div>
  );
}
export const getStaticProps = async ({ locale }) => {
  const url =
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/claz0boqe1ir301uh7nbo9g6q/master";
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Njk1NTA1MzMsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xhejBib3FlMWlyMzAxdWg3bmJvOWc2cS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMzFiYmVhNzAtYmNlMi00Y2Y3LTg0ZTMtYTI3OGQ4NDZiNjcyIiwianRpIjoiY2xhemJhNGhvMW1rZTAxdW45Z28xYnVyaCJ9.P0qGnRpPw6pNpv5iyV0Jswc5MMLuK5o9Rd1BMmSeXi6ci5f-OKYQqSPrWA53KluoCYNMOOi0idBRcM5cYvXnC7M43qBg48tkkQVcXppJeFYL68BftzC8pBxYoR4hV_KYFXsk_d__P1h5dzTTDby1Zd3RxkklNsC2VFnLDhKMP_-8qW6wPJSrsR1zmfY1sEWhzyrg160PAJpC13Q4SU0UAtyvXoR74zxXuKmsIxAjjr5enG7KyvsG9MQxqDEleyZOiflKBIW-hGTwBdmvPf0DigVeKd-VIF9ozdM4cDSD-2SSxWAa7phcDlgGL2QYZwLY9aPpHwbX5arXk7GDLf0KRBx_2WYFxeHdEi01zL604BjTSh-Rqg3qNvSQvuKU8Xn5GP-4jKFulWTRQpRBL68FKwizKx8aNmmQbKAwDWWRjiZ76gRWdDSc_7zvb6SNezAtFYppAx8f5sLqid83PZDriv_eBb0SJEEXlH9qtCeoJmTwK2FyWR0PdP_E10sLwnu7bzljUSTN9jzBhOs_sUB9E5RTY1v5Mf6LdTWVJMwm9CLwpjUnWGI12RctvEi6WSlWgvkgTwClWB-r_TqQWwINM5vYnokcpHFnZGVXFWsRNuPwehUdyjkhCFWaCfwl6xWZHF4JjgOHdiH_M8hghg1O0D629BM5tU67willVseyTzk",
    },
  });

  const query1 = gql`
    query {
      resumeProfiles( locales:${locale}) {
        createdAt
        id
        littleSamaritan
        profileImage {
          url
        }
        resumepdfEn {
          url
        }
      }
    }
  `;
  const query2 = gql`
    query {
      resumeAboutMes(locales: ${locale}) {
        id
        samaritan
        highlights
        aboutImage {
          url
        }
      }
    }
  `;
  const query3 = gql`
    query {
      resumeEducations(locales: ${locale}) {
        educationData
        educationTitle
        educationStady
        educationLocation
        id
      }
    }
  `;
  const query4 = gql`
    query {
      resumeWorkHistories(locales:${locale}) {
        workHistoryData
        workHistoryLink
        workHistoryTitle
        workHistoryLocation
        workHistoryPosition
        id
      }
    }
  `;
  const query5 = gql`
    query {
      programmingSkillsresumes(locales: ${locale}) {
        programmingSkillsTitle
        programmingSkillsNumber
        id
      }
    }
  `;
  const query6 = gql`
    query {
      resumeProjects(locales: ${locale}) {
        projectTitle
        projectsData
        projectsLink
        projectsSummery
        projectsTochnologies
        id
      }
    }
  `;
  const data = await graphQLClient.request(query1);
  const resumeProfiles = data.resumeProfiles;
  const data2 = await graphQLClient.request(query2);
  const resumeAboute = data2.resumeAboutMes;
  const data3 = await graphQLClient.request(query3);
  const resumeEducation = data3.resumeEducations;
  const data4 = await graphQLClient.request(query4);
  const resumeWorkHistorie = data4.resumeWorkHistories;
  const data5 = await graphQLClient.request(query5);
  const programmingSkillsresume = data5.programmingSkillsresumes;
  const data6 = await graphQLClient.request(query6);
  const resumeProject = data6.resumeProjects;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], i18nConfig)),
      resumeProfiles,
      resumeAboute,
      resumeEducation,
      resumeWorkHistorie,
      programmingSkillsresume,
      resumeProject,
    },
  };
};
