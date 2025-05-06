import { Card } from '@/components/ui/card'
import React from 'react'
import { motion } from 'motion/react';

type FadeInCardProps = {
  children: React.ReactNode,
  initial: {
    x: number,
    y: number,
    opacity: number
  },
  animate: {
    x: number,
    y: number,
    opacity: number
  },
  delay: number
}

function FadeInCard({ children, initial, animate, delay }: FadeInCardProps) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{ duration: 0.5, ease: "easeInOut", delay: delay }}
      className="w-full"
    >
      <Card className="w-full bg-[#896aff] dark:bg-[#6d45fc] hover:shadow-md text-white border-0 transition-all duration-300 ease-in-out group cursor-default flex items-center justify-center p-6">
        {children}
      </Card>
    </motion.div>
  )
}

export default FadeInCard
