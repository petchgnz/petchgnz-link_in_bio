import { ArrowUpRight, Icon, LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface LinkCardProps {
  title: string;
  description?: string;
  href: string;
  icon: LucideIcon;
  index: number;
}

const LinkCard = ({ title, description, href, icon: Icon, index }: LinkCardProps) => {
  return (
    <div className=''>
      <motion.a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.4 + index * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className='group relative flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-secondary/50'
      >
        <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground'>
          <Icon className='h-5 w-5' />
        </div>

        <div className='flex-1 min-w-0'>
          <h3 className='font-semibold text-foreground'>{title}</h3>
          {description && (
            <p className='mt-0.5 truncate text-sm text-muted-foreground'>
              {description}
            </p>
          )}
        </div>

        <ArrowUpRight className='h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary' />

        <div className='absolute inset-0 -z-10 rounded-xl bg-primary/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100' />
      </motion.a>
    </div>
  );
};

export default LinkCard;
