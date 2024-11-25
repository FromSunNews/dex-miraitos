import { Settings, ChevronDown } from 'lucide-react'
import {
  Wallet,
  Coins,
  BookOpen,
  BarChart2,
  Globe,
  Network
} from 'lucide-react'

import { MdOutlineGeneratingTokens } from "react-icons/md";
import { PiBridge } from "react-icons/pi";
import { cn } from '@/lib/utils'
import { WalletSelector } from '@/components/features/wallet-selector'
import { ToggleTheme } from '@/components/features/toggle-theme'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shared/ui/dropdown-menu"
import { motion } from 'framer-motion'
import { Logo } from '@/components/shared/logo';
import { useLocation, Link } from 'react-router-dom'

// Menu chính với icons
const mainMenuItems = [
  {
    title: 'Farm',
    path: '/farm',
    icon: MdOutlineGeneratingTokens
  },
  {
    title: 'Lend',
    path: '/lend',
    icon: Wallet
  },
  {
    title: 'Stake',
    path: '/stake',
    icon: Coins
  },
  {
    title: 'Bridge',
    path: '/bridge',
    icon: PiBridge
  },
]

// Menu More dropdown với icons
const moreMenuItems = [
  {
    title: 'Docs',
    path: '/docs',
    icon: BookOpen
  },
  {
    title: 'Analytics',
    path: '/analytics',
    icon: BarChart2
  },
  // {
  //   title: 'Governance',
  //   path: '/governance',
  //   icon: Vote
  // },
]

// Settings menu items với icons
const settingsMenuItems = [
  {
    title: 'Language',
    path: '/language',
    icon: Globe
  },
  {
    title: 'Network',
    path: '/network',
    icon: Network
  },
]

// Thêm hook để kiểm tra active route
function useActiveRoute(path: string) {
  const location = useLocation()
  return location.pathname === path
}

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto flex items-center justify-between h-16">
        {/* Logo với animation */}
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Logo />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {mainMenuItems.map((item) => {
            const Icon = item.icon
            const isActive = useActiveRoute(item.path)
            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 transition-colors",
                    isActive ? "text-background bg-primary px-3 py-1.5 rounded-md" : "hover:text-primary"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.title}
                </Link>
              </motion.div>
            )
          })}

          {/* More Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.button
                className="flex items-center gap-1 hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                More <ChevronDown className="h-4 w-4" />
              </motion.button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>More Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {moreMenuItems.map((item) => {
                const Icon = item.icon
                const isActive = useActiveRoute(item.path)
                return (
                  <DropdownMenuItem key={item.title}>
                    <Link
                      to={item.path}
                      className={cn(
                        "w-full flex items-center gap-2",
                        isActive && "text-primary"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <WalletSelector />

          {/* Settings Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.button
                className="p-2 hover:bg-accent rounded-full transition-colors"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Settings className="h-5 w-5" />
              </motion.button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />

              {/* Theme Toggle */}
              <DropdownMenuItem className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Theme
                </div>
                <ToggleTheme />
              </DropdownMenuItem>

              {/* Other Settings */}
              {settingsMenuItems.map((item) => {
                const Icon = item.icon
                const isActive = useActiveRoute(item.path)
                return (
                  <DropdownMenuItem key={item.title}>
                    <Link
                      to={item.path}
                      className={cn(
                        "w-full flex items-center gap-2",
                        isActive && "text-primary"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Button */}
          {/* <motion.button
            className="md:hidden p-2"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </motion.button> */}
        </div>
      </nav>

      {/* Mobile Menu */}
      {/* <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 mt-4">
            {mainMenuItems.map((item) => (
              <a
                key={item.title}
                href={item.path}
                className="px-4 py-2 hover:bg-accent rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
            <Separator />
            {moreMenuItems.map((item) => (
              <a
                key={item.title}
                href={item.path}
                className="px-4 py-2 hover:bg-accent rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </SheetContent>
      </Sheet> */}
    </header>
  )
}