import styles from "./layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <header>Dan&apos;s silly bio generator</header>
      <main>{children}</main>
      <footer>&copy; nope</footer>
    </div>
  );
}
