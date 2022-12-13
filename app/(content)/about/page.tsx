import About from "./about";
import styles from "./page.module.css";

export default async function AboutPage() {
  let req = await fetch(`${process.env.ROOT_URL}/api/animals`);
  // let req = await fetch("https://httpstat.us/500");
  let animal: { name: string } = await req.json();
  return (
    <div className={styles.container}>
      <About />
      <p>PS: It has been rumored that Dan was raised by: {animal.name}</p>
    </div>
  );
}
