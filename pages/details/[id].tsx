"use client";
import { useRouter } from "next/router";
import Layout from "../../app/layout";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../app/page.module.css"
import dynamic from "next/dynamic";

const ProductDetails=()=> {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const [product, setProduct] = useState<any>();

  useEffect(() => {
    if (!router.isReady) return;
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://kavehome.com/nfeeds/es/es/templatebuilder/20240426"
        );
        if (!response.ok) {
          throw new Error("No se pudo obtener la respuesta de la red");
        }
        const data = await response.json();
        const prod = data.results.filter(
          (prod: any) => prod.productSku === router.query.id
        );
        setProduct(prod[0]);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [router.isReady, router.query.id]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Layout>
      <div className={styles.detailsContainer}>
        <div className={styles.imgDetailsDiv}>
          {product?.productImageUrl && 
           <Image
           objectFit="scale-down"
           width={700}
           height={710}
           src={product.productImageUrl}
           alt={"foto de producto"}
         />
         }
        </div>
        <div className={styles.productDetailsDiv}>
          <h3>{product?.productCollection}</h3>
          <p className={styles.categoryDetails}>{product?.productCategoryHierarchy}</p>
          <p className={styles.priceDetails}>{product?.productPrice}</p>
          <p >{product?.productName}</p>
        </div>
      </div>
    </Layout>
  );
}
export default dynamic (() => Promise.resolve(ProductDetails), {ssr: false})
