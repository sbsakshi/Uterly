"use client"

import { Home, Users, Stethoscope, BookOpen, Menu, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="sidebar fixed left-0 top-0 h-full w-16 flex flex-col items-center py-6 space-y-8">
      <Link href="/" className={`flex items-center justify-center w-[50px] h-[50px] text-[white] hover:bg-[white]/20 rounded-lg transition-all ${isActive("/") ? "bg-white/20" : ""}`}>
        <Home size={24} />
      </Link>
      <Link href="/community" className={`flex items-center justify-center w-[50px] h-[50px] text-[white] hover:bg-[white]/20 rounded-lg transition-all ${isActive("/community") ? "bg-white/20" : ""}`}>
        <Users size={24} />
      </Link>
      <Link href="/doctors" className={`flex items-center justify-center w-[50px] h-[50px] text-[white] hover:bg-[white]/20 rounded-lg transition-all ${isActive("/doctors") ? "bg-white/20" : ""}`}>
        <Stethoscope size={24} />
      </Link>
      <Link href="/resources" className={`flex items-center justify-center w-[50px] h-[50px] text-[white] hover:bg-[white]/20 rounded-lg transition-all ${isActive("/resources") ? "bg-white/20" : ""}`}>
        <BookOpen size={24} />
      </Link>
      <div className="flex-grow"></div>
      <button className="flex items-center justify-center w-[50px] h-[50px] text-[white] hover:bg-[white]/20 rounded-lg transition-all text-white">
        <Menu size={24} />
      </button>
      <Link href="/profile" className={`flex items-center justify-center w-[50px] h-[50px] text-[white] hover:bg-[white]/20 rounded-lg transition-all ${isActive("/profile") ? "bg-white/20" : ""}`}>
        <User size={24} />
      </Link>
    </div>
  )
}

