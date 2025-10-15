import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const AnimatedBackground = () => {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div
        className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20 ${
          isDark ? 'bg-emerald-500' : 'bg-emerald-400'
        }`}
        style={{ animationDuration: '4s' }}
      ></div>
      <div
        className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20 ${
          isDark ? 'bg-emerald-600' : 'bg-emerald-500'
        }`}
        style={{ animationDuration: '6s', animationDelay: '1s' }}
      ></div>
      <div
        className={`absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-10 ${
          isDark ? 'bg-emerald-400' : 'bg-emerald-300'
        }`}
        style={{ animationDuration: '5s', animationDelay: '2s' }}
      ></div>
    </div>
  );
};

export default AnimatedBackground;
