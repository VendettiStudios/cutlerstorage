import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Cutler Storage. All rights reserved.</p>
      <p>Contact us: <a className={styles.href} href="mailto:info@cutlerstorage.com">info@cutlerstorage.com</a></p>
<p className={styles.noLinkStyle}>(858) 224-3598</p>
    </footer>
  );
};

export default Footer;