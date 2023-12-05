import { ref, Ref } from 'vue';

interface Auth {
  token: Ref<string | null>;
  setToken: (newToken: string) => void;
  removeToken: () => void;
  getUserInfo: () => { name: string; email: string } | null;
}

const token: Ref<string | null> = ref(localStorage.getItem('token') || null);

export function useAuth(): Auth {
  return {
    token,
    setToken(newToken: string) {
      localStorage.setItem('token', newToken);
      token.value = newToken;
    },
    removeToken() {
      localStorage.removeItem('token');
      token.value = null;
    },
    getUserInfo() {
      // Implement the logic to retrieve user information
      // from where it's stored (localStorage, vuex, or elsewhere) and return it
      // For now, let's just return null
      return null;
    },
  };
}
