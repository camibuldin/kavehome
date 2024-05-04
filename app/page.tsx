"use client";
import { useEffect, useState } from "react";
import Image from "next/legacy/image";
import styles from "./page.module.css";
import kavehome2 from "../public/kavehome2.png";
import kavehome3 from "../public/kavehome3.png";
import Link from "next/link";

export default function Home() {
  const [favsItems, setFavsItems] = useState<string[]>([]);
  const [datos, setDatos] = useState<any>([]);
  const categories = [
    "We are Kave",
    "Estancias",
    "Muebles",
    "Decoración",
    "Proyectos",
    "Estilos",
  ];
  const footerOptions = [
    "Estancias",
    "Estilo",
    "Muebles",
    "Decoración",
    "We are Kave",
    "Proyectos",
  ];
  function removeFromFavs(item: string) {
    const arrayUtil = [...favsItems].filter((el) => el !== item);
    setFavsItems(arrayUtil);

    localStorage.setItem("favoriteList", JSON.stringify(arrayUtil));
  }

  function addToFavs(item: string) {
    const arrayUtil = [...favsItems];
    arrayUtil.push(item);
    console.log("favs", favsItems);

    setFavsItems(arrayUtil);

    localStorage.setItem("favoriteList", JSON.stringify(arrayUtil));
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://kavehome.com/nfeeds/es/es/templatebuilder/20240426"
        );
        if (!response.ok) {
          throw new Error("No se pudo obtener la respuesta de la red");
        }
        const data = await response.json();
        const favs = localStorage.getItem("favoriteList");
        if (favs) {
          setFavsItems(JSON.parse(favs));
        }
        console.log(data.results);
        setDatos(data.results.slice(0, 9));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.homePageContainer}>
      <div className={styles.homePageText}>
        <h3 className={styles.onTopImgH3}>Premium Collection</h3>
        <h1 className={styles.onTopImgH1}>Kavehome</h1>
      </div>
      <div className={styles.productsSection}>
        <div className={styles.categoriesDiv}>
          {categories.map((category, index) => (
            <div key={index} className={styles.category}>
              {category}
            </div>
          ))}
        </div>
        <h2 className={styles.inspirateTitle}>Inspírate</h2>
        <div className={styles.productArray}>
          {datos.map((item: any) => (
            <div key={item.productSku} className={styles.productContainer}>
              <div className={styles.productDiv}>
                <div>
                  <Link href={`/details/${item.productSku}`}>
                    {item.productImageUrl ? (
                      <Image
                        objectFit="scale-down"
                        src={item.productImageUrl}
                        alt={"foto de producto"}
                        width={300}
                        height={250}
                        className={styles.productImg}
                      />
                    ) : (
                      <div className={styles.svgDiv}>
                        <svg
                          width="230px"
                          height="230px"
                          viewBox="-2.4 -2.4 28.80 28.80"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="fff"
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
                              d="M13.4126 15L10.5421 10.9335C10.0849 10.2858 9.85636 9.96204 9.57524 9.85289C9.32941 9.75744 9.05583 9.76296 8.81405 9.86825C8.53756 9.98865 8.32224 10.3214 7.89161 10.9869L4.25737 16.6035C4.16197 16.7509 4.11427 16.8247 4.08048 16.9041C4.0505 16.9746 4.02872 17.0483 4.01557 17.1238C4.00075 17.2088 4.00073 17.2967 4.00068 17.4723L4 20H20.0008L20.0008 17.4604C20.0008 17.2891 20.0008 17.2035 19.9867 17.1204C19.9742 17.0467 19.9534 16.9746 19.9249 16.9055C19.8926 16.8276 19.8471 16.7551 19.7561 16.61L18.79 15.0702C17.9362 13.7095 17.5093 13.0291 16.9545 12.7811C16.4695 12.5642 15.9181 12.5492 15.4221 12.7395C14.8547 12.957 14.3915 13.6132 13.4651 14.9256L13.4126 15ZM13.4126 15L16.9545 20M20.0008 6C20.0008 7.10457 19.1054 8 18.0008 8C16.8962 8 16.0008 7.10457 16.0008 6C16.0008 4.89543 16.8962 4 18.0008 4C19.1054 4 20.0008 4.89543 20.0008 6Z"
                              stroke="#fff"
                              stroke-width="0.8879999999999999"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                      </div>
                    )}
                  </Link>
                </div>
                <div className={styles.favBtn}>
                  {!favsItems.includes(item.productSku) ? (
                    <svg
                      onClick={() => addToFavs(item.productSku)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="21"
                      viewBox="0 0 23 21"
                      fill="none"
                    >
                      <path
                        d="M11.5896 19.9792C10.3249 18.9707 4.97472 14.5893 1.83501 10.1792C0.144827 7.45951 1.21896 3.80273 3.28639 2.08767C5.54709 0.21643 8.45265 0.778278 11.2625 3.62942C11.2829 3.64942 11.308 3.65894 11.3313 3.67418C11.3591 3.69417 11.3851 3.71893 11.4158 3.73131C11.44 3.74179 11.4651 3.74084 11.4901 3.74655C11.5236 3.75417 11.5561 3.76655 11.5896 3.76655C11.6249 3.76655 11.6583 3.75417 11.6927 3.74655C11.7169 3.74084 11.741 3.74084 11.7633 3.73131C11.7968 3.71798 11.8237 3.69227 11.8535 3.67132C11.8739 3.65608 11.8981 3.64846 11.9166 3.62942C14.7283 0.777325 17.6348 0.217382 19.8918 2.08767C21.9602 3.80273 23.0343 7.46046 21.3441 10.1792C18.2063 14.5874 12.8551 18.9698 11.5896 19.9792"
                        stroke="black"
                        strokeWidth="1.3"
                      />
                    </svg>
                  ) : (
                    <svg
                      onClick={() => removeFromFavs(item.productSku)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="21"
                      viewBox="0 0 23 21"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.5896 19.9792C10.3249 18.9707 4.97472 14.5893 1.83501 10.1792C0.144827 7.45951 1.21896 3.80273 3.28639 2.08767C5.54709 0.21643 8.45265 0.778278 11.2625 3.62942C11.2829 3.64942 11.308 3.65894 11.3313 3.67418C11.3591 3.69417 11.3851 3.71893 11.4158 3.73131C11.44 3.74179 11.4651 3.74084 11.4901 3.74655C11.5236 3.75417 11.5561 3.76655 11.5896 3.76655C11.6249 3.76655 11.6583 3.75417 11.6927 3.74655C11.7169 3.74084 11.741 3.74084 11.7633 3.73131C11.7968 3.71798 11.8237 3.69227 11.8535 3.67132C11.8739 3.65608 11.8981 3.64846 11.9166 3.62942C14.7283 0.777325 17.6348 0.217382 19.8918 2.08767C21.9602 3.80273 23.0343 7.46046 21.3441 10.1792C18.2063 14.5874 12.8551 18.9698 11.5896 19.9792Z"
                        fill="black"
                      />
                      <path
                        d="M11.5896 19.9792C10.3249 18.9707 4.97472 14.5893 1.83501 10.1792C0.144827 7.45951 1.21896 3.80273 3.28639 2.08767C5.54709 0.21643 8.45265 0.778278 11.2625 3.62942C11.2829 3.64942 11.308 3.65894 11.3313 3.67418C11.3591 3.69417 11.3851 3.71893 11.4158 3.73131C11.44 3.74179 11.4651 3.74084 11.4901 3.74655C11.5236 3.75417 11.5561 3.76655 11.5896 3.76655C11.6249 3.76655 11.6583 3.75417 11.6927 3.74655C11.7169 3.74084 11.741 3.74084 11.7633 3.73131C11.7968 3.71798 11.8237 3.69227 11.8535 3.67132C11.8739 3.65608 11.8981 3.64846 11.9166 3.62942C14.7283 0.777325 17.6348 0.217382 19.8918 2.08767C21.9602 3.80273 23.0343 7.46046 21.3441 10.1792C18.2063 14.5874 12.8551 18.9698 11.5896 19.9792"
                        stroke="black"
                        strokeWidth="1.3"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <Link href={`/details/${item.productSku}`}>
                <h5 className={styles.productName}>{item.productName}</h5>
                <p className={styles.productPrice}>{item.productPrice}€</p>
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.viewAllBtnDiv}>
          <Link href={"/productos"}>
            <button className={styles.viewAllBtn}>
              VER TODOS LOS PRODUCTOS
            </button>
          </Link>
        </div>
      </div>
      <footer className={styles.footerDiv}>
        {footerOptions.map((option) => (
          <div className={styles.footerOption} key={option}>
            {option}
          </div>
        ))}
      </footer>
    </div>
  );
}
