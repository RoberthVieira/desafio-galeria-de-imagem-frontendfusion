import styles from './ArrowBtn.module.css';
export default function ArrowBtn({btnContent, eventClick}){
    return (
        <button className={styles.arrowBtn} onClick={eventClick}>
            {btnContent}
        </button>
    )
}