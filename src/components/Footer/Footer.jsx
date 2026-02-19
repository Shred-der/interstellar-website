import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <span className="material-symbols-outlined">flare</span>
                    <span className={styles.brandName}>Endurance</span>
                </div>

                <div className={styles.links}>
                    <a href="#" className={styles.link}>Privacy Protocol</a>
                    <a href="#" className={styles.link}>Terms of Descent</a>
                    <a href="#" className={styles.link}>NASA Logs</a>
                </div>

                <p className={styles.copy}>
                    © 2024 Lazarus Project. For the survival of humanity.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
