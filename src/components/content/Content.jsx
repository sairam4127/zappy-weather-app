import styles from './Content.module.css'


const Content=({obj})=>{
    const {cityName,cityTemp,cityll}=obj;
     return<li className={styles.item}>
        <p className={styles.itemPara}>{cityName}</p>
        <p className={styles.itemPara}>{cityTemp}</p>
        <p className={styles.itemPara}>{cityll}</p>
     </li>
}

export default Content