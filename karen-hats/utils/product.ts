// utils/products.ts
interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  }
  
  const products: Product[] = [
    { id: '1', name: 'Hat', description: 'A nice hat', price: 25, imageUrl: '/images/hat.jpg' },
    { id: '2', name: 'Cap', description: 'A cool cap', price: 20, imageUrl: '/images/cap.jpg' },
    // Add more products as needed
  ];
  
  export async function getAllProducts(): Promise<Product[]> {
    // Simulate a database query
    return products;
  }
  
  export async function getProductById(id: string): Promise<Product | null> {
    // Simulate a database query
    const product = products.find((product) => product.id === id);
    return product || null;
  }
  
  export async function searchProducts(query: string): Promise<Product[]> {
    // Simulate a database query
    return products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
  }
  
  export async function addProduct(newProduct: Product): Promise<Product> {
    products.push(newProduct);
    return newProduct;
  }
  
  export async function updateProduct(id: string, updatedProduct: Partial<Product>): Promise<Product | null> {
    const index = products.findIndex((product) => product.id === id);
    if (index === -1) return null;
  
    products[index] = { ...products[index], ...updatedProduct };
    return products[index];
  }
  
  export async function deleteProduct(id: string): Promise<boolean> {
    const index = products.findIndex((product) => product.id === id);
    if (index === -1) return false;
  
    products.splice(index, 1);
    return true;
  }
  