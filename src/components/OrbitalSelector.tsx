import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Bird } from 'lucide-react';
import { modules } from '../data/modules';
interface OrbitalSelectorProps {
  selectedIndex: number;
  onSelect: (index: number) => void;
}
export function OrbitalSelector({
  selectedIndex,
  onSelect
}: OrbitalSelectorProps) {
  const radius = 140; // Desktop radius
  const step = 360 / modules.length; // angular distance between satellites
  const selectedColor = modules[selectedIndex].color;
  // Accumulated rotation so the ring keeps spinning in one direction
  // instead of snapping back to the origin angle.
  const prevIndex = useRef(selectedIndex);
  const [rotation, setRotation] = useState(90 - modules[selectedIndex].angle);
  useEffect(() => {
    let delta = selectedIndex - prevIndex.current;
    // take the shortest signed path around the ring (handles wrap-around)
    if (delta > modules.length / 2) delta -= modules.length;
    if (delta < -modules.length / 2) delta += modules.length;
    // moving forward (index +) rotates the ring backward, so subtract
    setRotation((prev) => prev - delta * step);
    prevIndex.current = selectedIndex;
  }, [selectedIndex, step]);
  return (
    <div className="relative w-[320px] h-[320px] flex items-center justify-center my-8">
      {/* Outer dashed ring — rotates with the selector */}
      <motion.div
        className="absolute inset-0 rounded-full border border-white/10 border-dashed"
        animate={{
          rotate: rotation
        }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 18
        }} />
      

      {/* Inner faint ring */}
      <div className="absolute inset-8 rounded-full border border-white/5" />

      {/* Center Logo */}
      <motion.div
        className="relative z-10 w-24 h-24 rounded-full border-2 flex items-center justify-center bg-background"
        animate={{
          borderColor: `${selectedColor}80`,
          boxShadow: `0 0 30px ${selectedColor}99`
        }}
        transition={{
          duration: 0.5
        }}>
        
        <div className="flex flex-col items-center">
          <img
                src="src/assets/image/Logo_2.png"
                alt="Ravensys"
                className="w-14 h-15 object-contain"
          />
        </div>
      </motion.div>

      {/* Rotating satellites container */}
      <motion.div
        className="absolute inset-0"
        animate={{
          rotate: rotation
        }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 18
        }}>
        
        {modules.map((mod, index) => {
          const isSelected = selectedIndex === index;
          const angleRad = mod.angle * Math.PI / 180;
          const x = Math.cos(angleRad) * radius;
          const y = Math.sin(angleRad) * radius;
          const Icon = mod.icon;
          const color = mod.color;
          const borderColor = isSelected ? color : 'rgba(255, 255, 255, 0.1)';
          return (
            <motion.button
              key={mod.id}
              onClick={() => onSelect(index)}
              className="absolute w-14 h-14 rounded-full flex items-center justify-center bg-surface border-2 z-20 group"
              style={{
                left: `calc(50% + ${x}px - 28px)`,
                top: `calc(50% + ${y}px - 28px)`
              }}
              animate={{
                // counter-rotate so the icon stays upright as the ring spins
                rotate: -rotation,
                borderColor,
                boxShadow: isSelected ?
                `0 0 22px ${color}99` :
                '0 0 0px rgba(0,0,0,0)'
              }}
              whileHover={{
                scale: 1.15,
                boxShadow: `0 0 18px ${color}80`,
                borderColor: color
              }}
              whileTap={{
                scale: 0.95
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 18
              }}
              aria-label={mod.name}
              aria-pressed={isSelected}>
              
              <Icon
                className="w-6 h-6 transition-colors"
                style={{
                  color: isSelected ? color : '#94a3b8'
                }} />
              

              {/* Tooltip on hover */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-surface border border-white/10 px-3 py-1 rounded text-xs whitespace-nowrap pointer-events-none">
                {mod.name}
              </span>
            </motion.button>);

        })}
      </motion.div>
    </div>);

}