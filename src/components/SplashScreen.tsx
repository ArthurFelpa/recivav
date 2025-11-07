import { Leaf } from 'lucide-react';
import { motion } from 'motion/react';

export function SplashScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-400 via-green-500 to-emerald-600 flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="mb-8"
      >
        <div className="relative">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
            <Leaf className="w-20 h-20 text-emerald-500" strokeWidth={2.5} />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute -top-2 -right-2 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center shadow-lg"
          >
            <span className="text-2xl">🌍</span>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-white mb-4 text-center"
      >
        EcoLingo
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-white/90 text-center max-w-sm"
      >
        Aprenda a cuidar do planeta todos os dias!
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-12 flex gap-2"
      >
        <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
        <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
      </motion.div>
    </div>
  );
}
