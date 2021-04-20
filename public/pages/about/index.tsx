import styles from './style.module.css';

interface Props {
  path?: string;
  query?: unknown;
}

export default function About({ query }: Props): JSX.Element {
  return (
    <section class={styles.about}>
      <h1>About</h1>
      <p>A page all about this website.</p>
      <pre>{JSON.stringify(query)}</pre>
    </section>
  )
};
