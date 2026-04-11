import React from "react";
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const hexes = [
    { src: "/img/hex-back/poly17.png", delay: 3.82 },
    { src: "/img/hex-back/poly16.png", delay: 2.92 },
    { src: "/img/hex-back/poly15.png", delay: 2.32 },
    { src: "/img/hex-back/poly14.png", delay: 1.72 },
    { src: "/img/hex-back/poly13.png", delay: 1.52 },
    { src: "/img/hex-back/poly12.png", delay: 1.32 },
    { src: "/img/hex-back/poly11.png", delay: 1.12 },
    { src: "/img/hex-back/poly10.png", delay: 1.02 },
    { src: "/img/hex-back/poly9.png", delay: 0.92 },
    { src: "/img/hex-back/poly8.png", delay: 0.82 },
    { src: "/img/hex-back/poly7.png", delay: 0.72 },
    { src: "/img/hex-back/poly6.png", delay: 0.62 },
    { src: "/img/hex-back/poly5.png", delay: 0.52 },
    { src: "/img/hex-back/poly4.png", delay: 0.42 },
    { src: "/img/hex-back/poly3.png", delay: 0.32 },
    { src: "/img/hex-back/poly2.png", delay: 0.22 },
    { src: "/img/hex-back/poly1.png", delay: 0.12 },
    { src: "/img/hex-back/poly0.png", delay: 0.0 },
];

export default function HexSpiralBackground() {
  return (
    <div>
      {hexes.map((h, i) => (
        <img
          key={i}
          className={styles.hex}
          src={useBaseUrl(h.src)}
          alt=""
          style={{
            width: `1642px`,
            height: `1405px`,
            transform: `translate(0px, 0px) rotate(0deg)`,
            animationDelay: `${h.delay}s`,
            zIndex: 0,
            opacity: 0
          }}
        />
      ))}
    </div>
  );
}