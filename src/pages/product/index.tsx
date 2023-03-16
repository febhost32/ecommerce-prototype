import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from "./product.module.css";

type Data = {
  productId: String;
  title: String;
  desc: String;
  price: String;
  rating: String;
  imageUrl: String;
};

function Product() {
  const [productData, setProductData] = useState<Data>();

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      fetch(`api/getProduct?productId=${router.query.productId}`)
        .then((res) => res.json())
        .then((data) => {
          setProductData(data);
        });
    }
  }, [router]);

  return (
    <div>
      <h1>PRODUCT DETAILS</h1>
      <div className={style.productDetails}>
        {productData && (
          <>
          <div>
          <img src={productData.imageUrl.toString()}/>
          </div>
          <div className={style.descriptionSection}>
            <span>{productData.title}</span>
            <span>{productData.desc}</span>
            <span>{`Rp. ${productData.price}`}</span>
            <span>{productData.rating}</span>
        </div>  
          </>
        )}
      </div>
    </div>
  );
}

export default Product;
