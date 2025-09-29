import React, { useEffect } from 'react';
import "./index.css";
import { Slot } from 'expo-router';
import { maybeCheckUpdates } from './lib/updates';
import { api, ping } from './lib/api';

export default function App() {

  useEffect(() => {
    maybeCheckUpdates();
    (async () => {
      console.log('API baseURL =>', api.defaults.baseURL);
      try {
        const r = await api.get('/'); // ou /health
        console.log('PING OK', r.status);
      } catch (e: any) {
        console.log('PING FAIL', e.message);
      }
    })();
  }, [])

  return (
    <Slot />
  );
}
