import styles from "./services.module.css";

const Services = () => {
  return (
    <section className={styles.services}>
      <h2>Our Services</h2>
      <ul>
        <li>✔ Secure RV Storage</li>
        <li>✔ Auto Storage</li>
        <li>✔ Flexible Land Leasing</li>
        <li>✔ Farming Logistics Assistance</li>
      </ul>
    </section>
  );
};

export default Services;