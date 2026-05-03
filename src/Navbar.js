import styles from './Navbar.module.css';

export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <h2 className={styles.logo}>Avash</h2>
        </nav>
    );
}