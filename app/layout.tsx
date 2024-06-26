"use client";
import { usePathname } from "next/navigation";
import Head from "next/head";
import "./globals.css";
import styles from "./page.module.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  return (
    <html lang="es">
      <Head>
        <title>KaveHome.com - Muebles y decoración | Kave Home</title>
        <meta
          name="description"
          content="Muebles y decoración de diseño para casas con personalidad. Hola. Sígueme! Entra en nuestra casa, tu casa. Aquí hay espacio para todos. #KaveHome. Múltiples opciones de pago."
        />
      </Head>
      <body className={styles.body}>
        {/* Cabecera con rol banner */}
        <header role="banner">
          <div
            className={styles.banner}
            aria-label="Descubre la nueva colección de exterior"
          >
            <p>Discover the new Outdoor collection</p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <g id="icon">
                <path
                  id="Vector"
                  d="M6 12L10 8L6 4"
                  stroke="white"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div>

          {/* Barra de navegación con rol navigation */}
          <nav
            className={styles.navbar}
            role="navigation"
            aria-label="Navegación principal"
          >
            <Link href={"/"}>
              <svg
                width="146"
                height="20"
                viewBox="0 0 146 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Logotipo de Kave Home"
              >
                <g id="Logotype">
                  <path
                    id="Vector"
                    d="M139.032 8.84499C140.647 8.84499 141.704 9.81763 142.045 11.5806H135.894C136.236 9.84803 137.261 8.84499 139.032 8.84499ZM139.063 5.68389C134.9 5.68389 132.041 8.60182 132.041 12.8875C132.041 17.1429 135.024 20 139.249 20C141.611 20 143.568 19.3617 145.183 17.9331L142.978 15.5623C141.952 16.4134 140.678 16.8693 139.467 16.8693C137.696 16.8693 136.267 16.0182 135.894 14.0426H145.743C145.774 13.7082 145.805 13.2523 145.805 12.7964C145.836 8.57143 143.071 5.68389 139.063 5.68389ZM125.331 5.68389C123.498 5.68389 121.696 6.2614 120.608 8.02432C119.676 6.56535 118.029 5.68389 116.01 5.68389C114.426 5.68389 112.903 6.2006 111.909 7.65957V6.04863H108.274V19.6353H112.002V12.1885C112.002 10.1216 113.338 9.11854 114.954 9.11854C116.662 9.11854 117.657 10.1824 117.657 12.1581V19.6353H121.385V12.1885C121.385 10.1216 122.721 9.11854 124.336 9.11854C126.045 9.11854 127.039 10.1824 127.039 12.1581V19.6353H130.768V10.9726C130.799 7.81155 128.593 5.68389 125.331 5.68389ZM99.4194 9.08815C101.532 9.08815 103.117 10.6383 103.117 12.8267C103.117 15.0152 101.532 16.5654 99.4194 16.5654C97.3067 16.5654 95.7222 15.0152 95.7222 12.8267C95.7533 10.6383 97.3067 9.08815 99.4194 9.08815ZM99.4194 5.68389C95.1009 5.68389 91.9319 8.7538 91.9319 12.8267C91.9319 16.8997 95.1009 19.9696 99.4194 19.9696C103.738 19.9696 106.938 16.8997 106.938 12.8267C106.938 8.7538 103.769 5.68389 99.4194 5.68389ZM76.0248 7.90274V0H72.0169V19.6353H76.0248V11.5502H85.6871V19.6353H89.6949V0H85.6871V7.90274H76.0248ZM54.7739 8.84499C56.3894 8.84499 57.4458 9.81763 57.7875 11.5806H51.6359C51.9777 9.84803 52.9719 8.84499 54.7739 8.84499ZM54.8049 5.68389C50.6418 5.68389 47.7834 8.60182 47.7834 12.8875C47.7834 17.1429 50.766 20 54.9914 20C57.3526 20 59.3099 19.3617 60.9254 17.9331L58.7196 15.5623C57.6943 16.4134 56.4205 16.8693 55.2088 16.8693C53.4379 16.8693 52.0088 16.0182 51.6359 14.0426H61.4847C61.5157 13.7082 61.5468 13.2523 61.5468 12.7964C61.5468 8.57143 58.7817 5.68389 54.8049 5.68389ZM42.5018 19.6353L47.9388 6.04863H43.9931L40.3581 15.7751L36.7541 6.04863H32.6841L38.1833 19.6353H42.5018ZM24.5131 9.08815C26.6568 9.08815 28.086 10.6991 28.086 12.8267C28.086 14.9848 26.6258 16.5654 24.5131 16.5654C22.3072 16.5654 20.9402 14.8936 20.9402 12.8267C20.9402 10.7599 22.3072 9.08815 24.5131 9.08815ZM31.6278 19.6353V6.04863H27.9617V7.53799C27.0296 6.41337 25.7248 5.68389 23.7985 5.68389C19.946 5.68389 17.0566 8.7538 17.0566 12.8267C17.0566 16.8997 19.946 19.9696 23.7985 19.9696C25.6937 19.9696 27.0296 19.2401 27.9617 18.1155V19.6049H31.6278V19.6353ZM5.84089 11.5502L12.9867 19.6353H18.1751L9.13416 9.57447L17.5537 0H12.5206L5.87196 7.96352H3.97678V0H0V19.6353H4.00784V11.5502H5.84089Z"
                    fill="#1A1A14"
                  />
                </g>
              </svg>
            </Link>

            {/* Enlace a favoritos */}
            <Link href={"/favoritos"} aria-label="Ir a Favoritos">
              {pathname === "/favoritos" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.37783 12.0533L12.005 21L20.6322 12.0533C21.5912 11.0587 22.13 9.70982 22.13 8.3033C22.13 5.37437 19.8404 3 17.0161 3C15.6598 3 14.3591 3.55874 13.4 4.5533L12.005 6L10.61 4.5533C9.65093 3.55874 8.35019 3 6.9939 3C4.16957 3 1.88 5.37437 1.88 8.3033C1.88 9.70982 2.41879 11.0587 3.37783 12.0533Z"
                    fill="#1A1A14"
                    stroke="#1A1A14"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.37783 12.0533L12.005 21L20.6322 12.0533C21.5912 11.0587 22.13 9.70982 22.13 8.3033C22.13 5.37437 19.8404 3 17.0161 3C15.6598 3 14.3591 3.55874 13.4 4.5533L12.005 6L10.61 4.5533C9.65093 3.55874 8.35019 3 6.9939 3C4.16957 3 1.88 5.37437 1.88 8.3033C1.88 9.70982 2.41879 11.0587 3.37783 12.0533Z"
                    stroke="#1A1A14"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </Link>
          </nav>
        </header>

        {/* Contenido principal con rol main */}
        <main role="main" aria-label="Contenido principal" className={styles.main}> 
          {children}
        </main>
      </body>
    </html>
  );
}
