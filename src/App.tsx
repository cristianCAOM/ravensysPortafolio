import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoginScreen } from './components/LoginScreen';
import { DashboardScreen } from './components/DashboardScreen';
import { useScreenInit } from './useScreenInit.js';
export function App() {
  const screenInit = useScreenInit();
  const [isLoggedIn, setIsLoggedIn] = useState(screenInit.isLoggedIn ?? false);
  return (
    <div className="w-full min-h-screen bg-background text-white">
      <AnimatePresence mode="wait">
        {!isLoggedIn ?
        <LoginScreen key="login" onLogin={() => setIsLoggedIn(true)} /> :

        <DashboardScreen key="dashboard" />
        }
      </AnimatePresence>
    </div>);

}