import styles from './Projects.module.css'

function ProjectCard(props){
    return(
        <div className={styles.card}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a href={props.link} target="_blank" rel="noreferrer">Live Site</a>
        </div>
    )
}

export function Projects() {
    return(
        <section className={styles.projects}>
            <h2>Projects</h2>
            <ProjectCard
                title="Baltimore Soccer Tournament"
                description="A tournament website built with HTML, CSS, and JavaScript featuring dark mode, RSVP form handling, and responsive layouts."
                link="https://avshr1.github.io/baltimore-soccer-tournament"
        />
        </section>
    );
}
