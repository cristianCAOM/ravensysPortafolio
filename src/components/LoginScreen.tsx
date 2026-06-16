import React, { useState } from 'react';
import { login } from '../services/authService';
import { motion } from 'framer-motion';
import { User, Lock } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import AlertMessage from "./componentsView/alertMessage";
export function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

    const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    try {

      const response = await login(
        username,
        password
      );

      if (!response.data?.accessToken) {
        throw new Error("No se recibió accessToken");
        }

      const {
        accessToken,
        refreshToken,
        user
      } = response.data;

      localStorage.setItem(
        "accessToken",
        accessToken
      );

      localStorage.setItem(
        "refreshToken",
        refreshToken
      );
      
      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      navigate("/dashboard");

    } catch (error) {

      console.error(error);

      setErrorMessage(
    "Usuario o contraseña incorrectos"
    );


    }
  };
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      initial={{
        opacity: 0,
        scale: 0.95
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      exit={{
        opacity: 0,
        scale: 1.05
      }}
      transition={{
        duration: 0.4
      }}>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md bg-surface border border-white/5 rounded-2xl p-8 shadow-glow-surface relative z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full border-2 border-primary/50 flex items-center justify-center bg-background shadow-glow-primary mb-6">
            <div className="flex flex-col items-center">
              <img
                src="src/assets/image/Logo_2.png"
                alt="Ravensys"
                className="w-14 h-15 object-contain"
              />
            </div>
          </div>
          <h1 className="font-orbitron font-bold text-2xl tracking-widest text-primary mb-2">
            RAVENSYS
          </h1>
          <p className="text-muted text-sm">Ingresa tus credenciales</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="w-5 h-5 text-muted" />
            </div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nombre de usuario"
              className="w-full bg-background border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder:text-muted focus:outline-none focus:border-primary/50 focus:shadow-glow-primary transition-all"
              required />
            
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="w-5 h-5 text-muted" />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              className="w-full bg-background border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder:text-muted focus:outline-none focus:border-primary/50 focus:shadow-glow-primary transition-all"
              required />
            
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-orbitron font-bold py-3 rounded-lg mt-6 shadow-glow-primary transition-all active:scale-[0.98]">
            
            Iniciar Sesión
          </button>
          <AlertMessage
            message={errorMessage}
            severity="error"
          />
        </form>
      </div>
    </motion.div>);

}
