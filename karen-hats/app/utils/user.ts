// utils/users.ts
interface User {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    // Additional fields as needed
  }
  
  const users: User[] = [
    { id: '1', name: 'John Doe', email: 'john.doe@example.com', passwordHash: 'hashedpassword1' },
    { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com', passwordHash: 'hashedpassword2' },
    // Add more users as needed
  ];
  
  export async function getAllUsers(): Promise<User[]> {
    // Simulate a database query
    return users;
  }
  
  export async function getUserById(id: string): Promise<User | null> {
    // Simulate a database query
    const user = users.find((user) => user.id === id);
    return user || null;
  }
  
  export async function getUserByEmail(email: string): Promise<User | null> {
    // Simulate a database query
    const user = users.find((user) => user.email === email);
    return user || null;
  }
  
  export async function createUser(newUser: User): Promise<User> {
    users.push(newUser);
    return newUser;
  }
  
  export async function updateUser(id: string, updatedUser: Partial<User>): Promise<User | null> {
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) return null;
  
    users[index] = { ...users[index], ...updatedUser };
    return users[index];
  }
  
  export async function deleteUser(id: string): Promise<boolean> {
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) return false;
  
    users.splice(index, 1);
    return true;
  }
  