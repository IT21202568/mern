import React from 'react';
import styles from "./Footer.module.scss";

const Footer = () => {
  // Get the current year using JavaScript Date object
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>&copy; {currentYear} All Rights Reserved</div>
  );
};

export default Footer;
