"use client";

import React from "react";
import { Experience } from "@/modules/experience/data/experience";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Badge } from "@/shared/ui/badge";
import { Globe, Github, ExternalLink, GraduationCap, Calendar, Building2, ChevronRight } from "lucide-react";

interface TimelineItemProps {
  experience: Experience;
}

const TimelineItem = ({ experience }: TimelineItemProps) => {
  const { name, href, title, logo, start, end, description, links } = experience;
  const [expanded, setExpanded] = React.useState(true);
  const isEducation = title.toLowerCase().includes('bachelor') || 
                      title.toLowerCase().includes('master') || 
                      title.toLowerCase().includes('phd');

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative mb-6"
    >
      {/* Content */}
      <motion.div
        layout
        initial={{ borderColor: "rgba(255,255,255,0.1)" }}
        whileHover={{ borderColor: "rgba(255,255,255,0.2)", y: -2 }}
        className="rounded-xl bg-white/5 border border-white/10 overflow-hidden transition-all hover:bg-white/[0.07]"
      >
        {/* Header with date badge */}
        <motion.div 
          layout
          className="p-4 border-b border-white/5 bg-white/[0.03] cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex-shrink-0">
                {isEducation ? (
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                ) : (
                  <Building2 className="w-5 h-5 text-blue-400" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400">
                  {name}
                </h3>
                <p className="text-white/60 text-sm mt-1">{title}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-xs text-blue-400/90 border border-white/5">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              <span>{start}</span>
              {end && (
                <>
                  <span className="text-white/40 mx-1">→</span>
                  <span>{end}</span>
                </>
              )}
              {!end && (
                <Badge variant="secondary" className="ml-2 py-0 h-4 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                  Present
                </Badge>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-end">
            <motion.div 
              animate={{ rotate: expanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="h-6 w-6 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10"
            >
              <ChevronRight className="h-3.5 w-3.5 text-white/50" />
            </motion.div>
          </div>
        </motion.div>

        {/* Description List */}
        <motion.div 
          layout
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: expanded ? 1 : 0,
            height: expanded ? "auto" : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {description && (
            <div className="p-5">
              <ul className="space-y-3">
                {description.map((desc, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-sm"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex-shrink-0" />
                    <span className="text-white/70">{desc}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Links Section */}
              {links && links.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {links.map((link, idx) => {
                    const Icon = link.icon.toLowerCase() === 'globe' ? Globe : 
                              link.icon.toLowerCase() === 'github' ? Github : ExternalLink;
                    
                    return (
                      <motion.a
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-105"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10"
                        >
                          <Icon className="h-3.5 w-3.5" />
                          <span className="text-xs">{link.name}</span>
                        </Badge>
                      </motion.a>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TimelineItem;