import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';

type Sponsor = { src: string; href: string; alt: string; height: number; };

const sponsors: Sponsor[] = [
    { src: '/img/sponsors/softv.png', href: 'https://softv.su', alt: 'Sponsor 1', height: 74 },
    { src: '/img/sponsors/algaritm.png', href: 'https://algaritm.pro', alt: 'Sponsor 2', height: 74 },
    { src: '/img/sponsors/pylab.png', href: 'https://www.rustore.ru/catalog/app/su.softv.pylab', alt: 'Sponsor 3', height: 44 },
  ];

export default function Sponsors(): ReactNode {
  return (
    <section id="sponsors" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Translate id="theme.Sponsors">
            Sponsors
          </Translate>
        </div>

        <div className={styles.logos} role="list">
          {sponsors.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoLink}
              aria-label={`${s.alt}`}
              role="listitem"
            >
              <img src={useBaseUrl(s.src)} alt={s.alt} className={styles.logo} height={s.height} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
