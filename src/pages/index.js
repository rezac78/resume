import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], i18nConfig)),
    },
  };
};

// GraphQLClient{

//   import { useRouter } from "next/router";
//   import { GraphQLClient, gql } from "graphql-request";

// export default function App({
//   resumeProfiles,
//   resumeAboute,
//   resumeEducation,
//   resumeWorkHistorie,
//   programmingSkillsresume,
//   resumeProject,
// }) {
//   const router = useRouter();
//   const LocaleCookie = router.locale;
//   const dir = LocaleCookie === "en" ? "ltr" : "rtl";
//   return (
//     <div className="App" dir={dir}>
//       <Home Profiles={resumeProfiles} />
//       {resumeAboute?.map((About) => {
//         return (
//           <AboutMe
//             key={About.id}
//             samaritan={About.samaritan}
//             highlights={About.highlights}
//             aboutImage={About.aboutImage.url}
//           />
//         );
//       })}

//       <Resume
//         resumeEducation={resumeEducation}
//         resumeWorkHistorie={resumeWorkHistorie}
//         programmingSkillsresume={programmingSkillsresume}
//         resumeProject={resumeProject}
//       />
//       <ContantMe />
//     </div>
//   );
// }
// export const getStaticProps = async ({ locale }) => {
//   const url = process.env.ENDPOINT;
//   const graphQLClient = new GraphQLClient(url, {
//     headers: {
//       Authorization: process.env.GRAPH_CMS_TOKEN,
//     },
//   });
//   const query1 = gql`
//     query {
//       resumeProfiles( locales:${locale}) {
//         createdAt
//         id
//         littleSamaritan
//         profileImage {
//           url
//         }
//         resumepdfEn {
//           url
//         }
//       }
//     }
//   `;
//   const query2 = gql`
//     query {
//       resumeAboutMes(locales: ${locale}) {
//         id
//         samaritan
//         highlights
//         aboutImage {
//           url
//         }
//       }
//     }
//   `;
//   const query3 = gql`
//     query {
//       resumeEducations(locales: ${locale}) {
//         educationData
//         educationTitle
//         educationStady
//         educationLocation
//         id
//       }
//     }
//   `;
//   const query4 = gql`
//     query {
//       resumeWorkHistories(locales:${locale}) {
//         workHistoryData
//         workHistoryLink
//         workHistoryTitle
//         workHistoryLocation
//         workHistoryPosition
//         id
//       }
//     }
//   `;
//   const query5 = gql`
//     query {
//       programmingSkillsresumes(locales: ${locale}) {
//         programmingSkillsTitle
//         programmingSkillsNumber
//         id
//       }
//     }
//   `;
//   const query6 = gql`
//     query {
//       resumeProjects(locales: ${locale}) {
//         projectTitle
//         projectsData
//         projectsLink
//         projectsSummery
//         projectsTochnologies
//         id
//       }
//     }
//   `;
//   const data = await graphQLClient.request(query1);
//   const resumeProfiles = data.resumeProfiles;
//   const data2 = await graphQLClient.request(query2);
//   const resumeAboute = data2.resumeAboutMes;
//   const data3 = await graphQLClient.request(query3);
//   const resumeEducation = data3.resumeEducations;
//   const data4 = await graphQLClient.request(query4);
//   const resumeWorkHistorie = data4.resumeWorkHistories;
//   const data5 = await graphQLClient.request(query5);
//   const programmingSkillsresume = data5.programmingSkillsresumes;
//   const data6 = await graphQLClient.request(query6);
//   const resumeProject = data6.resumeProjects;
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"], i18nConfig)),
//       resumeProfiles,
//       resumeAboute,
//       resumeEducation,
//       resumeWorkHistorie,
//       programmingSkillsresume,
//       resumeProject,
//     },
//   };
// };
// }
