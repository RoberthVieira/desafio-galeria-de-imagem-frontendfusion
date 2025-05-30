import { useState, useEffect } from "react";
import fetchPicsum from '../../services/fetchPicsum';

import ArrowBtn from "../Button/ArrowBtn";

import styles from './GaleriaImg.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function GaleriaImg() {

    const [offset, setOffset] = useState(0);
    const [imagens, setImagens] = useState([]);

    const larguraImagem = 310; 
    const imgsVisiveis = 3;  

    useEffect(() => {
        fetchPicsum()
            .then(data => setImagens(data))
            .catch(error => {
                console.log('Error:', error)
            })
    }, []);

    function avançarCarrosel() {
        const totalOffset = (imagens.length - imgsVisiveis) * larguraImagem;
        if(offset < totalOffset){
            setOffset(offset + larguraImagem);
        }
    }

    function voltarCarrosel() {
        if (offset > 0) {
            setOffset(offset - larguraImagem)
        }
    }

    return (
        <main className={styles.galeryContainer}>
            <div className={styles.galeryTextContent}>
                <h2>Bem-vindo à nossa galeria!</h2>
                <p>
                    Explore uma seleção de imagens incríveis capturadas por fotógrafos ao redor do mundo.
                </p>
            </div>
            <div className={styles.containerCarrosel}>
                <ArrowBtn btnContent={<FiChevronLeft color="#d9cbb3" />} eventClick={voltarCarrosel} />
                <div className={styles.galeryImgContainer}>
                    <div
                        className={styles.deslizeImg}
                        style={{ transform: `translateX(-${offset}px)`, transition: 'transform 0.5s ease' }}
                    >
                        {imagens.map((img) => (
                            <figure key={img.download_url}>
                                <img 
                                    src={img.download_url} 
                                    alt={img.author} 
                                    className={styles.imgGalery} />
                            </figure>
                        ))}
                    </div>
                </div>
                <ArrowBtn btnContent={<FiChevronRight color="#d9cbb3" />} eventClick={avançarCarrosel} />
            </div>
        </main>
    )
}