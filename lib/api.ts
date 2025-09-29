import axios, { AxiosError, AxiosResponse } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Ajuste a chave conforme seu app
const TOKEN_KEY = "@app:token";

// Cache em memória para evitar I/O do AsyncStorage a cada request
let inMemoryToken: string | null = null;

export const Token = {
    async get(): Promise<string | null> {
        if (inMemoryToken) return inMemoryToken;
        const saved = await AsyncStorage.getItem(TOKEN_KEY);
        inMemoryToken = saved;
        return saved;
    },
    async set(token: string) {
        inMemoryToken = token;
        await AsyncStorage.setItem(TOKEN_KEY, token);
    },
    async clear() {
        inMemoryToken = null;
        await AsyncStorage.removeItem(TOKEN_KEY);
        console.log("sessão encerrada!")
    },
};

// Em RN, "localhost" do device não é o do seu PC. Para Android emulador use 10.0.2.2.
// Garanta que sua URL na env já esteja correta, ex: http://10.0.2.2:3333 ou http://SEU_IP:3333
// const BASE_URL = (process.env.EXPO_BASE_URL || "").replace(/\/$/, "");
const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL

export const api = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
    headers: { "Content-Type": "application/json" },
});

// --- Interceptor de REQUISIÇÃO: injeta Authorization: Bearer <token> ---
api.interceptors.request.use(
    async (config: any) => {
        const token = await Token.get();
        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            };
        }
        return config;
    },
    (error: any) => Promise.reject(error)
);

// --- Interceptor de RESPOSTA: trata 401 e normaliza mensagem de erro ---
api.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError<any>) => {
        if (error.response?.status === 401) {
            await Token.clear();
        }
        const message =
            (error.response?.data as any)?.error ??
            error.message ??
            "Erro inesperado ao comunicar com o servidor.";
        return Promise.reject(new Error(message));
    }
);

export async function ping() {
  console.log('API baseURL =>', api.defaults.baseURL);
  try {
    const r = await api.get('/');
    console.log('PING OK', r.status);
  } catch (e:any) {
    console.log('PING FAIL', e.message);
  }
}

// Tipagens úteis
export type User = {
    id: string;
    name: string;
    email: string;
    userType: string; // ou "admin" | "user" | ...
};

export type LoginResponse = {
    token: string;
    user: User;
};
