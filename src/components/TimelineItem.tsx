import React from "react";
import { Experience } from "@/types";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Globe, Github, ExternalLink, GraduationCap, Calendar, Building2 } from "lucide-react";

interface TimelineItemProps {
  experience: Experience;
}

const TimelineItem = ({ experience }: TimelineItemProps) => {
  const { name, href, title, logo, start, end, description, links } = experience;
  const isEducation = title.toLowerCase().includes('bachelor') || title.toLowerCase().includes('master') || title.toLowerCase().includes('phd');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-8 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent" />

      {/* Timeline dot */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute left-0 -translate-x-1/2 top-0"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-lg" />
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block rounded-full p-2 bg-[#1a1b1e] border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/20"
          >
            <Avatar className="h-10 w-10">
              <AvatarImage src={logo} alt={name} />
              <AvatarFallback className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-white">
                {name[0]}
              </AvatarFallback>
            </Avatar>
          </a>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative">
        {/* Date Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400/90 mb-4">
          <Calendar className="w-4 h-4" />
          <time className="flex items-center gap-2">
            <span className="font-medium">{start}</span>
            {end && (
              <>
                <span className="text-white/40">→</span>
                <span className="font-medium">
                  {end}
                  {end === "2026" && (
                    <Badge variant="secondary" className="ml-2 bg-blue-500/10 text-blue-400 border-blue-500/20">
                      Expected
                    </Badge>
                  )}
                </span>
              </>
            )}
            {!end && (
              <Badge variant="secondary" className="ml-2 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                Present
              </Badge>
            )}
          </time>
        </div>

        {/* Card Content */}
        <motion.div
          whileHover={{ y: -2 }}
          className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20"
        >
          {/* Title Section */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-3">
              {isEducation ? (
                <GraduationCap className="w-5 h-5 text-purple-400" />
              ) : (
                <Building2 className="w-5 h-5 text-blue-400" />
              )}
              <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400">
                {name}
              </h3>
            </div>
            <p className="text-white/60 font-medium">{title}</p>
          </div>

          {/* Description List */}
          {description && (
            <ul className="space-y-3 mb-4">
              {description.map((desc, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 group/item"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                  <span className="text-white/70 leading-relaxed">{desc}</span>
                </motion.li>
              ))}
            </ul>
          )}

          {/* Links Section */}
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {links.map((link, idx) => {
                const Icon = link.icon === 'Globe' ? Globe : 
                          link.icon === 'Github' ? Github : ExternalLink;
                
                return (
                  <motion.a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-white/10"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span>{link.name}</span>
                    </Badge>
                  </motion.a>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;