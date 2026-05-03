import styles from './Skills.module.css'

export function Skills() {
    return(
        <section className={styles.skills}>
            <h2>Skills</h2>
            <ul className={styles.list}>
                <li className={styles.badge}>Python</li>
                <li className={styles.badge}>HTML</li>
                <li className={styles.badge}>CSS</li>
                <li className={styles.badge}>JavaScript</li>
                <li className={styles.badge}>Git & GitHub</li>
                <li className={styles.badge}>React</li>
            </ul>
        </section>
    );
}