import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <h1>Movie Picker</h1>
        <p>Discover your next favorite movie</p>
      </div>
    </main>
  );
}
