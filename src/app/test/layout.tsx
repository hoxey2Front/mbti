import { Header } from "@/components/Header"
import Questions from "@/lib/data"

export default function TestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <section className="min-h-full w-full max-w-[1000px] px-4 mx-auto mt-[60px]">
        <h1 className="w-full text-lg sm:text-xl font-bold border-[#6d45fc] border-4 bg-white dark:bg-black dark:text-[#eee]/70 text-black p-4 rounded-md mb-10">Q. {Questions[0].questions[0]}</h1>
        {children}
      </section>
    </>
  )
}