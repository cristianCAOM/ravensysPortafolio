import React, { useState, useEffect } from 'react';
import { Bell, Settings, Bird } from 'lucide-react';

export function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Leer usuario del localStorage cuando se monta el componente
    const userData = JSON.parse(
      localStorage.getItem("user") || "{}"
    );
    setUser(userData);

    // Escuchar cambios en localStorage
    const handleStorageChange = () => {
      const userData = JSON.parse(
        localStorage.getItem("user") || "{}"
      );
      setUser(userData);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const iniciales = `${user?.username?.charAt(0)
  }`.toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");

    window.location.reload();
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-background/50 backdrop-blur-sm z-10 relative">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center shadow-glow-primary bg-background">
          <img
                src="src/assets/image/logo_ravensys.png"
                alt="Ravensys"
                className="w-9 h-8 object-contain"
          />
        </div>
        <h1 className="font-orbitron font-bold text-xl tracking-widest text-primary">
          RAVENSYS
        </h1>
      </div>

      <div className="flex items-center gap-4">
      <button
                  onClick={handleLogout}
                  className="mt-4 px-4 py-2 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors"
                >
                  Cerrar sesión
                </button>
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-orbitron font-bold text-white shadow-glow-primary cursor-pointer">
          {iniciales}
        </div>
      </div>
    </header>);

}