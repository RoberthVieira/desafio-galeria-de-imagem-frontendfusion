import styles from './ButtonsImg.module.css';
export default function ButtonsImg({ icon, onClick, ativo = false}){
    return (
        <button
        onClick={onClick}
        className={`${styles.btn} ${ativo ? styles.btnAtivo : ''}`}
        aria-pressed={ativo}
        >
            {icon}
        </button>
    )
}