import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Cutler Storage. All rights reserved.</p>
      <p>Contact us: info@cutlerstorage.com</p>
      <p>(858) 224-3598</p>
    </footer>
  );
};

export default Footer;