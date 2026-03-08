'use client'

import { Button } from '../ui/button';
import { useTheme } from 'next-themes';
import { Moon, SunMedium } from 'lucide-react';

type Props = {};

function ThemeToggle({}: Props) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div>
      <Button onClick={toggleTheme}>
        {theme === "dark" ? <SunMedium /> : <Moon />}
      </Button>
    </div>
  )
}

export default ThemeToggle