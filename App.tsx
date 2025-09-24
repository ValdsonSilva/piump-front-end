import React, { useEffect } from 'react';
import "./index.css";
import { Slot } from 'expo-router';
import { maybeCheckUpdates } from './lib/updates';

export default function App() {

  useEffect(() => {
    maybeCheckUpdates();
  }, [])

  return (
    <Slot />
  );
}
