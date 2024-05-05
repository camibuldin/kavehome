"use client";
import { useRouter } from "next/router";
import Layout from "../../app/layout";
import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import styles from "../../app/page.module.css";
import dynamic from "next/dynamic";

const ProductDetails = () => {
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

  return (
    <Layout>
      <div className={styles.detailsContainer}>
        <div className={styles.imgDetailsDivDetails}>
          {product?.productImageUrl ? (
            <Image
              src={product?.productImageUrl}
              alt={"foto de producto"}
              className={styles.productImgDetails}
              objectFit="scale-down"
              objectPosition="center bottom"
              layout="fill"
              priority
            />
          ) : (
            ""
          )}
        </div>
        <div className={styles.productDetailsDiv}>
          <h3>{product?.productCollection}</h3>
          <p className={styles.categoryDetails}>
            {product?.productCategoryHierarchy}
          </p>
          {product?.productPrice && (
            <p className={styles.priceDetails}>{product?.productPrice}€</p>
          )}{" "}
          <p>{product?.productName}</p>
        </div>
        <div className={styles.backPageBtn}>
          <svg
          onClick={()=>router.back()}
            width="45px"
            height="45px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4 12H20M4 12L8 8M4 12L8 16"
                stroke="#000000"
                stroke-width="1.32"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </div>
    </Layout>
  );
};
export default dynamic(() => Promise.resolve(ProductDetails), { ssr: false });
