import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DroneIconProps {
  className?: string;
  animate?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12", 
  lg: "w-16 h-16",
  xl: "w-24 h-24",
};

export function DroneIcon({ className, animate = false, size = "md" }: DroneIconProps) {
  return (
    <motion.div
      className={cn(sizeClasses[size], "relative", className)}
      animate={animate ? { y: [-5, 5, -5] } : { y: 0 }}
      transition={animate ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : {}}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Drone body */}
        <rect
          x="35"
          y="40"
          width="30"
          height="20"
          rx="4"
          fill="currentColor"
          className="text-primary"
        />
        
        {/* Propeller arms */}
        <rect x="15" y="48" width="20" height="4" rx="2" fill="currentColor" className="text-muted-foreground" />
        <rect x="65" y="48" width="20" height="4" rx="2" fill="currentColor" className="text-muted-foreground" />
        <rect x="48" y="15" width="4" height="20" rx="2" fill="currentColor" className="text-muted-foreground" />
        <rect x="48" y="65" width="4" height="20" rx="2" fill="currentColor" className="text-muted-foreground" />
        
        {/* Propellers */}
        <motion.circle
          cx="20"
          cy="20"
          r="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-accent opacity-60"
          animate={animate ? { rotate: 360 } : {}}
          transition={animate ? { duration: 0.1, repeat: Infinity, ease: "linear" } : {}}
        />
        <motion.circle
          cx="80"
          cy="20"
          r="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-accent opacity-60"
          animate={animate ? { rotate: -360 } : {}}
          transition={animate ? { duration: 0.1, repeat: Infinity, ease: "linear" } : {}}
        />
        <motion.circle
          cx="20"
          cy="80"
          r="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-accent opacity-60"
          animate={animate ? { rotate: 360 } : {}}
          transition={animate ? { duration: 0.1, repeat: Infinity, ease: "linear" } : {}}
        />
        <motion.circle
          cx="80"
          cy="80"
          r="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-accent opacity-60"
          animate={animate ? { rotate: -360 } : {}}
          transition={animate ? { duration: 0.1, repeat: Infinity, ease: "linear" } : {}}
        />
        
        {/* Center camera/gimbal */}
        <circle cx="50" cy="50" r="6" fill="currentColor" className="text-foreground" />
        <circle cx="50" cy="50" r="3" fill="currentColor" className="text-primary" />
      </svg>
      
      {/* Glow effect */}
      {animate && (
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-md animate-glow-pulse" />
      )}
    </motion.div>
  );
}