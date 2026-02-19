import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} glass-panel`}>
                <div className={styles.logo}>
                    <span className="material-symbols-outlined">flare</span>
                    <span className={styles.logoText}>Interstellar</span>
                </div>
                <div className={styles.links}>
                    <a href="#mission" className={styles.link}>Mission</a>
                    <a href="#data" className={styles.link}>Data</a>
                    <a href="#contact" className={styles.link}>Contact</a>
                </div>
                <button className={`${styles.exploreBtn} glow-hover`}>
                    Explore
                </button>
            </nav>
        </header>
    );
};

export default Navbar;
