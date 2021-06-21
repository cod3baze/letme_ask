import { Button } from "../components/Button";
import styles from "../styles/Home.module.css";

import "../services/firebase";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>elias alexandre</h1>
      <Button />
    </div>
  );
}
