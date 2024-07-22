import React, { useEffect, useState } from "react";
import { getEditorialContent, getProductList } from "../../api/magnoliaApi";
import { useUser } from "../../context/UserContext";
import { Product } from "../../models/Product";

const HomePage: React.FC = () => {
  const { user } = useUser();
  const [products, setProducts] = useState<Product[]>([]);
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const contentData = await getEditorialContent();
      const productList = await getProductList();
      setContent(contentData);
      setProducts(productList);
    };

    fetchData();
  }, []);

  if (!user) {
    return <div>Loading...</div>; // Handle loading state or redirect to login
  }

  return (
    <div>
      <h1>{content?.title}</h1>
      <p>{content?.description}</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
