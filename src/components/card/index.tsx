
import styles from './card.module.css'

interface CardPropTypes {
    data: {
        productId: String,
        title: String,
        desc: String,
        price: String,
        rating: String,
        imageUrl: String
    }
}

const Card = ({data} : CardPropTypes) => {

    const onClickRedirect = (productId : String) => {
        location.href = `/product?productId=${productId}`
    }
    
    return (    
        <div className={styles.container} onClick={() => onClickRedirect(data.productId)}>
            <div className={styles.imgcontainer}>
                <img src={data.imageUrl.toString()}/>
            </div>
            <div className={styles.contentrow}>   
                <h3>{data.title}</h3>
                <p>{data.desc}</p>
                <p>{data.price}</p>
                <p>{data.rating}</p>
            </div>
        </div>
    )
}

export default Card