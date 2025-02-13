import styles from "./areasServiced.module.css";

const AreasServiced = () => {
  return (
    <section className={styles.areasServiced}>
      <h2>Areas We Serve</h2>
      <p>
        Based in the heart of Cutler, Cutler Storage offers secure storage and land leasing solutions for Tulare County and nearby communities.
      </p>
      <ul className={styles.locations}>
        <li>Cutler</li>
        <li>Visalia</li>
        <li>Fresno</li>
        <li>Tulare</li>
        <li>Dinuba</li>
        <li>Exeter</li>
        <li>Selma</li>
        <li>And other surrounding areas!</li>
      </ul>
      <p>
        Whether you need RV storage in Visalia, auto storage in Fresno, or flexible land leasing in Cutler, we’re here to meet your needs with reliable, local service.
      </p>
    </section>
  );
};

export default AreasServiced;