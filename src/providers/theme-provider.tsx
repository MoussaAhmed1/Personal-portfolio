'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { MotionConfig } from 'motion/react';

export const ThemeProvider = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
  return (
    <NextThemesProvider attribute='class' defaultTheme='system' {...props}>
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </NextThemesProvider>
  );
};
