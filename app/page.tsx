'use client';

import LinkCard from '@/components/features/link-card';
import ProfileHeader from '@/components/features/profile-header';
import SocialLinks from '@/components/features/social-links';
import StatusBadge from '@/components/features/status-badge';
import ThemeToggle from '@/components/theme/ThemeToggle';
import { Separator } from '@/components/ui/separator';
import { Briefcase, Github, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const exampleProjects = [
  {
    title: 'Chat Application with MERN stack',
    description: "I've learn about WebSocket and Cloudinary from this project",
    href: 'https://petchgnz-chat-app-mern.onrender.com/',
    icon: MessageCircle
  }
]

const links = [
  {
    title: 'Portfolio',
    description: '[Still in progress]',
    // href: 'https://example.com/portfolio',
    href: '#',
    icon: Briefcase,
  },
  {
    title: 'GitHub',
    description: 'Check out my GitHub repositories',
    href: 'https://github.com/petchgnz',
    icon: Github,
  },
  {
    title: 'Contact',
    description: 'Get in touch for collaborations',
    href: 'mailto:phetchgnz@gmail.com',
    icon: Mail,
  },
];

export default function Home() {
  return (
    <main className='relative min-h-screen overflow-hidden bg-background px-4 py-16'>
      {/* Decorative background elements */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden px-4 py-16'>
        <div className='absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl' />
        <div className='absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/5 blur-3xl' />
      </div>

      <div className='relative mx-auto flex max-w-md flex-col items-center gap-8'>
        <div className='grid grid-cols-3'>
          <div className=''></div>
          <StatusBadge />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <ThemeToggle />
          </motion.div>
        </div>

        <ProfileHeader
          name={'Phummarin Rojanamarn'}
          bio={
            'Web Developer working with ASP.NET on enterprise and government projects, with a strong interest in React, Next.js, and Node.js.'
          }
          handle={'petchgnz'}
          avatarUrl='/img/miniPic.JPG'
        />

        <SocialLinks />

        <div className='mt-4 flex flex-col w-full gap-5'>

          <h1 className='text-2xl font-mono font-bold text-center'>Projects</h1>
          <div className='flex flex-col w-full gap-5'>
            {exampleProjects.map((link, index) => (
              <LinkCard
                key={link.title}
                index={index}
                {...link}
              ></LinkCard>
            ))}
          </div>

          <Separator className='my-5 w-1/2 mx-auto' />

          <h1 className='text-2xl font-mono font-bold text-center'>Links</h1>
          <div className='flex flex-col w-full gap-5'>
            {links.map((link, index) => (
              <LinkCard
                key={link.title}
                index={index}
                {...link}
              ></LinkCard>
            ))}
          </div>

        </div>

        <footer className='mt-8 text-center'>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className='font-mono text-xs text-muted-foreground'
          >
            Made with care in 2026
          </motion.p>
        </footer>
      </div>
    </main>
  );
}
