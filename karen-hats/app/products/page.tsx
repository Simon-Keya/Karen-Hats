import { useEffect, useState } from 'react';
import ProductCard from '../../components/products/ProductCard';
import { getProducts } from '../../utils/api';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string; // Assuming you have an imageUrl property
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
