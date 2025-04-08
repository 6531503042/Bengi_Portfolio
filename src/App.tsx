import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Waves from "./components/effects/Waves";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative min-h-screen overflow-hidden">
          {/* Global background gradient */}
          <div className="fixed inset-0 bg-gradient-to-br from-[#0B0B1E] via-[#151538] to-[#1F1155] opacity-90" />

          {/* Animated highlight points */}
          <div className="fixed inset-0 z-0">
            {/* Top left highlight */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] left-[15%] w-[30rem] h-[30rem] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] blur-xl"
            />
            
            {/* Top right highlight */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[5%] right-[10%] w-[25rem] h-[25rem] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)] blur-xl"
            />
            
            {/* Center highlight */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[40%] left-[45%] w-[40rem] h-[40rem] bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.1),transparent_70%)] blur-xl"
            />
            
            {/* Bottom left highlight */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-[15%] left-[20%] w-[35rem] h-[35rem] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] blur-xl"
            />
            
            {/* Bottom right highlight */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[10%] right-[15%] w-[30rem] h-[30rem] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)] blur-xl"
            />
          </div>

          {/* Global wave patterns */}
          <div className="fixed inset-0 z-0">
            <Waves 
              lineColor="rgba(139, 92, 246, 0.05)"
              backgroundColor="transparent"
              waveSpeedX={0.02}
              waveSpeedY={0.01}
              waveAmpX={25}
              waveAmpY={20}
              friction={0.9}
              tension={0.01}
            />
          </div>
          <div className="fixed inset-0 z-0 rotate-180">
            <Waves 
              lineColor="rgba(79, 70, 229, 0.03)"
              backgroundColor="transparent"
              waveSpeedX={0.015}
              waveSpeedY={0.012}
              waveAmpX={30}
              waveAmpY={15}
              friction={0.8}
              tension={0.02}
            />
          </div>

          {/* Main content */}
          <div className="relative z-10">
            <BrowserRouter>
              <Navigation />
              <Routes>
                <Route path="/" element={<Index />} />
              </Routes>
            </BrowserRouter>
          </div>

          <Toaster />
          <Sonner />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;