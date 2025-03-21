import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Cutler Storage. All rights reserved.</p>
      <p>Contact us: <a className={styles.href} href="mailto:info@cutlerstorage.com">info@cutlerstorage.com</a></p>
<p className={styles.noLinkStyle}>(858) 224-3598</p>
<p><Link href="https://VendettiStudios.com" style={{ textDecoration: 'none', color: 'inherit' }}>Built by <span style={{ textDecoration: 'underline', color: 'inherit' }}>Vendetti Studios</span></Link></p>
    </footer>
  );
};

export default Footer;  