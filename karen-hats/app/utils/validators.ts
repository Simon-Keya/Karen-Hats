export const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const isPasswordStrong = (password: string) => {
    return password.length >= 8;
  };
  