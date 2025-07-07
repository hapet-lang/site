import React from 'react';
import styles from './Processor.module.css';
import charStyles from './Char.module.css';

export default function Processor(): React.ReactElement {
  return (
    <div className={styles.processorContainer}>
      {/* Основной процессор */}
      <div className={styles.processor}>
        <div className={styles.processorCore}>
          <img src="/img/Char.svg" alt="Char" className={styles.charImage} />
        </div>
        <div className={styles.processorGlow}></div>
      </div>
      
      {/* Одна точка над процессором */}
      <div className={styles.signalDot + ' ' + styles.signalDot1}></div>
      <div className={styles.signalDot + ' ' + styles.signalDot2}></div>
      <div className={styles.signalDot + ' ' + styles.signalDot3}></div>
      <div className={styles.signalDot + ' ' + styles.signalDot4}></div>
      <div className={styles.signalDot + ' ' + styles.signalDot5}></div>
      <div className={styles.signalDot + ' ' + styles.signalDot6}></div>
      <div className={styles.signalDot + ' ' + styles.signalDot7}></div>
      
      {/* Одна сигнальная линия */}
      <div className={styles.signalLine + ' ' + styles.signalLine1}></div>
      <div className={styles.signalLine + ' ' + styles.signalLine2}></div>
      <div className={styles.signalLine + ' ' + styles.signalLine3}></div>
      <div className={styles.signalLine + ' ' + styles.signalLine4}></div>
      <div className={styles.signalLine + ' ' + styles.signalLine5}></div>
      <div className={styles.signalLine + ' ' + styles.signalLine6}></div>
      <div className={styles.signalLine + ' ' + styles.signalLine7}></div>
    </div>
  );
} 