import styles from './Navbar.module.css';

export function Navbar(props) {
    return(
        <nav className={styles.navbar}>
            <h2 className={styles.logo}>Avash</h2>
            <button onClick ={() => props.setDarkMode(!props.darkMode)}>
                {props.darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
        </nav>

    )
}

