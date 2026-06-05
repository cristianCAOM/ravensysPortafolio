import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Header } from './Header';
import { OrbitalSelector } from './OrbitalSelector';
import { ModuleCard } from './ModuleCard';
import { modules } from '../data/modules';
export function DashboardScreen() {
  const [selectedIndex, setSelectedIndex] = useState(3); // Default to Almacén (index 3)
  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + modules.length) % modules.length);
  };
  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % modules.length);
  };
  return (
    <motion.div
      className="min-h-screen flex flex-col relative overflow-hidden"
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
      transition={{
        duration: 0.5
      }}>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <Header />

      <main className="flex-1 flex flex-col items-center justify-center p-6 relative z-10">
        <div className="text-center mb-4">
          <h2 className="font-orbitron font-bold text-2xl mb-2">
            Bienvenido, AA
          </h2>
          <p className="text-muted text-sm">
            Selecciona un módulo para comenzar
          </p>
        </div>

        <OrbitalSelector
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex} />
        

        {/* Carousel Controls */}
        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={handlePrev}
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Anterior">
            
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {modules.map((mod, idx) =>
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${idx === selectedIndex ? 'w-4' : 'bg-white/20 hover:bg-white/40'}`}
              style={{
                backgroundColor:
                idx === selectedIndex ? mod.color : undefined
              }}
              aria-label={`Ir al módulo ${mod.name}`} />

            )}
          </div>

          <button
            onClick={handleNext}
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Siguiente">
            
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <ModuleCard selectedIndex={selectedIndex} />
      </main>
    </motion.div>);

}