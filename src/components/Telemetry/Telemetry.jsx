import React from 'react';
import styles from './Telemetry.module.css';

const telemetryData = [
    {
        icon: 'schedule',
        label: 'Time Dilation',
        value: '1h : 7y',
        description: 'Relative to Earth standard timeline near event horizon.',
        opacity: 'full'
    },
    {
        icon: 'dynamic_form',
        label: 'Gravity',
        value: '1.3M Gs',
        description: 'Intense gravitational curvature detected in Sector 4.',
        opacity: 'dim'
    },
    {
        icon: 'adjust',
        label: 'Singularity',
        value: '98.4%',
        description: 'Stability index of the wormhole connection point.',
        opacity: 'dim'
    },
    {
        icon: 'radar',
        label: 'Horizon Radius',
        value: '150M KM',
        description: 'Safe distance threshold for Endurance orbit.',
        opacity: 'dim'
    }
];

const Telemetry = () => {
    return (
        <section id="data" className={styles.telemetry}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h3 className={styles.tag}>Telemetry</h3>
                    <h2 className={styles.title}>Mission Parameters</h2>
                </div>
                <div className={styles.grid}>
                    {telemetryData.map((item, index) => (
                        <div key={index} className={`${styles.card} glass-panel ${item.opacity === 'full' ? styles.active : ''}`}>
                            <span className={`material-symbols-outlined ${styles.icon}`}>
                                {item.icon}
                            </span>
                            <h4 className={styles.label}>{item.label}</h4>
                            <div className={styles.value}>{item.value}</div>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    ))}
                    grid        </div>
            </div>
        </section>
    );
};

export default Telemetry;
