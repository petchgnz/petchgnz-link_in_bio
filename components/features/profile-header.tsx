import { motion } from 'motion/react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

type ProfileHeaderProps = {
  name: string;
  bio: string;
  handle: string;
  avatarUrl?: string;
};

function ProfileHeader({ name, bio, handle, avatarUrl }: ProfileHeaderProps) {
  return (
    <motion.div className='flex flex-col items-center text-center'>
      {/* Avatar */}
      <div className='relative mb-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className='flex flex-col items-center text-center'
        >
          <Avatar className='size-28 ring-2 ring-primary/20 ring-offset-4 ring-offset-background'>
            <AvatarImage
              src={avatarUrl}
              alt={name}
            />
            <AvatarFallback className='bg-secondary text-2xl font-semibold'>
              {name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>

          <span className='absolute bottom-1 right-1 size-4 bg-green-500 ring-4 ring-background rounded-full' />
        </motion.div>
      </div>

      <motion.h1>

      </motion.h1>
    </motion.div>
  );
}

export default ProfileHeader;
