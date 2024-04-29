import { useRouter } from "next/router";
import Layout from "../../app/layout";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const router = useRouter();
  const [product, setProduct] = useState<any>();

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
        const prod = data.results.filter(
          (prod: any) => prod.productSku === router.query.id
        );
        console.log("-----", prod[0]);
        setProduct(prod[0]);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <Layout>
      <div>
        <div>
          {product?.productImageUrl && (
            <Image
              src={product.productImageUrl}
              alt={""}
              width={100}
              height={100}
            />
          )}
        </div>
        <div>
          <h3>{product?.productCollection}</h3>
          <p>{product?.productCategoryHierarchy}</p>
          <p>{product?.productPrice}</p>
          <p>{product?.productName
          }</p>
        </div>
      </div>
    </Layout>
  );
}
