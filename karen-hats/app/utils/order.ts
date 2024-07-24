// utils/orders.ts
interface Order {
    id: string;
    userId: string;
    items: { productId: string; quantity: number }[];
    totalAmount: number;
    status: 'pending' | 'completed' | 'cancelled';
  }
  
  const orders: Order[] = [
    { id: '1', userId: '1', items: [{ productId: '1', quantity: 2 }], totalAmount: 50, status: 'pending' },
    { id: '2', userId: '2', items: [{ productId: '2', quantity: 1 }], totalAmount: 20, status: 'completed' },
    // Add more orders as needed
  ];
  
  export async function getAllOrders(): Promise<Order[]> {
    // Simulate a database query
    return orders;
  }
  
  export async function getOrderById(id: string): Promise<Order | null> {
    // Simulate a database query
    const order = orders.find((order) => order.id === id);
    return order || null;
  }
  
  export async function createOrder(newOrder: Order): Promise<Order> {
    orders.push(newOrder);
    return newOrder;
  }
  
  export async function updateOrder(id: string, updatedOrder: Partial<Order>): Promise<Order | null> {
    const index = orders.findIndex((order) => order.id === id);
    if (index === -1) return null;
  
    orders[index] = { ...orders[index], ...updatedOrder };
    return orders[index];
  }
  
  export async function deleteOrder(id: string): Promise<boolean> {
    const index = orders.findIndex((order) => order.id === id);
    if (index === -1) return false;
  
    orders.splice(index, 1);
    return true;
  }
  