import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    const imgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!imgRef.current) return;
            const scrollPosition = window.pageYOffset;
            const viewportHeight = window.innerHeight;

            const progress = Math.min(scrollPosition / viewportHeight, 1.5);
            const scale = 1 + (progress * 2);
            const opacity = Math.max(1 - (progress * 1.2), 0);

            imgRef.current.style.transform = `scale(${scale})`;
            imgRef.current.style.opacity = opacity;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.parallaxBg}>
                <img
                    ref={imgRef}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR2kPmbCvDZsmcD2_O9p8-1z0CR2uZ_WvoqlzbxvgN7J9gKVtXhhSC1AwlhwAIvaZ4OHvxwFLWiCQsn0d4UJkBmSSWzmArzKbb0KKIPdP12zD_iUDp3rNesYzdSbu1HTIYSfjcAzqZ3ymF-hHjt7KZup67dr5CXaJrI7Iuvajn7pM-O1HuAP6sMmvgbA9gvZ-UoDBYQXxCS1nVaMn3CeiDBeeLdaZQGF0VXBJ1ij7Is5E7LvfS3uAz54RcxIVT0iz9MeJ4WWLcGyWW"
                    alt="Cinematic black hole Gargantua"
                    className={styles.parallaxImg}
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
                <h2 className={styles.subheading}>Endurance Mission Phase 1</h2>
                <h1 className={styles.title}>
                    Beyond <br /> The Horizon
                </h1>
                <p className={styles.description}>
                    Humanity was born on Earth, it was never meant to die here.
                </p>
                <div className={styles.cta}>
                    <button className={`${styles.mainBtn} glow-hover`}>
                        Explore Gargantua
                    </button>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <span className={styles.scrollText}>Initiate Descent</span>
                <div className={styles.scrollLine}></div>
            </div>
        </section>
    );
};

export default Hero;
