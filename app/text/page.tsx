import { Metadata } from "next";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ryan christoffersen | contact",
};

const TextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>{"text"}</h1>
          <p>{"I'm currently exploring the following topics:"}</p>
          <ul>
            <li>
              {
                "free and open-source software and privacy-preserving technologies"
              }
            </li>
            <li>
              {
                "philosophy of technology, emerging technologies, cognitive security"
              }
            </li>
            <li>
              {
                "dark forest theory applied to politics, intelligence, and the internet"
              }
            </li>
          </ul>
          <hr />
          <p>{"[ links will be posted here ]"}</p>
        </div>
      </div>
    </div>
  );
};

export default TextPage;
