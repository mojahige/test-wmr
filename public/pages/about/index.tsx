import styles from './style.module.css';

interface Props {
  path?: string;
  query?: string;
}

const About = ({ query }: Props): JSX.Element => (
  <section class={styles.about}>
    <h1>About</h1>
    <p>A page all about this website.</p>
    <pre>{JSON.stringify(query)}</pre>
  </section>
);

export default About;
