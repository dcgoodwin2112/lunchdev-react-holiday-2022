import About from "./about";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main>
      <div className={styles.container}>
        <About />
      </div>
    </main>
  );
}
