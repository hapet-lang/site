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
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.heroBanner}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', width: 0, height: 0, visibility: 'hidden' }}
      >
        <filter id="grainFilter" colorInterpolationFilters="sRGB">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={0.65}
            numOctaves={3}
            stitchTiles="stitch"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={20}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/*
      <div className={styles.pureBackground}>
      </div>

      <div className={styles.blurredBackground}>
      </div>

      <div className={styles.blurredProccessor}>
        <Processor />
      </div>
      */}

      <div className={styles.blackBackground}>
      </div>

      <div className={styles.hapetRotatedBackground}>
        <img src={useBaseUrl('/img/hapet_back.png')} alt="back" />
      </div>

      <div className={styles.heroContents}>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
      
        <div className={styles.bottomLeftText}>
          <Translate id="theme.Tagline">
            Yet another kakish and cringe programming language.
          </Translate>
        </div>
        
        <div className={styles.topRightControls}>
          <Link to="/docs" className={styles.docButton}>
            <Translate id="theme.Docs"> Documentation </Translate>
          </Link>
          <LocaleDropdown />
        </div>
      </div>
    </div>
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
