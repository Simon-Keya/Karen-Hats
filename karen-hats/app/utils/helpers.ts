export const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };
  
  export const getProductImage = (imageUrl: string) => {
    return `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${imageUrl}`;
  };
  