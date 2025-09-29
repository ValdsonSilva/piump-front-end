import { api, Token, LoginResponse } from "../lib/api";

export async function login(email: string, password: string): Promise<LoginResponse> {
  // Sua rota do backend: POST /login
  const { data } = await api.post<LoginResponse>("/users/login", { email, password });
  // Persistimos o token para os próximos requests via interceptor
  await Token.set(data.token);
  return data; // { token, user }
}

export async function logout() {
  await Token.clear();
}
