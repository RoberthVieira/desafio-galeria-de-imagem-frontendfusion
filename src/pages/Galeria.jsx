import Footer from "../components/Footer/Footer";
import GaleriaImg from "../components/GaleriaImg/GaleriaImg";
import Header from "../components/Header/Header";
import styles from './Galeria.module.css';
export default function Gallery(){
    return (
        <div  className={styles.mainContainer}>
            <Header/>
            <GaleriaImg/>
            <Footer/>
        </div>
    )
}