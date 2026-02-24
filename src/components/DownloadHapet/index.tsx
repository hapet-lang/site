import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

type Pkg = { label: string; sub?: string; arch: string[]; links: string[] };
type OsItem = { name: string; img: string; packages: Pkg[] };

const OS: OsItem[] = [
  {
    name: 'Mac',
    img: '/img/macos.svg',
    packages: [
      { label: '.dmg', sub: 'macOS', arch: ['x64', 'arm64'], links: ["" , ""] }
    ],
  },
  {
    name: 'Linux',
    img: '/img/linux.svg',
    packages: [
      { label: '.deb', sub: 'Debian, Ubuntu', arch: ['x64', 'arm64'], links: ["" , ""] },
    ],
  },
  {
    name: 'Windows',
    img: '/img/windows.svg',
    packages: [
      { label: '.exe', sub: 'Windows 10/11', arch: ['x64', 'arm64'], links: ["" , ""] }
    ],
  },
];

export default function DownloadHapet(): ReactNode {
  return (
    <section>
      <div className={styles.downloadsContainer}>
        {OS.map((o) => (
          <article key={o.name} className={styles.osBlock} aria-labelledby={`os-${o.name}`}>
            <div className={styles.osHeader}>
              <div className={styles.osImage}>
                <img src={useBaseUrl(o.img)} alt={`${o.name} icon`} />
              </div>
              <h3 id={`os-${o.name}`} className={styles.osName}>
                {o.name}
              </h3>
            </div>

            <div className={styles.pkgRow}>
              {o.packages.map((p, i) => (
                <div className={styles.pkgTemplate}>
                    <div key={i} className={styles.pkgNameLabel}>
                        <div className={styles.pkgLabel}>{p.label}</div>
                        {p.sub && <div className={styles.pkgSub}>{p.sub}</div>}
                    </div>

                    <div className={styles.archButtons}>
                        {p.arch.map((a, j) => (
                            <button key={i} className={styles.pkgButton} type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href=p.links[i];
                              }}>
                              <img className={styles.downloadImage} src={useBaseUrl('/img/download.svg')} alt='download' />
                              <div className={styles.badge}>{a}</div>
                            </button>
                        ))}
                    </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}