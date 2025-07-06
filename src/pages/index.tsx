import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import LocaleDropdown from '@site/src/components/LocaleDropdown';
import Processor from '@site/src/components/Processor';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <Processor />
      
      <Heading as="h1" className={styles.heroTitle}>
        {siteConfig.title}
      </Heading>
      
      <div className={styles.bottomLeftText}>
        <Translate id="theme.Tagline">
          More control over program actions.
        </Translate>
      </div>
      
      <div className={styles.topRightControls}>
        <Link to="/docs" className={styles.docButton}>
          <Translate id="theme.Docs"> Documentation </Translate>
        </Link>
        <LocaleDropdown />
      </div>
    </header>
  );
}

export default function Home(props): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="hapet-lang site">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
