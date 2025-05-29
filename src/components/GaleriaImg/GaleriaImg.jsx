import { useState, useEffect } from "react";
import fetchPicsum from '../../services/fetchPicsum';

import styles from './GaleriaImg.module.css';

export default function GaleriaImg(){

    const [imagens, setImagens] = useState([]);

    useEffect(() => {
        fetchPicsum()
            .then(data => setImagens(data))
            .catch(error => {
                console.log('Error:', error)
            })
    }, [])

    return (
        <main className={styles.galeryContainer}>
            <div className={styles.galeryTextContent}>
                <h2>Bem-vindo à nossa galeria!</h2>
                <p>
                    Explore uma seleção de imagens incríveis capturadas por fotógrafos ao redor do mundo.
                </p>
            </div>
            <div className={styles.galeryImgContainer}>
                {imagens.map((img) => (
                    <figure key={img.download_url}>
                        <img src={img.download_url} alt={img.author} className={styles.imgGalery}/>
                    </figure>
                ))}
            </div>
        </main>
    )
}