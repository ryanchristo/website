import { Metadata } from "next";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ryan christoffersen | accounts",
};

const AccountsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>{"accounts"}</h1>
          <p>
            {
              "For social media and other public platforms, the following is a complete list of personal accounts that I currently own:"
            }
          </p>
          <div style={{ padding: "0.5em 0" }}>
            <ul>
              <li>
                <a
                  href="https://github.com/ryanchristo"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {"github"}
                </a>
                <i>{" - for software projects"}</i>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ryanchristo-"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {"linkedin"}
                </a>
                <i>{" - for work experience"}</i>
              </li>
              {/* <li>
                <a
                  href="https://bsky.app/profile/ryanchristo.bsky.social"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {"bluesky"}
                </a>
                <i>{" - for following projects"}</i>
              </li> */}
              <li>
                <a
                  href="https://hackmd.io/@ryanchristo"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {"hackmd"}
                </a>
                <i>{" - for software notes"}</i>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/~ryanchristo"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {"npmjs"}
                </a>
                <i>{" - for software projects"}</i>
              </li>
              <li>
                <a
                  href="https://buf.build/ryanchristo"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {"bufbuild"}
                </a>
                <i>{" - for software projects"}</i>
              </li>
              <li>
                <a
                  href="https://medium.com/@ryanchristo"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {"medium"}
                </a>
                <i>{" - for historical content"}</i>
              </li>
            </ul>
          </div>
          <p>
            <i>
              {
                "This list does not include messaging platforms (e.g. Signal, Telegram, Discord) or project-specific forums for technical and governance discussions."
              }
            </i>
          </p>
          <p>
            <i>
              {
                "I currently do not have an account on X, Facebook, Instagram, TikTok, etc. If you see a suspicious account that is not on the list, please "
              }
              <a href="/contact">{"let me know"}</a>
              {"."}
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
