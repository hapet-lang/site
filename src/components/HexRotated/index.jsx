import React, {useId} from 'react';
import styles from './styles.module.css';

// Centers and radii use the original 1642 × 1405 artwork coordinates.
// Draw the outer layers first so the smaller hexagons stay in front.
const hexes = [
  {x: 1016.8, y: 816.8, radius: 110, delay: 0.12},
  {x: 974.1, y: 832.1, radius: 120, delay: 0.22},
  {x: 946.3, y: 872.3, radius: 140, delay: 0.32},
  {x: 940.4, y: 937.4, radius: 160, delay: 0.42},
  {x: 975.1, y: 991.1, radius: 190, delay: 0.52},
  {x: 1026.5, y: 1038.5, radius: 220, delay: 0.62},
  {x: 1082.2, y: 1008.2, radius: 250, delay: 0.72},
  {x: 1125.9, y: 961.9, radius: 280, delay: 0.82},
  {x: 1158, y: 886, radius: 300, delay: 0.92},
  {x: 1168.6, y: 806.6, radius: 325, delay: 1.02},
  {x: 1148.1, y: 732.1, radius: 350, delay: 1.12},
  {x: 1104.4, y: 669.3, radius: 375, delay: 1.32},
  {x: 1021.4, y: 620.4, radius: 400, delay: 1.52},
  {x: 929.3, y: 600.4, radius: 425, delay: 1.72},
  {x: 825.6, y: 619.7, radius: 450, delay: 2.32},
  {x: 726.2, y: 669.2, radius: 475, delay: 2.92},
  {x: 640.9, y: 763.9, radius: 500, delay: 3.82},
].map((hex, index) => ({
  ...hex,
  rotation: -20 * (index + 1),
  opacity: Math.min(1, 1.1 - index * 0.05),
})).reverse();

// A unit hexagon with rounded corners, shared by all background layers.
const hexagonPath = 'M -2.5 -98.557 A 5 5 0 0 1 2.5 -98.557 '
  + 'L 84.103 -51.443 A 5 5 0 0 1 86.603 -47.113 '
  + 'L 86.603 47.113 A 5 5 0 0 1 84.103 51.443 '
  + 'L 2.5 98.557 A 5 5 0 0 1 -2.5 98.557 '
  + 'L -84.103 51.443 A 5 5 0 0 1 -86.603 47.113 '
  + 'L -86.603 -47.113 A 5 5 0 0 1 -84.103 -51.443 Z';

export default function HexSpiralBackground() {
  const id = useId();
  const hexagonId = `${id}-hexagon`;
  const gradientId = `${id}-gradient`;

  return (
    <svg
      className={styles.background}
      width="1642"
      height="1405"
      viewBox="0 0 1642 1405"
      aria-hidden="true"
      focusable="false">
      <defs>
        <path id={hexagonId} d={hexagonPath} />
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1="-23.1" y1="-96.8"
          x2="23.1" y2="96.8">
          <stop stopColor="#003636" />
          <stop offset="1" stopColor="#00aeae" />
        </linearGradient>
      </defs>
      {hexes.map((hex) => (
        <use
          key={hex.radius}
          href={`#${hexagonId}`}
          className={styles.hex}
          fill={`url(#${gradientId})`}
          transform={`translate(${hex.x} ${hex.y}) rotate(${hex.rotation}) scale(${hex.radius / 100})`}
          style={{
            '--hex-opacity': hex.opacity,
            animationDelay: `${hex.delay}s`,
          }}
        />
      ))}
      <g className={styles.hex} transform="translate(937 732)">
        <path
          fill="#000"
          d="M96 2.30942C98.4752 0.880356 101.525 0.880354 104 2.30942L182.603 47.6906C185.078 49.1197 186.603 51.7607 186.603 54.6188V145.381C186.603 148.239 185.078 150.88 182.603 152.309L104 197.691C101.525 199.12 98.4752 199.12 96 197.691L17.3975 152.309C14.9223 150.88 13.3975 148.239 13.3975 145.381V54.6188C13.3975 51.7607 14.9223 49.1197 17.3975 47.6906L96 2.30942Z"
        />
        <path
          fill="#fff"
          d="M78 81.5C78 86.1944 81.8056 90 86.5 90H114.5C119.194 90 123 86.1944 123 81.5V118.5C123 113.806 119.194 110 114.5 110H86.5C81.8056 110 78 113.806 78 118.5V81.5Z M123 53.4571C123 51.919 124.664 50.9566 125.997 51.7232L141.997 60.9232C142.617 61.28 143 61.9413 143 62.6571V137.343C143 138.059 142.617 138.72 141.997 139.077L125.997 148.277C124.664 149.043 123 148.081 123 146.543V53.4571Z M58 62.6571C58 61.9413 58.3825 61.28 59.0031 60.9232L75.0031 51.7232C76.3364 50.9566 78 51.919 78 53.4571V146.543C78 148.081 76.3364 149.043 75.0031 148.277L59.0031 139.077C58.3825 138.72 58 138.059 58 137.343V62.6571Z"
        />
      </g>
    </svg>
  );
}