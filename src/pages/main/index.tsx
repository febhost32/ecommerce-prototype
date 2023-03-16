import styles from './main.module.css'

import { useState, useEffect } from "react"
import Card from "@/components/card"

type productData = {
    productId: String,
    title: String,
    desc: String,
    price: String,
    rating: String,
    imageUrl: String
}[]


function Main() {
    const [productData, setProductData] = useState(null)

    useEffect(() => {
        fetch('api/getAllProducts')
        .then(res => res.json())
        .then(data => {
            setProductData(data);
        });
    },[]);

    const productItems = (productData: productData) => productData.map((product) => <Card data={product} />)
 
    return (
        <div className={styles.cardContainer}>
            {
                productData && productItems(productData)
            }
        </div>
    )
        
}

export default Main