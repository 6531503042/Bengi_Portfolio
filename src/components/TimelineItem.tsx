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
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="relative ml-10 py-6 first:pt-0 last:pb-0"
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -left-16 top-6 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 hover:scale-105 transition-transform group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Avatar className="h-12 w-12 border dark:border-gray-700">
          <AvatarImage src={logo} alt={name} className="bg-background object-contain" />
          <AvatarFallback className="bg-primary/10 dark:bg-primary/20">{name[0]}</AvatarFallback>
        </Avatar>
      </motion.a>

      <div className="flex flex-1 flex-col justify-start gap-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
        <time className="text-xs text-muted-foreground flex items-center gap-2">
          <span className="font-semibold">{start}</span>
          {end && (
            <>
              <span className="text-gray-400">→</span>
              <span className="font-semibold">{end}</span>
            </>
          )}
          {!end && <span className="text-primary dark:text-primary-foreground font-medium">Present</span>}
        </time>

        <div className="space-y-1">
          <h2 className="font-semibold leading-none text-lg text-gray-900 dark:text-gray-100">{name}</h2>
          {title && <p className="text-sm text-muted-foreground">{title}</p>}
        </div>
        
        {description && (
          <ul className="ml-4 list-outside list-disc space-y-2 mt-2">
            {description.map((desc, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="prose dark:prose-invert text-sm text-gray-600 dark:text-gray-300"
              >
                {desc}
              </motion.li>
            ))}
          </ul>
        )}

        {links && links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {links.map((link, idx) => {
              let Icon;
              switch (link.icon) {
                case 'Globe':
                  Icon = Globe;
                  break;
                case 'Github':
                  Icon = Github;
                  break;
                default:
                  Icon = ExternalLink;
              }
              
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
                    className="flex items-center gap-1.5 hover:bg-secondary/80 dark:hover:bg-secondary/20 transition-colors"
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
    </motion.li>
  );
};

export default TimelineItem;