"use client";
import { useEffect, useState } from "react";
import styles from "../page.module.css";
import Image from "next/legacy/image";
import Link from "next/link";

export default function Favoritos() {
  const [page, setPage] = useState<any[]>([]);
  const [favsItems, setFavsItems] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [paginatedData, setPaginatedData] = useState<any[]>([]);
  const startIndex = Math.max(currentPage - 4, 0);
  const endIndex = Math.min(startIndex + 8, totalPages);

  function getPaginatedData(data: any[], maxItems = 21) {
    let paginatedData = [];
    for (let i = 0; i < data.length; i += maxItems) {
      let grupo = data.slice(i, i + maxItems);
      paginatedData.push(grupo);
    }
    return paginatedData;
  }

  function removeFromFavs(item: string) {
    const arrayUtil = favsItems.filter((el) => el !== item);
    setFavsItems(arrayUtil);

    localStorage.setItem("favoriteList", JSON.stringify(arrayUtil));
  }

  function addToFavs(item: string) {
    const arrayUtil = [...favsItems];
    arrayUtil.push(item);

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
          const favList = JSON.parse(favs);
          const filteredList = data.results.filter((el: any) =>
            favList.includes(el.productSku)
          );

          const paginatedData = getPaginatedData(filteredList);
          setPaginatedData(paginatedData);
          setPage(paginatedData[0]);
          setTotalPages(paginatedData.length);
        }
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (paginatedData.length) {
      setPage(paginatedData[currentPage - 1]);
    }
  }, [currentPage, paginatedData]);

  return (
    <main>
      <div className={styles.main}>
        {/* Título principal */}
        <div className={styles.titlePageDiv} role="heading">
          <h1 className={styles.productosTitle}>Lista de Favoritos</h1>
          <p className={styles.loremDescription}>Lorem ipsum dolor sit amet.</p>
        </div>

        {/* Sección de productos */}
        <div
          className={styles.productsSection}
          role="region"
          aria-label="Lista de productos favoritos"
        >
          <div className={styles.productGrid} role="list">
            {page?.map((item: any) => (
              <div
                key={item.productSku}
                className={styles.productContainer}
                role="listitem"
                aria-label={`Producto ${item.productName}`}
              >
                <div className={styles.productDiv}>
                  <div>
                    <Link href={`/details/${item.productSku}`}>
                      <Image
                        objectFit="scale-down"
                        src={item.productImageUrl}
                        alt={`Imagen del producto ${item.productName}`}
                        width={300}
                        height={250}
                        className={styles.productImg}
                        priority
                      />
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
                        aria-label={`Añadir ${item.productName} a favoritos`}
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
                        aria-label={`Eliminar ${item.productName} de favoritos`}
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
        </div>

        {/* Paginación */}
        <div className={styles.paginationContainer}>
          {totalPages > 1 && (
            <div
              className={styles.paginationDiv}
              role="navigation"
              aria-label="Paginación"
            >
              {currentPage > 4 && (
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className={styles.backBtn}
                  aria-label="Página anterior"
                >
                  <Image
                    src="/flecha-correcta.png"
                    alt="anterior"
                    width={10}
                    height={10}
                  />
                </button>
              )}
              {Array.from({ length: endIndex - startIndex }, (_, index) => (
                <button
                  className={`${styles.paginationBtn} ${
                    currentPage === index + startIndex + 1
                      ? styles.selectedPage
                      : ""
                  }`}
                  key={index + startIndex + 1}
                  onClick={() => setCurrentPage(index + startIndex + 1)}
                  aria-label={`Ir a la página ${index + startIndex + 1}`}
                  disabled={currentPage === index + startIndex + 1}
                >
                  {index + startIndex + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={styles.nextBtn}
                aria-label="Página siguiente"
              >
                <Image
                  src="/flecha-correcta.png"
                  alt="siguiente"
                  width={10}
                  height={10}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
