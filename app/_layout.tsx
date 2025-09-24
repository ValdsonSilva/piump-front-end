import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fefefe',  // Cor de fundo do cabeçalho
        },
        headerTintColor: '#fff',  // Cor do título
        headerTitleStyle: {
          fontWeight: 'bold',  // Título em negrito
        },
      }}
    >
      {/* Definindo as telas e suas rotas */}
      <Stack.Screen name="index" />   {/* Página inicial */}
      <Stack.Screen name="login" />   {/* Página de Login */}
      <Stack.Screen name="sign-up" /> {/* Página de Cadastro */}
      <Stack.Screen name="not-found" /> {/* Página de erro 404 */}
    </Stack>
  );
};