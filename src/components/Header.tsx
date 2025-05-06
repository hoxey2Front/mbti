import { ThemeToggle } from "@/components/ThemeToggle"
import Link from "next/link"

export const Header = () => {
  return (
    <nav className="fixed top-0 max-w-[1000px] w-full p-4 mx-auto bg-white dark:bg-black z-50">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-black text-white dark:text-[#eee]/70">
          <Link href="/" className="bg-[#896aff] hover:bg-[#6d45fc] hover:shadow-sm shadow-[#6d45fc] transition-all duration-300 ease-in-out px-4 py-2 rounded-sm">
            1M MBTI
          </Link>
        </h1 >
        <ThemeToggle />
      </div>
    </nav >
  )
}
