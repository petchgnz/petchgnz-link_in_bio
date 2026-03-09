'use client'

import { Button } from '../ui/button';
import { useTheme } from 'next-themes';
import { Moon, SunMedium } from 'lucide-react';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className='flex justify-end'>
      <Button onClick={toggleTheme} variant={'outline'} className='cursor-pointer'>
        {theme === "dark" ? <SunMedium /> : <Moon />}
      </Button>
    </div>
  )
}

export default ThemeToggle