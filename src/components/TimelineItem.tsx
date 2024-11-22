import React from "react";
import { Experience } from "@/types";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Globe, Github, ExternalLink } from "lucide-react";

interface TimelineItemProps {
  experience: Experience;
}

const TimelineItem = ({ experience }: TimelineItemProps) => {
  const { name, href, title, logo, start, end, description, links } = experience;

  return (
    <li className="relative ml-6">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex flex-col gap-4 p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="absolute -left-11 flex items-center justify-center">
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-white dark:bg-gray-800 p-1 shadow-md hover:shadow-lg transition-shadow"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src={logo} alt={name} className="bg-background" />
              <AvatarFallback className="bg-primary/10 dark:bg-primary/20">{name[0]}</AvatarFallback>
            </Avatar>
          </motion.a>
        </div>

        <div className="flex flex-col gap-2">
          <time className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="font-semibold">{start}</span>
            {end && (
              <>
                <span className="text-gray-400">→</span>
                <span className="font-semibold">{end}</span>
              </>
            )}
            {!end && (
              <Badge variant="secondary" className="ml-2">
                Present
              </Badge>
            )}
          </time>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>

          {description && (
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              {description.map((desc, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start"
                >
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/70" />
                  <span>{desc}</span>
                </motion.li>
              ))}
            </ul>
          )}

          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {links.map((link, idx) => {
                let Icon = link.icon === 'Globe' ? Globe : 
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
                      className="flex items-center gap-1.5 hover:bg-secondary/80 dark:hover:bg-secondary/20 transition-colors cursor-pointer"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span>{link.name}</span>
                    </Badge>
                  </motion.a>
                );
              })}
            </div>
          )}
        </div>
      </motion.div>
    </li>
  );
};

export default TimelineItem;