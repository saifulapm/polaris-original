import React from "react";
import Link from "next/link";
import Image from "next/image";
import shopifyLogo from "../../../public/shopify-logo.svg";
import styles from "./Page.module.scss";
import GlobalSearch from "../GlobalSearch";
import { className } from "../../utils/various";
import MaxPageWidthDiv from "../MaxPageWidthDiv";
import GuidelinesNav from "../GuidelinesNav";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
}

const headerNavItems: {
  label: string;
  url: string;
}[] = [
  {
    label: "Resources",
    url: "/resources",
  },
  {
    label: "Guidelines",
    url: "/guidelines",
  },
  {
    label: "Components",
    url: "/components",
  },
  {
    label: "Icons",
    url: "/icons",
  },
  {
    label: "Tokens",
    url: "/tokens/getting-started",
  },
];

function Page({ children }: Props) {
  const router = useRouter();

  return (
    <div className={className(styles.Page)}>
      <div className={styles.Header}>
        <MaxPageWidthDiv className={styles.HeaderInner}>
          <Link href="/">
            <a className={styles.Logo}>
              <Image
                src={shopifyLogo}
                width={24}
                height={24}
                alt="Shopify logo"
              />
              Polaris
            </a>
          </Link>

          <ul className={styles.Nav}>
            {headerNavItems.map(({ url, label }) => {
              const section = router.asPath.split("/").slice(0, 2).join("/");
              const isCurrent =
                section !== "/" && url.startsWith(section) ? "page" : false;
              return (
                <li key={url}>
                  <Link href={url} passHref>
                    <a aria-current={isCurrent}>{label}</a>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className={styles.SearchWrapper}>
            <GlobalSearch />
          </div>
        </MaxPageWidthDiv>
      </div>

      <GuidelinesNav />

      <div className={styles.Content}>{children}</div>

      <div className={styles.Footer}>
        <Image src={shopifyLogo} width={24} height={24} alt="Shopify logo" />
      </div>
    </div>
  );
}

export default Page;
