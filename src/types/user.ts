// src/types/user.ts

export interface User {
    id: number;
    name: string;
    email: string;
    profile: {
      id: number;
      name: string;
      logo: string;
    };
    level: {
      id: number;
      name: string;
      icon: string;
    };
    status: {
      id: number;
      name: string;
      icon: string;
      color: string;
    };
  }
  