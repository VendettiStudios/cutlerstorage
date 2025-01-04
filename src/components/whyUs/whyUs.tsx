import styles from "./whyUs.module.css";

const WhyUs = () => {
  return (
    <section className={styles.whyUs}>
      <h2>Why Choose Us?</h2>
      <ul className={styles.benefits}>
        <li>
          <strong>Convenient Location:</strong> Serving Cutler, Visalia, Fresno, Tulare, and nearby areas in Tulare County.
        </li>
        <li>
          <strong>Secure Storage:</strong> Gated, well-maintained facility for RVs, autos, and more.
        </li>
        <li>
          <strong>Flexible Land Leasing:</strong> Over 8 acres of prime land with customizable lease terms.
        </li>
        <li>
          <strong>Affordable Rates:</strong> Competitive pricing for all your storage and land needs.
        </li>
        <li>
          <strong>Farming Logistics Assistance:</strong> Expert support to help you manage farming operations.
        </li>
      </ul>
    </section>
  );
};

export default WhyUs;