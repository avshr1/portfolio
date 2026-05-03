import styles from './Contact.module.css';

export function Contact() {
    return (
        <section className={styles.contact}> 
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
            <a className={styles.email} href="mailto:avshr1@morgan.edu">avshr1@morgan.edu</a>
        </section>
    );
}