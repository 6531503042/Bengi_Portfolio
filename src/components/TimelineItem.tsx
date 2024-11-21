import React from "react";
import { Experience } from "@/types";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import * as LucideIcons from "lucide-react";

interface TimelineItemProps {
  experience: Experience;
}

const TimelineItem = ({ experience }: TimelineItemProps) => {
  const { name, href, title, logo, start, end, description, links } = experience;

  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="relative ml-10 py-4"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white hover:scale-105 transition-transform"
      >
        <Avatar className="h-12 w-12 border">
          <AvatarImage src={logo} alt={name} className="bg-background object-contain" />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
      </a>

      <div className="flex flex-1 flex-col justify-start gap-1">
        <time className="text-xs text-muted-foreground">
          <span>{start}</span>
          {end && <span> - {end}</span>}
          {!end && <span> - Present</span>}
        </time>

        <h2 className="font-semibold leading-none">{name}</h2>
        {title && <p className="text-sm text-muted-foreground">{title}</p>}
        
        {description && (
          <ul className="ml-4 list-outside list-disc space-y-1 mt-2">
            {description.map((desc, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="prose text-sm dark:prose-invert"
              >
                {desc}
              </motion.li>
            ))}
          </ul>
        )}

        {links && links.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {links.map((link, idx) => {
              const IconComponent = (LucideIcons as Record<string, React.ComponentType>)[link.icon];
              return IconComponent ? (
                <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer">
                  <Badge variant="secondary" className="flex items-center gap-1 hover:bg-secondary/80">
                    <IconComponent className="h-3 w-3" />
                    <span>{link.name}</span>
                  </Badge>
                </a>
              ) : null;
            })}
          </div>
        )}
      </div>
    </motion.li>
  );
};

export default TimelineItem;