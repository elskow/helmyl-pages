import React, { memo, useCallback } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'

interface AnimatedLinkProps {
  children: React.ReactNode;
  getClassName: (href: string) => string;
  href: string;
}

const AnimatedLink = memo(({ children, getClassName, href }: AnimatedLinkProps) => {
  const controls = useAnimation()

  const handleMouseEnter = useCallback(async () => {
    await controls.start({
      scale: 1.1,
      transition: { duration: 0.5 },
    })
  }, [controls])

  const handleMouseLeave = useCallback(async () => {
    await controls.start({
      scale: 1.0,
      transition: { duration: 0.5 },
    })
  }, [controls])

  const className = getClassName(href)

  return (
    <Link href={href}>
      <motion.span
        className={className}
        animate={controls}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </motion.span>
    </Link>
  )
})

AnimatedLink.displayName = 'AnimatedLink'

export default AnimatedLink