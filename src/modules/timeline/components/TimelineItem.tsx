"use client";

import React from "react";
import { Experience } from "@/modules/experience/data/experience";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Badge } from "@/shared/ui/badge";
import { Globe, Github, ExternalLink, GraduationCap, Calendar, Building2 } from "lucide-react";

interface TimelineItemProps {
  experience: Experience;
}

const TimelineItem = ({ experience }: TimelineItemProps) => {
  const { name, href, title, logo, start, end, description, links } = experience;
  const isEducation = title.toLowerCase().includes('bachelor') || 
                      title.toLowerCase().includes('master') || 
                      title.toLowerCase().includes('phd');

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-6 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-3 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-purple-500/20 to-transparent" />

      {/* Timeline dot with avatar */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-0 -translate-x-1/2 top-0 p-1.5 rounded-full bg-[#1a1b1e] border border-white/10 shadow-md hover:shadow-lg hover:border-white/20 transition-all"
      >
        <Avatar className="h-8 w-8">
          <AvatarImage src={logo} alt={name} />
          <AvatarFallback className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-white text-sm">
            {name[0]}
          </AvatarFallback>
        </Avatar>
      </a>

      {/* Content */}
      <motion.div
        whileHover={{ y: -2 }}
        className="rounded-xl bg-white/5 border border-white/10 overflow-hidden transition-all hover:bg-white/[0.07] hover:border-white/20"
      >
        {/* Header with date badge */}
        <div className="p-4 border-b border-white/5 bg-white/[0.03]">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              {isEducation ? (
                <GraduationCap className="w-4 h-4 text-purple-400" />
              ) : (
                <Building2 className="w-4 h-4 text-blue-400" />
              )}
              <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400">
                {name}
              </h3>
            </div>
            
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/5 text-xs text-blue-400/90">
              <Calendar className="w-3 h-3" />
              <span>{start}</span>
              {end && (
                <>
                  <span className="text-white/40">→</span>
                  <span>{end}</span>
                </>
              )}
              {!end && (
                <Badge variant="secondary" className="ml-1 py-0 h-4 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                  Present
                </Badge>
              )}
            </div>
          </div>
          <p className="text-white/60 text-sm">{title}</p>
        </div>

        {/* Description List */}
        {description && (
          <div className="p-4">
            <ul className="space-y-2">
              {description.map((desc, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex-shrink-0" />
                  <span className="text-white/70">{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links Section */}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-1.5 px-4 pb-4">
            {links.map((link, idx) => {
              const Icon = link.icon.toLowerCase() === 'globe' ? Globe : 
                        link.icon.toLowerCase() === 'github' ? Github : ExternalLink;
              
              return (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <Badge 
                    variant="secondary" 
                    className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10"
                  >
                    <Icon className="h-3 w-3" />
                    <span className="text-xs">{link.name}</span>
                  </Badge>
                </a>
              );
            })}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TimelineItem;