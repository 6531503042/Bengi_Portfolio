"use client";

import { DataStore, CareerItem } from '../../data/store';
import { motion } from 'framer-motion';

interface TimelineSectionProps {
  data: DataStore;
}

export default function TimelineSection({ data }: TimelineSectionProps) {
  return (
    <section id="timeline" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Experience & Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
            <div className="space-y-6">
              {data.career.map((item: CareerItem, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-lg border bg-card"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.start} - {item.end || 'Present'}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {item.description.map((desc: string, i: number) => (
                      <li key={i} className="text-sm">
                        • {desc}
                      </li>
                    ))}
                  </ul>
                  {item.links && (
                    <div className="mt-4 flex gap-4">
                      {item.links.map((link: { name: string; href: string; icon: string }, i: number) => (
                        <a
                          key={i}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              {data.education.map((item: CareerItem, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-lg border bg-card"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.start} - {item.end || 'Present'}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {item.description.map((desc: string, i: number) => (
                      <li key={i} className="text-sm">
                        • {desc}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
