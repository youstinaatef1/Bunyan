import styles from "./CardStatus.module.css"
function CardStatus({counter, title, icon}){
    return(
        <>
         <div className={`${styles.cardStatus} d-flex align-items-center`}>
                        {/* Icon Parent */}
                        <div className={`${styles.icon} align-items-center d-flex icon justify-content-center w-100`}>
                            {/* <i className="fa-regular fa-building"></i> */}
                            {icon}
                        </div>
                        {/* Info */}
                        <div className={`${styles.info} w-100 d-flex flex-column align-items-center gap-2`}>
                            <span className={`${styles.counter}`}>{counter}</span>
                            <span className={`${styles.title}`}>{title}</span>
                        </div>
                    </div>

        
        </>
    )
}
export default CardStatus;