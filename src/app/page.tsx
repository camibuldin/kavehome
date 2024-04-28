import Image from "next/image";
import styles from "./page.module.css";
import kavehome2 from "../../public/kavehome2.png";

export default function Home() {
  const categories = [
    "We are Kave",
    "Estancias",
    "Muebles",
    "Decoración",
    "Proyectos",
    "Estilos",
  ];
  // function handleCategory(category: string) {
  //   switch (category){
  //     case 'we-are-kave':
  //       return 'We are Kave'
  //     case 'decoracion':
  //       return
  //   }
  // }

  return (
    <section>
      <div>
        <Image
          src={kavehome2}
          alt={"kavehome2"}
          objectFit="cover"
          layout="responsive"
        />
        <h3 className={styles.onTopImgH3}>Premium Collection</h3>
        <h1 className={styles.onTopImgH1}>Kavehome</h1>
      </div>
      <div className={styles.inspirateSection}>
      <div className={styles.categoriesDiv}>
        {categories.map((category: string) => 
          <div className={styles.category}>{category}</div>
        )}
      </div>
      <h2 className={styles.inspirateTitle}>Inspírate</h2>
      </div>
    </section>
  );
}
