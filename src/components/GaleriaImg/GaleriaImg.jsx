import { useState, useEffect, useRef } from "react";
import { useFavImage } from '../../contexts/FavoritoContext';

import fetchPicsum from '../../services/fetchPicsum';

import ArrowBtn from "../Button/ArrowBtn";
import ButtonsImg from "../ButtonsImg/ButtonsImg";
import { MdStar, MdStarBorder } from "react-icons/md";
import { FiInfo } from 'react-icons/fi';

import styles from './GaleriaImg.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function GaleriaImg() {
    const [offset, setOffset] = useState(0);
    const [imagens, setImagens] = useState([]);
    const [imagemSelecionada, setImagemSelecionada] = useState(null);

    const containerRef = useRef(null);
    const imgRefs = useRef([]);

    const { favoriteImages, addFavs, removeFavs } = useFavImage();

    useEffect(() => {
        fetchPicsum()
            .then(data => setImagens(data))
            .catch(console.error);
    }, []);

    // Função para obter largura real da primeira imagem renderizada
    const getImgWidth = () => {
        if (imgRefs.current[0]) {
            return imgRefs.current[0].clientWidth + 20; // +20 é margem horizontal (10 + 10)
        }
        return 320; // fallback padrão
    };

    const avançarCarrosel = () => {
        const imgWidth = getImgWidth();
        const containerWidth = containerRef.current ? containerRef.current.clientWidth : 0;
        const maxOffset = (imagens.length * imgWidth) - containerWidth;
        setOffset((oldOffset) => {
            let novoOffset = oldOffset + imgWidth;
            if (novoOffset > maxOffset) novoOffset = maxOffset;
            return novoOffset;
        });
    };

    const voltarCarrosel = () => {
        const imgWidth = getImgWidth();
        setOffset((oldOffset) => {
            let novoOffset = oldOffset - imgWidth;
            if (novoOffset < 0) novoOffset = 0;
            return novoOffset;
        });
    };

    const mudarFavs = (img) => {
        const isFavorita = favoriteImages.some(fav => fav.id === img.id);
        if (isFavorita) removeFavs(img);
        else addFavs(img);
    };

    const imagensOrdenadas = [...imagens].sort((a, b) => {
        const aFav = favoriteImages.some(fav => fav.id === a.id);
        const bFav = favoriteImages.some(fav => fav.id === b.id);
        return bFav - aFav;
    });

    return (
        <main className={styles.galeryContainer}>
            <div className={styles.galeryTextContent}>
                <h2>Bem-vindo à nossa galeria!</h2>
                <p>Explore uma seleção de imagens incríveis capturadas por fotógrafos ao redor do mundo.</p>
            </div>
            <div className={styles.containerCarrosel}>
                <ArrowBtn btnContent={<FiChevronLeft color="#d9cbb3" />} eventClick={voltarCarrosel} />
                <div className={styles.galeryImgContainer} ref={containerRef} style={{ overflow: 'hidden' }}>
                    <div
                        className={styles.deslizeImg}
                        style={{
                            display: 'flex',
                            flexWrap: 'nowrap',
                            transform: `translateX(-${offset}px)`,
                            transition: 'transform 0.5s ease',
                        }}
                    >
                        {imagensOrdenadas.map((img, index) => {
                            const isFavorita = favoriteImages.some(fav => fav.id === img.id);
                            return (
                                <figure
                                    key={img.id}
                                    className={styles.imageWrapper}
                                    ref={el => imgRefs.current[index] = el}
                                    style={{ margin: '0 10px', flexShrink: 0 }}
                                >
                                    <img
                                        src={img.download_url}
                                        alt={img.author}
                                        className={styles.imgGalery}
                                        style={{ width: '300px', borderRadius: '10px' }}
                                    />
                                    <div className={styles.buttonsOverlay}>
                                        <ButtonsImg
                                            icon={isFavorita ? <MdStar color="#FFD700" /> : <MdStarBorder color="#fff" />}
                                            onClick={() => mudarFavs(img)}
                                            ativo={isFavorita}
                                        />
                                        <ButtonsImg
                                            icon={<FiInfo />}
                                            onClick={() => setImagemSelecionada(img)}
                                        />
                                    </div>
                                    {imagemSelecionada?.id === img.id && (
                                        <div className={styles.overlayInfo}>
                                            <p>Autor: {img.author}</p>
                                            <p>Resolução: {img.width} x {img.height}</p>
                                            <button onClick={() => setImagemSelecionada(null)} className={styles.buttonInfo}>Fechar</button>
                                        </div>
                                    )}
                                </figure>
                            );
                        })}
                    </div>
                </div>
                <ArrowBtn btnContent={<FiChevronRight color="#d9cbb3" />} eventClick={avançarCarrosel} />
            </div>
        </main>
    );
}
