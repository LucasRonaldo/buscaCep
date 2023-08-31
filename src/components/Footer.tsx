import React from "react";

import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer>
            <p className={styles.footer}>
                <span> Buscador de CEP</span> @SENAI
            </p>
        </footer>
    )
}

export default Footer;