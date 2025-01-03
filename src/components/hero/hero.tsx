import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Cutler Storage & Land Leasing</h1>
      <p>
        Secure storage solutions for RVs, autos, and containers. Plus, flexible leasing
        opportunities for 8 acres of prime land.
      </p>
    </section>
  );
};

export default Hero;