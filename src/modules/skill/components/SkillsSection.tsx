"use client";
import { motion } from "framer-motion";
import {
  skillCategories,
  SkillCategory,
  Skill,
} from "@/modules/skill/data/skills";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

// Interface for tooltip position data
interface TooltipPosition {
  id: string;
  top: number;
  left: number;
  visible: boolean;
}

const SkillsSection = () => {
  // State to track all tooltip positions
  const [tooltipPositions, setTooltipPositions] = useState<
    Record<string, TooltipPosition>
  >({});
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const skillRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    setIsMounted(true);
    
    // Simulate loading time for better UX
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => {
      setIsMounted(false);
      clearTimeout(loadingTimer);
    };
  }, []);

  // Update tooltip positions when hovering
  const updateTooltipPosition = (skillId: string, visible: boolean = true) => {
    const ref = skillRefs.current[skillId];
    if (!ref) return;

    const rect = ref.getBoundingClientRect();
    const zoomLevel = 0.8; // Match the 80% zoom from layout.tsx

    setTooltipPositions((prev) => ({
      ...prev,
      [skillId]: {
        id: skillId,
        top: rect.top / zoomLevel,
        left: rect.left / zoomLevel + rect.width / zoomLevel / 2,
        visible,
      },
    }));
  };

  // Reset tooltip visibility when mouse leaves
  const hideTooltip = (skillId: string) => {
    setTooltipPositions((prev) => ({
      ...prev,
      [skillId]: { ...prev[skillId], visible: false },
    }));
  };

  const setSkillRef = (el: HTMLDivElement | null, skillId: string) => {
    if (skillRefs.current) {
      skillRefs.current[skillId] = el;
    }
  };

  // Skeleton component for skill cards
  const SkillSkeleton = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {[1, 2, 3, 4].map((index) => (
        <div
          key={index}
          className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
        >
          {/* Header skeleton */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gray-600 rounded-xl animate-pulse" />
            <div className="flex-1">
              <div className="w-24 h-5 bg-gray-600 rounded animate-pulse mb-2" />
              <div className="w-32 h-3 bg-gray-600 rounded animate-pulse" />
            </div>
          </div>

          {/* Skills grid skeleton */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((skillIndex) => (
              <div key={skillIndex} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-gray-600 rounded-xl animate-pulse" />
                <div className="w-12 h-2 bg-gray-600 rounded animate-pulse" />
              </div>
            ))}
          </div>

          {/* Specialties skeleton */}
          <div className="mt-3 p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="w-32 h-3 bg-gray-600 rounded animate-pulse mb-2" />
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((specialtyIndex) => (
                <div key={specialtyIndex} className="flex items-center gap-1.5">
                  <div className="w-1 h-1 bg-gray-600 rounded-full animate-pulse" />
                  <div className="w-16 h-2 bg-gray-600 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-visible rounded-2xl bg-white/5 backdrop-blur-sm p-6 border border-white/10"
      >
        <SkillSkeleton />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-visible rounded-2xl bg-white/5 backdrop-blur-sm p-6 border border-white/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillCategories.map((category: SkillCategory, index: number) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="relative group"
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

            {/* Content */}
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                  <category.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    {category.title}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-4 gap-3 mb-4">
                {category.skills.map((skill: Skill) => {
                  const skillId = `${category.title}-${skill.name}`;

                  return (
                    <motion.div
                      key={skill.name}
                      className="group/skill relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.15 }}
                      onMouseEnter={() =>
                        skill.specialties && updateTooltipPosition(skillId)
                      }
                      onMouseLeave={() =>
                        skill.specialties && hideTooltip(skillId)
                      }
                    >
                      <div
                        className="relative flex flex-col items-center gap-2"
                        ref={(el) => setSkillRef(el, skillId)}
                      >
                        <div className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-150">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-6 h-6 object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                            }}
                          />
                        </div>
                        <span className="text-[10px] text-gray-400 text-center">
                          {skill.name}
                        </span>
                      </div>

                      {/* Tooltip for specialized skills */}
                      {skill.specialties && (
                        <div className="absolute -top-1 -right-1 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-150">
                          <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center text-[8px] text-white font-bold">
                            +{skill.specialties.length}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Category-specific specialties */}
              {category.specialties && (
                <div className="mt-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="text-xs font-medium text-blue-400 mb-2">
                    Advanced Capabilities:
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {category.specialties.map(
                      (specialty: string, idx: number) => (
                        <li
                          key={idx}
                          className="text-[10px] text-gray-300 flex items-center gap-1.5"
                        >
                          <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                          {specialty}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Portal for skill specialty tooltips */}
      {isMounted &&
        typeof window !== "undefined" &&
        Object.values(tooltipPositions).map(
          (pos) =>
            pos.visible &&
            createPortal(
              <div
                key={pos.id}
                style={{
                  position: "fixed",
                  top: `${pos.top}px`,
                  left: `${pos.left}px`,
                  transform: "translate(-50%, -100%) scale(1.25)",
                  opacity: pos.visible ? 1 : 0,
                  zIndex: 9999,
                  pointerEvents: "none",
                  width: "12rem",
                }}
                className="animate-in fade-in-0 transition-all duration-150"
              >
                <div className="relative bg-[#1a1b1e]/95 backdrop-blur-md rounded-lg p-3 border border-white/10 shadow-xl">
                  <div className="text-[11px] font-medium text-white mb-2">
                    Specialized in:
                  </div>
                  <ul className="space-y-1.5">
                    {skillCategories.flatMap((category) =>
                      category.skills
                        .filter(
                          (skill) =>
                            `${category.title}-${skill.name}` === pos.id &&
                            skill.specialties,
                        )
                        .flatMap(
                          (skill) =>
                            skill.specialties?.map(
                              (specialty: string, idx: number) => (
                                <li
                                  key={idx}
                                  className="text-[11px] text-gray-300 flex items-center gap-2"
                                >
                                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                                  {specialty}
                                </li>
                              ),
                            ) || [],
                        ),
                    )}
                  </ul>
                  <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-[#1a1b1e] border-r border-b border-white/10 rotate-45"></div>
                </div>
              </div>,
              document.body,
            ),
        )}
    </motion.div>
  );
};

export default SkillsSection;
