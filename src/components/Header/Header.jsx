import styles from './Header.module.css';
import Logo from '../../../public/galeria.png'
export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <h1>Galeria de Imagens</h1>
            <img src={Logo} alt="Logo" width={40}/>
        </header>
    )
}