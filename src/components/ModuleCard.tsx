import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { modules } from '../data/modules';
interface ModuleCardProps {
  selectedIndex: number;
}
export function ModuleCard({ selectedIndex }: ModuleCardProps) {
  const mod = modules[selectedIndex];
  const Icon = mod.icon;
  return (
    <div className="w-full max-w-md mt-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={mod.id}
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -10
          }}
          transition={{
            duration: 0.2
          }}
          className="bg-surface border border-white/5 rounded-xl p-4 flex items-center gap-4 shadow-glow-surface">
          
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{
              backgroundColor: `${mod.color}20`
            }}>
            
            <Icon
              className="w-6 h-6"
              style={{
                color: mod.color
              }} />
            
          </div>
          <div>
            <h3 className="font-orbitron font-bold text-white text-lg">
              {mod.name}
            </h3>
            <p className="text-muted text-sm">{mod.description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>);

}