import React from 'react';
import styles from './TechnicalView.module.css';

const TechnicalView = () => {
    return (
        <section id="mission" className={styles.technical}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.statusBadge}>
                        System Status: Operational
                    </div>
                    <h2 className={styles.title}>The Lazarus Project</h2>
                    <p className={styles.description}>
                        Our scouts have already begun the descent. Miller, Edmunds, and Mann have sent back preliminary pings. The Endurance is ready to bridge the gap between our dying world and the next frontier.
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <span className="material-symbols-outlined">check_circle</span>
                            <span>Cryogenic stabilization complete</span>
                        </li>
                        <li className={styles.listItem}>
                            <span className="material-symbols-outlined">check_circle</span>
                            <span>TARS and CASE logic arrays initialized</span>
                        </li>
                        <li className={styles.listItem}>
                            <span className="material-symbols-outlined">check_circle</span>
                            <span>Docking sequence confirmed</span>
                        </li>
                    </ul>
                </div>

                <div className={styles.imageContainer}>
                    <div className={styles.glowEffect}></div>
                    <div className={`${styles.imageWrapper} glass-panel`}>
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA58rIRT1mJznx4ekMnkiQMo1jaat8cerU7PjsslVMYJNXtl4-swBxvt3ScI-Qy0LtQOCeaRc7Yej38Kjmn4zGlTP_bTejVdez5ejCqd7uMg1KreoymROS1Y3fdYIurvHU0ZhFVjF5xreD3Z136RaPJtRqa-EFvVo4KLoqZhyQvNPr8z7oyHd9RjLnEan9ITOdbX8FDFVSNBpmVlTipwL_tZpfGBQJG8lHGAtVhJRGfRSmmeB_aG_ZWU0lTKdIXtGVRTP3Il4Xf6aLb"
                            alt="Futuristic space station interior"
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnicalView;
