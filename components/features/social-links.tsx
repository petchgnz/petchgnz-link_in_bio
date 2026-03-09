'use client';

import { motion } from 'motion/react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com/petchgnz', label: 'GitHub' },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/petchgnz/',
    label: 'LinkedIn',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/petchgnz.p/',
    label: 'Instagram',
  },
];

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35}}
      className='flex items-center justify-center gap-4'
    >
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={label}
          className='flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-primary/40 hover:bg-secondary hover:text-2xl_foreground'
        >
          <Icon className='size-4' />
        </a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
