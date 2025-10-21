import React, { useEffect, useState } from 'react'

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [data-cursor="pointer"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
        }}
      />
      <div
        className="cursor-outline"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
          opacity: isHovering ? 0.8 : 0.3,
        }}
      />
    </>
  )
}

export default CustomCursor


