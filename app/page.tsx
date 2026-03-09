'use client';

import ProfileHeader from '@/components/features/profile-header';
import SocialLinks from '@/components/features/social-links';
import StatusBadge from '@/components/features/status-badge';

export default function Home() {
  return (
    <main className='relative min-h-screen overflow-hidden bg-background px-4 py-16'>
      {/* Decorative background elements */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden px-4 py-16'>
        <div className='absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl' />
        <div className='absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/5 blur-3xl' />
      </div>

      <div className='relative mx-auto flex max-w-md flex-col items-center gap-8'>
        <StatusBadge />

        <ProfileHeader
          name={'Phummarin Rojanamarn'}
          bio={'Web Developer working with ASP.NET on enterprise and government projects, with a strong interest in React, Next.js, and Node.js.'}
          handle={'petchgnz'}
          avatarUrl='/img/miniPic.JPG'
        />

        <SocialLinks />

      </div>
    </main>
  );
}
