import { Metadata } from "next";
import Link from "next/link";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ryan christoffersen | tech",
};

const TechPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>{"tech"}</h1>
          <p>
            {
              "I'm a self-taught software engineer. I started building websites back in 2012 after graduating college with a liberal arts degree."
            }
          </p>
          <p>
            {
              "I managed websites, databases, and servers for small businesses and non-profit organizations before starting a career in tech in 2016."
            }
          </p>
          <p>
            {
              "I later became passionate about web3 technologies and worked on projects building governance tools and blockchain infrastructure."
            }
          </p>
          <p>
            {
              "More recently I've been learning about agentic systems and building a multi-agent management system and knowledge framework."
            }
          </p>
          <hr />
          <div className={styles.item}>
            <h2>{"Chora AI | 2026 - Present"}</h2>
            <p>
              <i>{"Software Engineer, Protocol Researcher"}</i>
            </p>
            <p>
              {
                "Chora AI is a research project focused on local-first and privacy-preserving tools and infrastructure for specialized agents. Chora AI is an evolving side project that is currently stewarded by Chora Studio."
              }
            </p>
            <p>
              <i>{"Rust, LLMs"}</i>
            </p>
            <p>
              {/*<Link href="https://chora.studio/chora-ai" target="_blank">
                {"website"}
              </Link>
              {" | "}*/}
              <Link href="https://github.com/chora-ai" target="_blank">
                {"source"}
              </Link>
            </p>
            <h2>{"Chora Studio | 2024 - Present"}</h2>
            <p>
              <i>{"Owner, Software Engineer, Protocol Researcher"}</i>
            </p>
            <p>
              {
                "Chora Studio is a software research and development company building software for agentic systems and decentralied protocols. Chora Studio also offers research and development as a service."
              }
            </p>
            <p>
              <i>{"Rust, LLMs, Go, TypeScript, Cosmos"}</i>
            </p>
            <p>
              <Link href="https://chora.studio" target="_blank">
                {"website"}
              </Link>
              {" | "}
              <Link href="https://github.com/chora-studio" target="_blank">
                {"source"}
              </Link>
            </p>
          </div>
          <div className={styles.item}>
            <h2>{"Regen Network | 2021 - 2023"}</h2>
            <p>
              <i>
                {
                  "Technical Product Manager, Software Engineer, Network Operations"
                }
              </i>
            </p>
            <p>
              {
                "Regen Network aligns economics with ecology to drive regenerative land management. I primarily worked on Regen Ledger and Cosmos SDK, the underlying blockchain infrastructure for Regen Network."
              }
            </p>
            <p>
              <i>{"Go, TypeScript, Cosmos"}</i>
            </p>
            <p>
              <Link href="https://regen.network" target="_blank">
                {"website"}
              </Link>
              {" | "}
              <Link href="https://github.com/regen-network" target="_blank">
                {"source"}
              </Link>
            </p>
          </div>
          <div className={styles.item}>
            <h2>{"Chora | 2020 - 2023"}</h2>
            <p>
              <i>{"Software Engineer, Protocol Researcher"}</i>
            </p>
            <p>
              {
                "Chora is software for commons governance and ecological regeneration built with distributed ledger technology. Chora started out as an evolving side project that later became a product of Chora Studio."
              }
            </p>
            <p>
              <i>{"Go, TypeScript, Cosmos"}</i>
            </p>
            <p>
              <Link href="https://chora.io" target="_blank">
                {"website"}
              </Link>
              {" | "}
              <Link href="https://github.com/chora-io" target="_blank">
                {"source"}
              </Link>
            </p>
          </div>
          <div className={styles.item}>
            <h2>{"ChainSafe | 2019 - 2020"}</h2>
            <p>
              <i>{"Software Engineer, Protocol Researcher"}</i>
            </p>
            <p>
              {
                "ChainSafe is a team of developers building tools and infrastructure for a variety of decentralized protocols. I primarily worked on Gossamer, a node client implementation for the Polkadot network written in Go."
              }
            </p>
            <p>
              <i>{"Go, Polkadot, Solidity, Ethereum"}</i>
            </p>
            <p>
              <Link href="https://chainsafe.io" target="_blank">
                {"website"}
              </Link>
              {" | "}
              <Link href="https://github.com/chainsafe" target="_blank">
                {"source"}
              </Link>
            </p>
          </div>
          <div className={styles.item}>
            <h2>{"Colony | 2018 - 2019"}</h2>
            <p>
              <i>{"Developer Relations Manager, Software Engineer"}</i>
            </p>
            <p>
              {
                "Colony is a platform for open organizations built on Ethereum. I helped build and maintain developer tools, wrote documentation, explored integrations, and managed developer relations."
              }
            </p>
            <p>
              <i>
                {"JavaScript, React, Redux, Webpack, IPFS, Solidity, Ethereum"}
              </i>
            </p>
            <p>
              <Link href="https://colony.io" target="_blank">
                {"website"}
              </Link>
              {" | "}
              <Link href="https://github.com/joincolony" target="_blank">
                {"source"}
              </Link>
            </p>
          </div>
          <div className={styles.item}>
            <h2>{"Chora | 2018"}</h2>
            <p>
              <i>{"Software Engineer"}</i>
            </p>
            <p>
              {
                "Chora was a project I created to learn about and explore Ethereum. The demo application allowed users to create organizations, projects, and tasks using smart contracts on the Ethereum network."
              }
            </p>
            <p>
              <i>{"JavaScript, React, Redux, Webpack, Solidity, Ethereum"}</i>
            </p>
          </div>
          <div className={styles.item}>
            <h2>{"Horizon App | 2017 - 2018"}</h2>
            <p>
              <i>{"Full Stack Engineer"}</i>
            </p>
            <p>
              {
                "Horizon App uses groups and mutual friends to help members find people and places to stay. I designed and developed the web application, rebuilt the latest version of the API, and integrated email services."
              }
            </p>
            <p>
              <i>
                {"JavaScript, React, Redux, Webpack, Ruby, Rails, PostgreSQL"}
              </i>
            </p>
          </div>
          <div className={styles.item}>
            <h2>{"Ushahidi | 2017"}</h2>
            <p>
              <i>{"Full Stack Engineer"}</i>
            </p>
            <p>
              {
                "Ushahidi is a crowdsourcing application with a focus on disaster response that makes it easy to collect and visualize data on a map. I volunteered for three months implementing features and fixing bugs."
              }
            </p>
            <p>
              <i>{"JavaScript, AngularJS, PHP"}</i>
            </p>
          </div>
          <div className={styles.item}>
            <h2>{"Joglo Northwest | 2017"}</h2>
            <p>
              <i>{"Full Stack Engineer"}</i>
            </p>
            <p>
              {
                "Joglo Northwest is a small business that buys and sells Indonesian art, furniture and stone. I rebuilt the website and content management system using my very own simple-cms as the foundation (see below)."
              }
            </p>
            <p>
              <i>
                {"JavaScript, React, Redux, Webpack, Node, Express, MongoDB"}
              </i>
            </p>
          </div>
          <div className={styles.item}>
            <h2>{"simple-cms | 2017"}</h2>
            <p>
              <i>{"Full Stack Engineer"}</i>
            </p>
            <p>
              {
                "After working my way through freeCodeCamp, I developed simple-cms to test my skills on a larger project - a simple yet customizable content management system for small businesses and freelancers."
              }
            </p>
            <p>
              <i>
                {"JavaScript, React, Redux, Webpack, Node, Express, MongoDB"}
              </i>
            </p>
          </div>
          <div className={styles.item}>
            <h2>{"fcc-projects | 2016 - 2017"}</h2>
            <p>
              <i>{"Full Stack Engineer"}</i>
            </p>
            <p>
              {
                "To advance my skills, I worked my way through the freeCodeCamp coursework and projects. The freeCodeCamp curriculum focuses on full-stack development with React, Node, Express, and MongoDB."
              }
            </p>
            <p>
              <i>
                {"JavaScript, React, Redux, Webpack, Node, Express, MongoDB"}
              </i>
            </p>
          </div>
          <div className={styles.item}>
            <h2>{"Joglo Northwest | 2014"}</h2>
            <p>
              <i>{"Web Developer"}</i>
            </p>
            <p>
              {
                "Joglo Northwest is a small business that buys and sells Indonesian art, furniture, and stone. I designed and developed a simple gallery website with a custom content management system and integrated email services."
              }
            </p>
            <p>
              <i>{"HTML, CSS, JavaScript, PHP, SQL"}</i>
            </p>
          </div>
          <div className={styles.item}>
            <h2>{"Ancient Greek | 2014"}</h2>
            <p>
              <i>{"Web Developer"}</i>
            </p>
            <p>
              {
                "Ancient Greek was a web application for learning Ancient Greek. The app included a dictionary, interactive reading exercises, and flashcards for practicing vocabulary, verb conjugations, and noun declensions."
              }
            </p>
            <p>
              <i>{"HTML, CSS, JavaScript, PHP, SQL"}</i>
            </p>
          </div>
          <div className={styles.item}>
            <h2>{"Documentary Art Network | 2013"}</h2>
            <p>
              <i>{"Web Developer"}</i>
            </p>
            <p>
              {
                "Documentary Art Network was a professional network for documentary artists. Users could post articles and stories, discuss ideas, find people to collaborate with, and rent or exchange equipment."
              }
            </p>
            <p>
              <i>{"HTML, CSS, JavaScript, PHP, SQL"}</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechPage;
