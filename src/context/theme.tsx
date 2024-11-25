import React, { createContext, useEffect, useState } from 'react'
type Theme = 'light' | 'dark'
interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: React.PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>('light')
  useEffect(() => {
    // Lấy theme từ localStorage khi component mount
    const savedTheme = localStorage.getItem('theme') as Theme | null

    // Nếu không có saved theme, check system preference
    if (!savedTheme) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      setTheme(systemTheme)
      return
    }
    setTheme(savedTheme)
  }, [])
  useEffect(() => {
    // Cập nhật localStorage và document class khi theme thay đổi
    localStorage.setItem('theme', theme)
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
  }, [theme])
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }
  const value = {
    theme,
    setTheme,
    toggleTheme
  }
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}