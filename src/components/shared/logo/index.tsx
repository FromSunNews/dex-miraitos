import logo from '@/assets/logo/logo.svg'

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <img src={logo} alt="logo mirai-dex" className="w-auto h-10" />
    </a>
  )
}