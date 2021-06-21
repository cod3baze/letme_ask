import styles from "../styles/Home.module.css";

import IllustrationImg from "../assets";

import "../services/firebase";

function Home() {
  return (
    <div className={styles.container}>
      <aside>
        <img src={IllustrationImg} alt="ilustração" />
      </aside>
    </div>
  );
}

export default Home;
