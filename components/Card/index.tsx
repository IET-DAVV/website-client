import React from "react";
import styles from "./Card.module.scss"

const Card = () => {
  return(
    <div className={styles.container}>

      <div className={styles.cardHeader}><h2>Title</h2></div>
      <div className={styles.cardImage}>
        <img src="img" alt='image'/>
      </div>
      <div className={styles.cardContent}>
       
       </div>
    </div>
  )
};

export default Card;
