import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.contact}>
        <p>
          Contact us:{" "}
          <a className={styles.href} href="mailto:info@cutlerstorage.com">
            info@cutlerstorage.com
          </a>
        </p>
        <p className={styles.noLinkStyle}>(858) 224-3598</p>
      </div>
      <h1>
        Cutler Storage & Land Leasing  
        Affordable, Secure RV & Auto Storage Near Visalia, Fresno, and Tulare
      </h1>
      <p>
        Looking for safe, secure storage for your RV, boat, or car in Tulare
        County? Cutler Storage provides reliable storage solutions and flexible
        land leasing opportunities on over 8 acres of prime property.
        Conveniently located in Cutler, CA, we serve the communities of Visalia,
        Fresno, Tulare, and beyond.
      </p>
    </section>
  );
};

export default Hero;