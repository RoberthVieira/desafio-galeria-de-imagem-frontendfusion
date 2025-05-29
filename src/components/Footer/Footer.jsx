import styles from './Footer.module.css';
export default function Footer(){
    return(
        <footer className={styles.footerContainer}>
            <p>
                &copy;2025 <span>Roberth Vieira</span>
            </p>
        </footer>
    )
}