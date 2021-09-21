import React from 'react'
import styles from './keep.module.css'
const Keep = ({title,image,content}) => {
    return (
        <div className={styles.cards}>
            <div className={styles.cards_item}>
                <div className={styles.keep}>
                        {title}
                    <div className={styles.keep_cover}>
                        {image}
                    </div>
                    <div className={styles.keep_content}>
                        {content}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Keep; 
