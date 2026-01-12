import { Metadata } from "next";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ryan christoffersen | about",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>{"about"}</h1>
          <p>
            {
              "I was born and raised in the Pacific Northwest. I grew up on an island playing competitive sports and experimental rock music."
            }
          </p>
          <p>
            {
              "I studied liberal arts in college with a focus on classical languages, critical and cultural theory, and film studies. I also participated in an extracurricular program for film production focused on cinematography."
            }
          </p>
          <p>
            {
              "I bounced around jobs after college but eventually settled into a career as a software engineer in the web3 ecosystem. I now research and develop tools and infrastructure for a variety of decentralized protocols."
            }
          </p>
          <hr />
          <div className={styles.item}>
            <h2>{"2018 - present"}</h2>
            <p>
              {
                "building and exploring distributed systems, governance frameworks, and decentralized monitoring, reporting, and verification"
              }
            </p>
            <p>
              {
                "software engineer, product manager, and protocol researcher for teams specializing in tools and infrastructure for the web3 ecosystem"
              }
            </p>
          </div>
          <div className={styles.item}>
            <h2>{"2014 - 2018"}</h2>
            <p>
              {
                "website developer, network administrator, and full stack engineer for small businesses, early startups, and non-profit organizations"
              }
            </p>
            <p>
              {
                "account manager and technical support at an AI software company, quality assurance specialist at a solar panel manufacturing company"
              }
            </p>
          </div>
          <div className={styles.item}>
            <h2>{"2010 - 2014"}</h2>
            <p>
              {
                "produced documentary films, promotional videos, and experimental short films exploring poverty, microfinance, and cinematography"
              }
            </p>
            <p>
              {
                "earned a BA in classical languages and literature, minors in classical greek, english literature, and film studies, also earned a CELTA certificate"
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
